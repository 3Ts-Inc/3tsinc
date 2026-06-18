import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-8">
            Let&apos;s Chat
          </h1>
          <Image
            src="/3ts-logo-full-dark.png"
            alt="3Ts Consulting logo"
            width={360}
            height={219}
            className="mb-10 h-auto w-48 md:w-56"
            priority
          />
          <p className="text-charcoal/70 text-lg md:text-xl max-w-lg leading-relaxed mb-12">
            I&apos;d love to hear from you. Reach out to discuss how we might work together to support your individuals, teams, and organization.
          </p>

          <div className="space-y-8 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">Email</span>
              <a
                href="mailto:shareef@3ts-inc.com"
                className="font-serif text-2xl text-charcoal hover:text-gold transition-colors"
              >
                shareef@3ts-inc.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">Office Locations</span>
              <p className="text-charcoal/70 text-lg">Washington, DC &middot; London, UK &middot; Amman, JO</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:shareef@3ts-inc.com"
              className="bg-[#2A372C] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
            >
              Email shareef@3ts-inc.com
            </a>
            <a
              href="https://calendly.com/shareef3ts/a-30min-slot-with-shareef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm tracking-widest uppercase font-medium border border-gold/30 px-6 py-4 hover:bg-gold/10 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
