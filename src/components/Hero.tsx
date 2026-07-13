"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ThreeTsContent } from "@/lib/siteContent";

function HeroVisual() {
  return (
    <>
      <Image
        src="/hero-concepts/06-signal-constellation.png"
        alt="Warm constellation lines across a dark textured field"
        fill
        priority
        className="object-cover object-[68%_50%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,11,0.96)_0%,rgba(10,13,11,0.88)_31%,rgba(10,13,11,0.34)_62%,rgba(10,13,11,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(211,177,112,0.18),transparent_34%)]" />
    </>
  );
}

export default function Hero({ content }: { content: ThreeTsContent["home"] }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <HeroVisual />
      </div>

      <div className="relative z-10 w-full px-6 pt-40 sm:px-8 md:w-[58%] md:px-16 md:pt-44 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-10 flex flex-col items-start space-y-4 md:mb-12">
            <span className="max-w-[18rem] text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-gold md:max-w-none">
              Considered collaboration. Consequential change.
            </span>
            <div className="h-[2px] w-12 bg-gold/70" />
          </div>

          <h1 className="mb-8 max-w-[21rem] font-serif text-4xl leading-[1.08] text-white sm:max-w-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            {content.tagline}
          </h1>

          <p className="mb-10 max-w-[21rem] text-lg leading-relaxed text-white/82 sm:max-w-lg md:mb-12 md:text-xl">
            {content.introduction}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-cream px-8 py-4 text-sm font-medium uppercase tracking-widest text-charcoal shadow-lg transition-all hover:-translate-y-1 hover:bg-white active:translate-y-0"
            >
              Get Started &rarr;
            </Link>
            <a
              href="https://calendly.com/shareef3ts/a-30min-slot-with-shareef"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/30 px-6 py-4 text-sm font-medium uppercase tracking-widest text-cream transition-all hover:bg-cream/10"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 mt-16 w-full px-6 pb-8 sm:px-8 md:mt-24 md:px-16 md:pb-12 lg:px-24"
      >
        <div className="flex max-w-6xl items-start gap-4 border-t border-cream/15 pt-6 sm:gap-6 sm:pt-8">
          <div className="shrink-0 border-r border-cream/15 pr-3 font-serif text-4xl italic leading-none text-gold sm:pr-4 sm:text-5xl">
            3<span className="ml-0.5 text-3xl sm:text-4xl">T</span><span className="ml-0.5 text-2xl sm:text-3xl">s</span>
          </div>
          <p className="min-w-0 text-sm font-medium leading-relaxed text-cream/65 sm:text-base md:max-w-5xl md:text-lg">
            {content.serviceSummary}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
