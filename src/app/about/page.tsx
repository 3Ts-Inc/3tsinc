import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getThreeTsContent } from "@/lib/siteContent";

export default async function AboutPage() {
  const content = await getThreeTsContent();
  const { about } = content;

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar content={content.global} />
      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <div className="mb-8 flex flex-col items-start space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {about.eyebrow}
                </span>
                <div className="h-[2px] w-12 bg-gold/60"></div>
              </div>
              <h1 className="mb-6 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                {about.heading}
              </h1>
              <h2 className="font-serif text-xl italic text-charcoal/80 md:text-2xl">
                {about.subheading}
              </h2>
            </div>
            <div className="relative min-h-[300px] overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_24px_80px_-52px_rgba(30,37,32,0.5)] md:min-h-[360px]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: about.image.position }}
                sizes="(min-width: 1024px) 320px, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.2))]" />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          </div>

          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/70 prose-strong:text-charcoal mt-12 max-w-none">
            {about.introduction.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "lead text-xl mb-8" : "mb-8 text-xl leading-relaxed"}>{paragraph}</p>)}

            <h3 className="text-2xl mt-12 mb-6">{about.profileHeading}</h3>

            <div className="space-y-8 mt-6">
              {about.profileItems.map((item) => <div key={item.title} className="border-l-2 border-gold/40 pl-6"><h4 className="text-xl font-serif text-charcoal mb-2">{item.title}</h4><p>{item.description}</p></div>)}
            </div>

            <section className="not-prose mt-16 border-l-2 border-gold bg-[#fcfbf9] px-7 py-8 md:px-10 md:py-10">
              <p className="font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                {about.ethosHeading}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/68 md:text-lg">
                {about.ethosDescription}
              </p>
              <Link
                href={about.ethosCta.href}
                className="mt-7 inline-block border-b border-gold pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-charcoal"
              >
                {about.ethosCta.label}
              </Link>
            </section>

            <h3 className="text-2xl mt-12 mb-6">{about.credentialsHeading}</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              {about.credentials.map((credential) => <li key={credential}>{credential}</li>)}
            </ul>

            <div className="mt-12 flex items-center gap-4">
              <Link
                href={about.cta.href}
                className="bg-[#2A372C] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
              >
                {about.cta.label}
              </Link>
            </div>

            <blockquote className="mt-16 border-l-4 border-gold pl-6 italic text-xl text-charcoal/80 font-serif">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
      <Footer content={content.global} />
    </main>
  );
}
