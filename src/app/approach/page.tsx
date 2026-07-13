import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";
import { getThreeTsContent } from "@/lib/siteContent";

export default async function ApproachPage() {
  const { approach } = await getThreeTsContent();

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full px-6 pb-16 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_0.92fr] lg:items-end">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                My Approach
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h1 className="mb-10 font-serif text-5xl leading-tight text-charcoal md:text-6xl lg:text-7xl">
              Discover a unique approach to building better partnerships, teams and organizations.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-charcoal/70">
              My methods are grounded in an academic background spanning Neuroscience and Governance, and shaped by 20 years of leading teams in some of the world&apos;s most complex and consequential environments.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_28px_90px_-70px_rgba(30,37,32,0.7)] md:min-h-[500px]">
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: approach.image.position }}
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.38))]" />
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                My Methodology
              </span>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-6xl">
                Find the service you need, then go deeper.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {approach.services.map((service, index) => (
              <article
                key={service.title}
                className={`border border-charcoal/10 bg-[#fcfbf9] p-6 transition-colors hover:border-gold/45 hover:bg-white md:p-8 ${
                  index === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    0{index + 1}
                  </span>
                  <span className={`${index === 2 ? "max-w-[24rem]" : "max-w-[12rem]"} text-right text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/38`}>
                    {service.label}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                  {service.title}
                </h3>
                <div className={`mt-6 text-base leading-relaxed text-charcoal/68 md:text-lg ${index === 2 ? "space-y-6 lg:columns-2 lg:gap-12" : ""}`}>
                  {service.description.map((paragraph) => (
                    <p key={paragraph} className="mb-6 last:mb-0 break-inside-avoid">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20 overflow-hidden border border-gold/35 bg-[#151a16] text-cream shadow-[0_28px_90px_-70px_rgba(0,0,0,0.8)]">
            <div className="grid gap-0 lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
              <div className="border-b border-cream/10 bg-[#101511] p-7 md:p-9 lg:border-b-0 lg:border-r lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Guiding Ethos
                </span>
                <h2 className="mt-7 max-w-[12rem] text-balance font-serif text-2xl leading-[1.12] md:text-[2rem]">
                  A Commitment to Fairness and Equity
                </h2>
                <div className="mt-8 h-px w-16 bg-gold/60" />
              </div>
              <div className="p-7 md:p-10 lg:p-12 xl:p-14">
                <p className="max-w-[52rem] border-l-2 border-gold pl-5 font-serif text-[1.62rem] leading-[1.24] text-cream md:pl-7 md:text-[2.02rem] lg:text-[2.22rem]">
                  I work with teams and organizations to understand the unique challenges of the current global context and help them consider their position and approaches to better support fairness and inclusion.
                </p>
                <div className="mt-9 grid max-w-[70rem] gap-8 border-y border-cream/10 py-8 md:grid-cols-2 md:gap-12">
                  <p className="max-w-[34rem] text-[1.08rem] leading-[2.05rem] text-cream/72 lg:text-[1.12rem]">
                    I approach every engagement with the understanding that equity looks different depending on where power sits, whose voice has historically been excluded, and what local realities actually demand.
                  </p>
                  <p className="max-w-[34rem] text-[1.08rem] leading-[2.05rem] text-cream/72 lg:text-[1.12rem]">
                    This is not a separate service. It is the lens through which I design facilitation processes, coaching relationships, programs, and organizational change.
                  </p>
                </div>
                <p className="mt-10 max-w-[60rem] text-balance font-serif text-[1.52rem] leading-[1.24] text-cream md:text-[1.82rem]">
                  It&apos;s about recognizing that local leadership, indigenous knowledge, and non-Western organizational norms have immense value that is often overlooked.
                </p>
                <p className="mt-8 max-w-[62rem] text-[1.08rem] leading-[2.05rem] text-cream/68 lg:text-[1.12rem]">
                  This work asks us to consider who sets the standards, whose knowledge counts, and what it truly means to be fair in a global context.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 border-t border-charcoal/10 pt-12">
            <h2 className="mb-6 font-serif text-3xl text-charcoal">Stakeholder Breadth</h2>
            <p className="max-w-4xl text-lg leading-relaxed text-charcoal/70">
              I work with government ministries, parliaments, militaries, civil society, faith leaders, communities, multilateral donors, and private-sector counterparts. In-person, hybrid, and virtual; multi-day design sprints, retreats, strategic dialogues, and learning cohorts.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
