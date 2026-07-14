import { getCliClient } from "sanity/cli";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defaultMawzunContent, type SiteImage } from "../../../mawzun-advisory/src/lib/siteContent";

const client = getCliClient({ apiVersion: "2026-07-14" }).withConfig({ dataset: "mawzun" });
const siteDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../mawzun-advisory");

function mergeMissing(existing: unknown, fallback: unknown): unknown {
  if (existing === undefined || existing === null) return fallback;
  if (Array.isArray(existing) || Array.isArray(fallback)) return existing;
  if (typeof existing !== "object" || typeof fallback !== "object" || !fallback) return existing;
  const merged = { ...(existing as Record<string, unknown>) };
  for (const [key, value] of Object.entries(fallback as Record<string, unknown>)) merged[key] = mergeMissing(merged[key], value);
  return merged;
}

function addArrayKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map((item, index) => {
    const nested = addArrayKeys(item);
    return nested && typeof nested === "object" && !Array.isArray(nested) && !("_key" in nested) ? { _key: `item-${index + 1}`, ...nested } : nested;
  });
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, addArrayKeys(nested)]));
  return value;
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
  if (Array.isArray(value)) return Promise.all(value.map(hydrateNewImages));
  if (value && typeof value === "object") return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([key, nested]) => [key, await hydrateNewImages(nested)])));
  return value;
}

async function migrate() {
  const existing = await client.fetch<Record<string, unknown> | null>(`*[_id == "mawzunSite"][0]`);
  if (!existing) throw new Error("The existing Mawzun site document was not found.");
  const { _createdAt, _updatedAt, _rev, ...document } = existing;
  const merged = await hydrateNewImages(addArrayKeys(mergeMissing(document, defaultMawzunContent))) as Record<string, unknown>;
  await client.createOrReplace({ ...merged, _id: "mawzunSite", _type: "mawzunSite" });
  console.log("Added all newly modeled Mawzun fields without replacing existing CMS values.");
}

migrate().catch((error: unknown) => { console.error(error); process.exitCode = 1; });
