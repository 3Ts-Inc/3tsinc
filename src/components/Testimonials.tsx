"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { SiteImage, ThreeTsContent } from "@/lib/siteContent";

export default function Testimonials({ content, backgroundImage }: { content: ThreeTsContent["home"]["testimonials"]; backgroundImage: SiteImage }) {
  return (
    <section className="relative w-full flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#111]">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover opacity-45 mix-blend-luminosity"
          style={{ objectPosition: backgroundImage.position }}
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151a16] via-[#151a16]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex-grow flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {content.eyebrow}
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {content.items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                &ldquo;
              </div>
              <p className="font-serif text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 grow">
                {t.quote}
              </p>
              <div>
                <div className="text-gold text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                  — {t.author}
                </div>
                <div className="text-cream/50 text-xs tracking-widest uppercase">
                  {t.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to all testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center"
        >
          <Link href={content.cta.href} className="group flex flex-col">
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              {content.cta.label} <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
