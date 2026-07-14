"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import type { ThreeTsContent } from "@/lib/siteContent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function WhatWeDo({ content }: { content: ThreeTsContent["home"] }) {
  return (
    <section className="w-full bg-cream py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start space-y-4 mb-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            {content.servicesIntro.eyebrow}
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-charcoal max-w-4xl mb-20"
        >
          {content.servicesIntro.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-charcoal/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-16"
        >
          {content.servicesIntro.introduction}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {content.services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`bg-[#fcfbf9] border border-charcoal/5 p-10 md:p-14 flex flex-col md:flex-row shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300 ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start mb-6 md:mb-0 md:mr-10 shrink-0">
                <span className="font-serif text-4xl md:text-5xl text-gold">
                  {item.number}
                </span>
                <div className="w-px h-12 bg-charcoal/10 ml-6 hidden md:block mt-1"></div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                  {item.title}
                </h3>
                <div className={`text-charcoal/70 text-sm md:text-base leading-relaxed ${index === 2 ? "md:grid md:grid-cols-2 md:gap-10" : "space-y-4"}`}>
                  {item.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex items-center"
        >
          <Link
            href={content.servicesIntro.cta.href}
            className="group flex flex-col"
          >
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              {content.servicesIntro.cta.label} <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
