import HomePage from "@/components/HomePage";
import { getThreeTsContent } from "@/lib/siteContent";

export default async function Home() {
  const content = await getThreeTsContent();
  return <HomePage content={content} />;
}
