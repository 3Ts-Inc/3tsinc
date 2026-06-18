import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <div className="mb-8 flex flex-col items-start space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  About
                </span>
                <div className="h-[2px] w-12 bg-gold/60"></div>
              </div>
              <h1 className="mb-6 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                Building Together
              </h1>
              <h2 className="font-serif text-xl italic text-charcoal/80 md:text-2xl">
                Hello, I&apos;m Shareef.
              </h2>
            </div>
            <div className="relative min-h-[300px] overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_24px_80px_-52px_rgba(30,37,32,0.5)] md:min-h-[360px]">
              <Image
                src="/shareef-khatib.webp"
                alt="Portrait of Shareef Khatib"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 320px, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.2))]" />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          </div>

          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/70 prose-strong:text-charcoal mt-12 max-w-none">
            <p className="lead text-xl mb-8">
              I help individuals, teams, and organizations do the work on the inside to make the impact they want on the outside. I believe a better world is built decision by decision, room by room — when the right people are aligned around difficult truths and leave with the will to act on them. That belief is what connects everything I do, whether I&apos;m holding a politically sensitive room in the Gulf, coaching a senior leader through a career inflection point, or designing a program for a community that has been failed by previous attempts at change.
            </p>
            <p className="mb-8 text-xl leading-relaxed">
              My methods are grounded in an academic background spanning Neuroscience and Governance, and shaped by 20 years of leading teams in some of the world&apos;s most complex and consequential environments. I bring rigor, warmth, and a genuine commitment to fairness — not as a stated value but as a design principle embedded in how I work.
            </p>

            <h3 className="text-2xl mt-12 mb-6">Professional Profile</h3>

            <div className="space-y-8 mt-6">
              <div className="border-l-2 border-gold/40 pl-6">
                <h4 className="text-xl font-serif text-charcoal mb-2">
                  Leader, Facilitator, Trainer &amp; Coach
                </h4>
                <p>
                  I engage, convene, and support diverse individuals, teams, and stakeholders to meet their challenges: creating the conditions for candid exchange, genuine alignment, and decisions that hold.
                </p>
              </div>

              <div className="border-l-2 border-gold/40 pl-6">
                <h4 className="text-xl font-serif text-charcoal mb-2">
                  Strategist, Implementer &amp; Change-maker
                </h4>
                <p>
                  I develop data-driven approaches to organizational and social change, drawing on systems and complexity thinking, human-centered design, and a both/and mindset that resists false choices.
                </p>
              </div>

              <div className="border-l-2 border-gold/40 pl-6">
                <h4 className="text-xl font-serif text-charcoal mb-2">
                  Program Leader &amp; Cultural Interlocutor
                </h4>
                <p>
                  I have lived and worked across 9 countries, establishing and leading multi-million-dollar programs in fragile and conflict-affected environments, and have worked across science, health, education, government, and the public and private sectors.
                </p>
              </div>
            </div>

            <section className="not-prose mt-16 border-l-2 border-gold bg-[#fcfbf9] px-7 py-8 md:px-10 md:py-10">
              <p className="font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                Inclusion is a global condition, not a Western export.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/68 md:text-lg">
                Read more about how I apply fairness and equity to facilitation, coaching, program design, and organizational change in my approach.
              </p>
              <Link
                href="/approach"
                className="mt-7 inline-block border-b border-gold pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-charcoal"
              >
                Explore my approach
              </Link>
            </section>

            <h3 className="text-2xl mt-12 mb-6">Education &amp; Credentials</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Certificate in Leadership Coaching — Georgetown University</li>
              <li>Certificate in Organizational Development &amp; Change Leadership — Georgetown University</li>
              <li>Project Management Professional (PMP) — PMI</li>
              <li>PgDip in Local Government Management — University of Warwick</li>
              <li>M.Sc. International Development: Governance &amp; Development — University of Birmingham</li>
              <li>M.S. Neuroscience — Emory University</li>
            </ul>

            <div className="mt-12 flex items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#2A372C] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
              >
                Book Now
              </Link>
            </div>

            <blockquote className="mt-16 border-l-4 border-gold pl-6 italic text-xl text-charcoal/80 font-serif">
              &ldquo;I hope that together, our work contributes to a world where collaboration yields outcomes worthy of the people who need them most.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
