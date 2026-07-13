import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { mawzunSite } from "./schemas/mawzunSite";
import { threeTsSite } from "./schemas/threeTsSite";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;

if (!projectId) {
  throw new Error("SANITY_STUDIO_PROJECT_ID is required to run the CMS Studio.");
}

function singletonStructure(
  schemaType: "threeTsSite" | "mawzunSite",
  documentId: "threeTsSite" | "mawzunSite",
  title: string,
): StructureResolver {
  return (S) =>
    S.list()
      .title(title)
      .items([
        S.listItem()
          .title("Site content")
          .child(S.document().schemaType(schemaType).documentId(documentId)),
      ]);
}

export default defineConfig([
  {
    name: "three-ts",
    title: "3Ts Consulting",
    basePath: "/three-ts",
    projectId,
    dataset: "three-ts",
    plugins: [
      structureTool({
        structure: singletonStructure(
          "threeTsSite",
          "threeTsSite",
          "3Ts Consulting",
        ),
      }),
      visionTool(),
    ],
    templates: [],
    schema: { types: [threeTsSite] },
  },
  {
    name: "mawzun",
    title: "Mawzun Advisory",
    basePath: "/mawzun",
    projectId,
    dataset: "mawzun",
    plugins: [
      structureTool({
        structure: singletonStructure(
          "mawzunSite",
          "mawzunSite",
          "Mawzun Advisory",
        ),
      }),
      visionTool(),
    ],
    templates: [],
    schema: { types: [mawzunSite] },
  },
]);
