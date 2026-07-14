"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ThreeTsContent } from "@/lib/siteContent";

export default function AboutUs({ content }: { content: ThreeTsContent["home"]["aboutSection"] }) {
  return (
    <section className="w-full bg-[#f8f6f2] py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mt-16 lg:mt-0 z-10">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {content.eyebrow}
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-charcoal">{content.heading}</p>
            {content.paragraphs.map((paragraph) => <p key={paragraph} className="text-charcoal/70 text-base md:text-lg leading-relaxed">{paragraph}</p>)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center"
          >
            <Link href={content.cta.href} className="group flex flex-col">
              <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
                {content.cta.label} <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
              </span>
              <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[400px] w-full overflow-hidden border border-charcoal/10 bg-[#151a16] shadow-[0_24px_80px_-42px_rgba(30,37,32,0.45)] md:h-[500px] lg:h-[600px] lg:w-1/2"
        >
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            className="object-cover"
            style={{ objectPosition: content.image.position }}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,26,22,0.04),rgba(21,26,22,0.24))]" />
          <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
