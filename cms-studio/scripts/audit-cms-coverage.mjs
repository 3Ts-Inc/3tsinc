import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const repositories = [
  path.resolve(process.cwd(), ".."),
  path.resolve(process.cwd(), "../../mawzun-advisory"),
];

const allowedVisibleText = new Set(["Principle 0"]);
const allowedAttributes = new Set([
  "3Ts Consulting logo",
  "3Ts Consulting cups",
  "Warm constellation lines across a dark textured field",
]);

function sourceFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...sourceFiles(fullPath));
    else if (entry.isFile() && fullPath.endsWith(".tsx")) files.push(fullPath);
  }
  return files;
}

const failures = [];
for (const repository of repositories) {
  for (const file of sourceFiles(path.join(repository, "src"))) {
    const source = fs.readFileSync(file, "utf8");
    const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const visit = (node) => {
      if (ts.isJsxText(node)) {
        const value = node.text.trim().replace(/\s+/g, " ");
        if (/[A-Za-z]{2}/.test(value) && !/^&[a-z]+;$/.test(value) && !allowedVisibleText.has(value)) failures.push({ file, node, value });
      }
      if (ts.isJsxAttribute(node) && ["alt", "title", "placeholder"].includes(node.name.text) && node.initializer && ts.isStringLiteral(node.initializer)) {
        const value = node.initializer.text;
        if (/[A-Za-z]/.test(value) && !allowedAttributes.has(value)) failures.push({ file, node, value: `${node.name.text}=${value}` });
      }
      ts.forEachChild(node, visit);
    };
    visit(tree);
    for (const failure of failures.filter((item) => item.file === file)) {
      failure.line = tree.getLineAndCharacterOfPosition(failure.node.pos).line + 1;
    }
  }
}

if (failures.length) {
  for (const failure of failures) console.error(`${failure.file}:${failure.line}: static editorial text: ${failure.value}`);
  process.exitCode = 1;
} else {
  console.log("CMS coverage audit passed: no unapproved editorial JSX text or literal content attributes remain.");
}
