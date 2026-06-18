import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";

const methodologyServices = [
  {
    title: "Facilitation",
    label: "For consequential rooms",
    description:
      "Most gatherings generate energy without producing decisions. I design and hold the rooms where that changes: politically sensitive multi-stakeholder processes, leadership off-sites, cross-functional strategy sessions, and decision convenings where alignment is earned and owned, rather than assumed. My methods do not manage the conversation, but listen for what is underneath it: the underlying narrative, the unspoken resistance, the connection no one has yet vocalized. I play that back with precision, so senior teams can make informed choices and leave with decisions that hold under the stress of real implementation.",
  },
  {
    title: "Coaching",
    label: "For leaders at inflection points",
    description:
      "I work with senior leaders who are navigating complexity, carrying transformation mandates, or standing at a genuine inflection point in their careers. My approach is disciplined, warm, and direct: I hold the structure of our work firmly while creating the space and safety for real exploration. I listen for the person beneath the presenting problem and reflect it with precision: who you are in this situation, what grounds you, what gets in your way, and what a considered next step looks like from where you actually stand, not where the system expects you to be.",
  },
  {
    title: "Program Design & Management",
    label: "For plans that must survive contact with reality",
    description:
      "I design programs to produce real change in real conditions: for communities, institutions, and the people carrying the work inside them. Every design begins with honest diagnosis: what the data shows, what those closest to the issue actually experience, and where those two accounts diverge. I then build architecture around a shared, clearly articulated goal while keeping the path to it deliberately flexible, with governance, accountability, equity checkpoints, and guardrail agreements designed in from the start.",
  },
  {
    title: "Organizational Development & Change Management",
    label: "Because announced change is not adopted change",
    description:
      "Organizational change fails most often not because the strategy was wrong but because the conditions for adoption were never built. I work with leaders and teams to close that gap: diagnosing where the real friction sits, designing interventions that address it, and building the governance, communication, and capability structures that make new ways of working stick. My work is to help organizations move from intention to embedded practice.",
  },
];

export default function ApproachPage() {
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
              src="/hero-concepts/01-window-trees.png"
              alt="Quiet room with window light, a table, and trees beyond the glass"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.38))]" />
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.62fr_0.9fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                My Methodology
              </span>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-6xl">
                Find the service you need, then go deeper.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-charcoal/66">
              Clients often arrive through one specific need. This structure makes each service easier to scan while keeping the underlying approach intact.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {methodologyServices.map((service, index) => (
              <article
                key={service.title}
                className="border border-charcoal/10 bg-[#fcfbf9] p-6 transition-colors hover:border-gold/45 hover:bg-white md:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    0{index + 1}
                  </span>
                  <span className="max-w-[12rem] text-right text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/38">
                    {service.label}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-charcoal/68 md:text-lg">
                  {service.description}
                </p>
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
