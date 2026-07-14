import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "l02p5l41";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "three-ts";

const client =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2026-07-14",
        useCdn: true,
      })
    : null;

function mergeContent<T>(fallback: T, value: unknown): T {
  if (value === null || value === undefined) return fallback;

  if (Array.isArray(fallback)) {
    return (Array.isArray(value) && value.length > 0 ? value : fallback) as T;
  }

  if (
    typeof fallback === "object" &&
    fallback !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    const result = { ...fallback } as Record<string, unknown>;
    for (const [key, nestedValue] of Object.entries(value)) {
      const nestedFallback = (fallback as Record<string, unknown>)[key];
      result[key] = mergeContent(nestedFallback, nestedValue);
    }
    return result as T;
  }

  return value as T;
}

export async function fetchCmsDocument<T>(
  query: string,
  fallback: T,
): Promise<T> {
  if (!client) return fallback;

  try {
    const document = await client.fetch<unknown>(query, {}, { cache: "no-store" });
    return mergeContent(fallback, document);
  } catch (error) {
    console.warn("Sanity content fetch failed; using checked-in content.", error);
    return fallback;
  }
}
