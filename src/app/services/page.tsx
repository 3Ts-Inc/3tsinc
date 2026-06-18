import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Coaching",
    description:
      "We come together in partnership to help you navigate challenge, change or opportunity. Using thought-provoking, self-analytic and creative processes, we build on strengths, identify blind spots, and help the best version of you show up when it matters.",
    cta: "Fulfill your potential",
    link: "/testimonials",
  },
  {
    title: "Facilitation, Teambuilding & Training",
    description:
      "I support diverse teams to come together to address their needs: fostering inclusion, surfacing entrenched structures and thinking, and using tailored stakeholder engagement to help teams identify drivers and solutions they can sustain.",
    cta: "Make a better team",
    link: "/testimonials",
  },
  {
    title: "Program Design",
    description:
      "Design and deliver catalytic programming using locally-led, adaptive, human-centered approaches, drawing on inclusive engagement to define challenges and solutions in the narrative of those living them.",
    cta: "Build a better world",
    link: "/testimonials",
  },
  {
    title: "OD & Change Management",
    description:
      "I support organizations, teams, and the people in them to strengthen leadership and management practices, team dynamics, and processes so change moves from intention to practical, implementable solutions.",
    cta: "Build a stronger org",
    link: "/testimonials",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full px-6 pb-16 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_0.92fr] lg:items-end">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Services
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h1 className="mb-8 font-serif text-5xl leading-tight text-charcoal md:text-6xl lg:text-7xl">
              Tailored consulting services to build stronger teams and organizations
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
              Explore coaching, facilitation and consulting services designed to meet your organizational needs, build resilience, and improve how you make an impact in the world.
            </p>
          </div>

          <div className="relative min-h-[340px] overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_28px_90px_-70px_rgba(30,37,32,0.7)] md:min-h-[480px]">
            <Image
              src="/shareef-presenting.webp"
              alt="Shareef Khatib presenting to a room"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.34))]" />
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-28 pt-8 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group border border-charcoal/10 bg-[#fcfbf9] p-6 transition-colors hover:border-gold/45 hover:bg-white md:p-8"
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
              <p className="mt-6 text-base leading-relaxed text-charcoal/68 md:text-lg">
                {service.description}
              </p>
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
      <Footer />
    </main>
  );
}
