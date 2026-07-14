import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";
import { defaultThreeTsContent, type SiteImage } from "../../src/lib/siteContent";

const client = getCliClient({ apiVersion: "2026-07-14" }).withConfig({ dataset: "three-ts" });
const studioDirectory = path.dirname(fileURLToPath(import.meta.url));
const siteDirectory = path.resolve(studioDirectory, "../..");

function mergeMissing(existing: unknown, fallback: unknown): unknown {
  if (existing === undefined || existing === null) return fallback;
  if (Array.isArray(existing) || Array.isArray(fallback)) return existing;
  if (typeof existing !== "object" || typeof fallback !== "object" || !fallback) return existing;
  const merged = { ...(existing as Record<string, unknown>) };
  for (const [key, value] of Object.entries(fallback as Record<string, unknown>)) {
    merged[key] = mergeMissing(merged[key], value);
  }
  return merged;
}

function isLocalImage(value: unknown): value is SiteImage {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<SiteImage>;
  return typeof candidate.src === "string" && candidate.src.startsWith("/") && typeof candidate.alt === "string";
}

async function hydrateNewImages(value: unknown): Promise<unknown> {
  if (isLocalImage(value)) {
    const filePath = path.join(siteDirectory, "public", value.src.replace(/^\//, ""));
    const asset = await client.assets.upload("image", createReadStream(filePath), { filename: path.basename(filePath) });
    return { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt: value.alt, position: value.position };
  }
  if (Array.isArray(value)) {
    const items = await Promise.all(value.map(hydrateNewImages));
    return items.map((item, index) => item && typeof item === "object" && !Array.isArray(item) && !("_key" in item) ? { _key: `item-${index + 1}`, ...item } : item);
  }
  if (value && typeof value === "object") {
    const entries = await Promise.all(Object.entries(value).map(async ([key, nested]) => [key, await hydrateNewImages(nested)]));
    return Object.fromEntries(entries);
  }
  return value;
}

async function migrate() {
  const existing = await client.fetch<Record<string, unknown> | null>(`*[_id == "threeTsSite"][0]`);
  if (!existing) throw new Error("The existing 3Ts site document was not found.");
  const { _createdAt, _updatedAt, _rev, ...document } = existing;
  const merged = mergeMissing(document, defaultThreeTsContent);
  const hydrated = await hydrateNewImages(merged) as Record<string, unknown>;
  await client.createOrReplace({ ...hydrated, _id: "threeTsSite", _type: "threeTsSite" });
  console.log("Added all previously missing 3Ts fields without replacing existing CMS values.");
}

migrate().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
