import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getThreeTsContent } from "@/lib/siteContent";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

export default async function PerspectivesPage() {
  const content = await getThreeTsContent();
  const { perspectives } = content;
  const [featuredVideo, ...otherVideos] = perspectives.videos;
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar content={content.global} />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {perspectives.eyebrow}
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            {perspectives.heading}
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            {perspectives.introduction}
          </p>
        </div>
      </section>

      <section className="w-full pb-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-10 lg:space-y-16">
          {featuredVideo ? <FeaturedVideo video={featuredVideo} /> : null}
          {otherVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-10">
              {otherVideos.map((video) => (
                <VideoArticle key={`${video.title}-${video.youtubeUrl}`} video={video} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <Footer content={content.global} />
    </main>
  );
}

type PerspectiveVideo = {
  title: string;
  youtubeUrl: string;
  description: string;
};

function VideoEmbed({ video }: { video: PerspectiveVideo }) {
  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);

  if (!embedUrl) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={embedUrl}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function WatchOnYouTube({ video }: { video: PerspectiveVideo }) {
  return (
    <a
      href={video.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold text-sm font-semibold tracking-[0.15em] uppercase border-b border-gold/30 hover:border-gold transition-colors"
    >
      Watch on YouTube
    </a>
  );
}

function FeaturedVideo({ video }: { video: PerspectiveVideo }) {
  return (
    <article className="bg-[#151a16] text-cream py-10 px-6 md:px-8 border border-charcoal/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start space-y-4 mb-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Featured video</span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>
        <VideoEmbed video={video} />
        <div className="mt-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">{video.title}</h2>
          <p className="max-w-[72ch] text-cream/75 leading-relaxed whitespace-pre-line mb-8">{video.description}</p>
          <WatchOnYouTube video={video} />
        </div>
      </div>
    </article>
  );
}

function VideoArticle({ video }: { video: PerspectiveVideo }) {
  return (
    <article className="border border-charcoal/10 bg-[#fcfbf9] py-10 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <VideoEmbed video={video} />
        <div className="mt-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Video</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 mb-5">{video.title}</h2>
          <p className="max-w-[72ch] text-charcoal/65 leading-relaxed whitespace-pre-line mb-8">{video.description}</p>
          <WatchOnYouTube video={video} />
        </div>
      </div>
    </article>
  );
}
