import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PerspectivesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Perspectives
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Writings, videos, and talks on decisions that hold.
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            A growing library for Shareef&apos;s thinking on facilitation, coaching, organizational change, program design, fairness, and leadership in complex environments.
          </p>
        </div>
      </section>

      <section className="w-full pb-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16">
          <article className="bg-[#151a16] text-cream p-6 md:p-10 border border-charcoal/10">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Featured Video
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/_-31fvz8-7w"
                title="Featured perspective from Shareef Khatib"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mt-8 mb-4">
              Featured perspective
            </h2>
            <a
              href="https://youtu.be/_-31fvz8-7w?si=faDjit1int1ba0Ga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm font-semibold tracking-[0.15em] uppercase border-b border-gold/30 hover:border-gold transition-colors"
            >
              Watch on YouTube
            </a>
          </article>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                label: "Writing",
                title: "Essays and reflections",
                text: "Future articles can live here with a title, excerpt, date, and link.",
              },
              {
                label: "Video",
                title: "Recorded conversations",
                text: "Future talks, interviews, and panels can be added as embedded media or external links.",
              },
              {
                label: "Talks",
                title: "Speaking and convening",
                text: "Future public engagements can be organized here without changing the page structure.",
              },
            ].map((item) => (
              <article key={item.label} className="border border-charcoal/10 bg-[#fcfbf9] p-8">
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  {item.label}
                </span>
                <h2 className="font-serif text-3xl text-charcoal mt-4 mb-4">
                  {item.title}
                </h2>
                <p className="text-charcoal/65 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
