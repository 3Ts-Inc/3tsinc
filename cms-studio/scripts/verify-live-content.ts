import { getCliClient } from "sanity/cli";
import { defaultThreeTsContent } from "../../src/lib/siteContent";
import { defaultMawzunContent } from "../../../mawzun-advisory/src/lib/siteContent";

function findMissing(actual: unknown, expected: unknown, path = ""): string[] {
  if (expected === null || expected === undefined) return [];
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual) || actual.length === 0) return [path];
    return [];
  }
  if (typeof expected === "object") {
    if (!actual || typeof actual !== "object" || Array.isArray(actual)) return [path];
    if ("src" in (expected as Record<string, unknown>) && "asset" in (actual as Record<string, unknown>)) {
      const asset = (actual as { asset?: { _ref?: string } }).asset;
      return asset?._ref ? [] : [path];
    }
    return Object.entries(expected).flatMap(([key, value]) => findMissing((actual as Record<string, unknown>)[key], value, path ? `${path}.${key}` : key));
  }
  return actual === undefined || actual === null || actual === "" ? [path] : [];
}

async function verify() {
  const baseClient = getCliClient({ apiVersion: "2026-07-14" });
  const [threeTs, mawzun] = await Promise.all([
    baseClient.withConfig({ dataset: "three-ts" }).fetch(`*[_id == "threeTsSite"][0]`),
    baseClient.withConfig({ dataset: "mawzun" }).fetch(`*[_id == "mawzunSite"][0]`),
  ]);
  const missing = [
    ...findMissing(threeTs, defaultThreeTsContent).map((item) => `3Ts: ${item}`),
    ...findMissing(mawzun, defaultMawzunContent).map((item) => `Mawzun: ${item}`),
  ];
  if (missing.length) throw new Error(`Missing live CMS fields:\n${missing.join("\n")}`);
  console.log("Live CMS completeness check passed for both singleton documents.");
}

verify().catch((error: unknown) => { console.error(error); process.exitCode = 1; });
