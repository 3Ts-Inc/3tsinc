import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-07-14" }).withConfig({
  dataset: "three-ts",
});
const rawClient = client.withConfig({ perspective: "raw" });

const videos = [
  {
    _key: "emotional-intelligence",
    _type: "perspectiveVideo",
    title: "Emotional Intelligence - الذكاء العاطفي",
    youtubeUrl: "https://youtu.be/qPpUFiX-EcQ",
    description:
      "How do we say “Emotional Intelligence” in Arabic?: الذكاء العاطفي\n\nIn this video, I combine my best 6-month effort at learning Arabic with a professional interest and something I *thought* I was already good at: presenting.\n\nThe result — after fairly extensive internet research — is a unique presentation of Daniel Goleman's Emotional Intelligence framework in (charmingly flawed) conversational Arabic, with modifications appropriate to Middle Eastern culture and social dynamics.\n\nI'm calling it \"a successful failure\" because the learning points were many, including:\n- The sheer effort it takes to work across cultures, languages, alphabets, and multi-lingual keyboards.\n- The dominance of Western/English ideas and language in Organizational Psychology and Management Science — and even in the software, image search/generation, and slide alignment tools we use every day.\n- The skill it actually takes to \"speak\" a language.\n\nThe mantra I'm taking away: \"Learning a language means embracing the daily embarrassment and discomfort that comes with trying to speak it in public.\"",
  },
  {
    _key: "condascension",
    _type: "perspectiveVideo",
    title: "Condascension",
    youtubeUrl: "https://youtu.be/fyNobUJlMnI",
    description:
      "How do you respond — in a culturally appropriate way — when you're a leader with both title and credibility, and you're still second-guessed, doubted, or spoken down to?\n\n\"I understand where you're coming from, but it's my decision to make\" was the line my walking partner, Omar Abu Moghli, landed on.\n\nIn my second video exploring Human Signals in Professional Systems, I walk through Amman with Omar — the 23-year-old CEO of AJi Group, a major international architecture, engineering, and infrastructure consulting firm with 1,300+ professionals across the Middle East and Africa.\n\nOmar is tired...but not from the walk. He's tired of the condescension that comes with being a young professional in a field run by significantly older men.\n\nIn our coaching-style walk and talk, we explore what's actually going on and work through some operational and adaptive approaches Omar might try out. Omar also pushes my thinking on how to challenge someone without violating cultural norms in the Middle East, and we find a constructive space to hold our ground while still honoring the respect and dignity we owe our elders.\n\nBLUF: The approach we land on has two parts:\nOperational\n→ Private challenge vs. public challenge\n→ Translating instead of contradicting\n→ Asking questions that help the other person find the edge of their own understanding\n→ Positional clarity, with Omar's line above as the example\n\nExistential\n→ Reflect: who do I become in the moment I'm spoken down to — and who do I need to be instead?",
  },
];

async function populateVideos() {
  const draft = await rawClient.fetch<{ _id: string } | null>(
    `*[_id == "drafts.threeTsSite"][0]{_id}`,
  );
  const documentIds = ["threeTsSite", ...(draft ? [draft._id] : [])];

  await Promise.all(
    documentIds.map((documentId) =>
      rawClient
        .patch(documentId)
        .set({ "perspectives.videos": videos })
        .unset([
          "perspectives.cards",
          "perspectives.featuredEyebrow",
          "perspectives.featuredTitle",
          "perspectives.videoEmbedUrl",
          "perspectives.videoLink",
          "perspectives.videoTitle",
        ])
        .commit(),
    ),
  );
  console.log("Added the two Perspectives videos and removed the legacy fields from every version.");
}

populateVideos().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
