import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getThreeTsContent } from "@/lib/siteContent";

export default async function TestimonialsPage() {
  const content = await getThreeTsContent();
  const { testimonials } = content;

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar content={content.global} />
      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{testimonials.eyebrow}</span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>
          <h1 className="mb-12 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">{testimonials.heading}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-charcoal/70 md:text-xl">{testimonials.introduction}</p>
        </div>
      </section>

      {testimonials.groups.map((group, groupIndex) => {
        const dark = groupIndex % 2 === 0;
        return (
          <section key={group.heading} className={`relative w-full px-6 py-32 md:px-16 lg:px-24 ${dark ? "bg-[#111]" : "bg-[#f8f6f2]"}`}>
            {dark && (
              <div className="absolute inset-0 z-0">
                <Image src={testimonials.backgroundImage.src} alt={testimonials.backgroundImage.alt} fill className="object-cover opacity-40 mix-blend-luminosity" style={{ objectPosition: testimonials.backgroundImage.position }} />
                <div className="absolute inset-0 bg-[#151a16]/90" />
              </div>
            )}
            <div className="relative z-10 mx-auto max-w-7xl">
              <h2 className={`mb-16 border-b pb-8 font-serif text-4xl ${dark ? "border-cream/10 text-cream" : "border-charcoal/10 text-charcoal"}`}>{group.heading}</h2>
              <div className={`grid grid-cols-1 gap-12 lg:gap-16 ${group.testimonials.length > 1 ? "md:grid-cols-3" : ""}`}>
                {group.testimonials.map((testimonial) => (
                  <article key={`${testimonial.author}-${testimonial.quote.slice(0, 24)}`} className="flex max-w-3xl flex-col">
                    <div className="mb-4 font-serif text-6xl leading-none text-gold opacity-50">&ldquo;</div>
                    <p className={`mb-8 grow font-serif text-lg leading-relaxed md:text-xl ${dark ? "text-cream/90" : "text-charcoal/90"}`}>{testimonial.quote}</p>
                    <div>
                      <div className={`mb-1 text-sm font-semibold uppercase tracking-[0.1em] ${dark ? "text-gold" : "text-charcoal"}`}>&mdash; {testimonial.author}</div>
                      <div className={`text-xs uppercase tracking-widest ${dark ? "text-cream/50" : "text-charcoal/50"}`}>{testimonial.title}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <Footer content={content.global} />
    </main>
  );
}
