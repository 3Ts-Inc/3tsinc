import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getThreeTsContent } from "@/lib/siteContent";

export default async function ServicesPage() {
  const content = await getThreeTsContent();
  const { services } = content;

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar content={content.global} />
      <section className="w-full px-6 pb-16 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_0.92fr] lg:items-end">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {services.eyebrow}
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h1 className="mb-8 font-serif text-5xl leading-tight text-charcoal md:text-6xl lg:text-7xl">
              {services.heading}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
              {services.introduction}
            </p>
          </div>

          <div className="relative min-h-[340px] overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_28px_90px_-70px_rgba(30,37,32,0.7)] md:min-h-[480px]">
            <Image
              src={services.image.src}
              alt={services.image.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: services.image.position }}
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.34))]" />
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-28 pt-8 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          {services.items.map((service, index) => (
            <article
              key={service.title}
              className={`group border border-charcoal/10 bg-[#fcfbf9] p-6 transition-colors hover:border-gold/45 hover:bg-white md:p-8 ${
                index === 2 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 translate-y-2 bg-charcoal/10 transition-colors group-hover:bg-gold/40" />
              </div>
              <h2 className="mt-8 max-w-[14ch] font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                {service.title}
              </h2>
              {service.subtitle && (
                <p className="mt-4 max-w-3xl font-serif text-xl italic leading-relaxed text-charcoal/76 md:text-2xl">
                  {service.subtitle}
                </p>
              )}
              <div className={`mt-6 text-base leading-relaxed text-charcoal/68 md:text-lg ${index === 2 ? "space-y-6 lg:columns-2 lg:gap-12" : ""}`}>
                {service.description.map((paragraph) => (
                  <p key={paragraph} className="mb-6 last:mb-0 break-inside-avoid">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link href={service.link} className="mt-8 inline-flex flex-col">
                <span className="pb-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                  {service.cta} <span className="inline-block transition-all group-hover:ml-2">&rarr;</span>
                </span>
                <span className="h-px w-full bg-gold/30 transition-colors group-hover:bg-gold" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer content={content.global} />
    </main>
  );
}
