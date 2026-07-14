import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getThreeTsContent } from "@/lib/siteContent";

export default async function ContactPage() {
  const content = await getThreeTsContent();
  const { contact } = content;

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar content={content.global} />
      <section className="flex min-h-[72vh] w-full items-center px-6 py-28 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div className="flex flex-col items-start text-left">
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                {contact.eyebrow}
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-8">
              {contact.heading}
            </h1>
            <p className="mb-12 max-w-lg text-lg leading-relaxed text-charcoal/70 md:text-xl">
              {contact.introduction}
            </p>

            <div className="mb-12 space-y-8">
              <div className="flex flex-col items-start">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">{contact.emailLabel}</span>
              <a
                href={`mailto:${contact.email}`}
                className="font-serif text-2xl text-charcoal hover:text-gold transition-colors"
              >
                {contact.email}
              </a>
              </div>
              <div className="flex flex-col items-start">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">{contact.locationsLabel}</span>
              <p className="text-charcoal/70 text-lg">{contact.locations}</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${contact.email}`}
              className="bg-[#2A372C] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
            >
              {contact.emailCtaLabel}
            </a>
            <a
              href={contact.bookingCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm tracking-widest uppercase font-medium border border-gold/30 px-6 py-4 hover:bg-gold/10 transition-all"
            >
              {contact.bookingCta.label}
            </a>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_28px_90px_-58px_rgba(30,37,32,0.65)] md:min-h-[580px]">
            <Image
              src={contact.image.src}
              alt={contact.image.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: contact.image.position }}
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.02),rgba(21,26,22,0.25))]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-charcoal/70 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-cream/65 backdrop-blur-sm">
              {contact.imageCaption}
            </div>
          </div>
        </div>
      </section>
      <Footer content={content.global} />
    </main>
  );
}
