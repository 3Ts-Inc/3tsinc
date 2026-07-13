import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient, type SanityClient } from "@sanity/client";
import {
  defaultThreeTsContent,
  type SiteImage,
} from "../../src/lib/siteContent";
import {
  defaultMawzunContent,
  type SiteImage as MawzunSiteImage,
} from "../../../mawzun-advisory/src/lib/siteContent";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "SANITY_STUDIO_PROJECT_ID and SANITY_API_WRITE_TOKEN are required to seed content.",
  );
}

const studioDirectory = path.dirname(fileURLToPath(import.meta.url));
const threeTsDirectory = path.resolve(studioDirectory, "../..");
const mawzunDirectory = path.resolve(threeTsDirectory, "../mawzun-advisory");

function clientFor(dataset: string) {
  return createClient({
    projectId,
    dataset,
    token,
    apiVersion: "2026-07-14",
    useCdn: false,
  });
}

function isSiteImage(value: unknown): value is SiteImage | MawzunSiteImage {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<SiteImage>;
  return (
    typeof candidate.src === "string" &&
    typeof candidate.alt === "string" &&
    typeof candidate.position === "string"
  );
}

async function uploadImage(
  client: SanityClient,
  siteDirectory: string,
  image: SiteImage | MawzunSiteImage,
) {
  if (/^https?:\/\//.test(image.src)) {
    throw new Error(`Seed images must be local files: ${image.src}`);
  }

  const filePath = path.join(siteDirectory, "public", image.src.replace(/^\//, ""));
  const asset = await client.assets.upload("image", createReadStream(filePath), {
    filename: path.basename(filePath),
  });

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt: image.alt,
    position: image.position,
  };
}

async function hydrateImages(
  client: SanityClient,
  siteDirectory: string,
  value: unknown,
): Promise<unknown> {
  if (isSiteImage(value)) {
    return uploadImage(client, siteDirectory, value);
  }

  if (Array.isArray(value)) {
    const items = await Promise.all(
      value.map((item) => hydrateImages(client, siteDirectory, item)),
    );
    return items.map((item, index) =>
      item && typeof item === "object" && !Array.isArray(item) && !("_key" in item)
        ? { _key: `item-${index + 1}`, ...item }
        : item,
    );
  }

  if (value && typeof value === "object") {
    const entries = await Promise.all(
      Object.entries(value).map(async ([key, nestedValue]) => [
        key,
        await hydrateImages(client, siteDirectory, nestedValue),
      ]),
    );
    return Object.fromEntries(entries);
  }

  return value;
}

async function seed() {
  const threeTsClient = clientFor("three-ts");
  const mawzunClient = clientFor("mawzun");

  const [threeTsContent, mawzunContent] = await Promise.all([
    hydrateImages(threeTsClient, threeTsDirectory, defaultThreeTsContent),
    hydrateImages(mawzunClient, mawzunDirectory, defaultMawzunContent),
  ]);

  await Promise.all([
    threeTsClient.createOrReplace({
      _id: "threeTsSite",
      _type: "threeTsSite",
      ...(threeTsContent as Record<string, unknown>),
    }),
    mawzunClient.createOrReplace({
      _id: "mawzunSite",
      _type: "mawzunSite",
      ...(mawzunContent as Record<string, unknown>),
    }),
  ]);

  console.log("Seeded the 3Ts and Mawzun CMS documents and uploaded their images.");
}

await seed();
