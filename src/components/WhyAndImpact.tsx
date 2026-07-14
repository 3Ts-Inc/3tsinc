"use client";

import { motion } from "framer-motion";
import WhyChoose from "@/components/WhyChoose";
import type { ThreeTsContent } from "@/lib/siteContent";

export default function WhyAndImpact({ content }: { content: ThreeTsContent["home"] }) {
  return (
    <section className="w-full bg-[#f8f6f2] flex flex-col">
      <WhyChoose content={content.principles} />

      {/* IMPACT Section */}
      <div className="w-full py-24 px-6 md:px-16 lg:px-24 bg-[#111613] border-t border-[#111613]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Left */}
          <div className="w-full lg:w-1/4 pr-0 lg:pr-12 mb-16 lg:mb-0">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                {content.impact.eyebrow}
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-cream"
            >
              {content.impact.heading}
            </motion.h2>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-0">
            {content.impact.statistics.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
                  index !== 0 ? "lg:border-l lg:border-cream/10 lg:pl-8" : ""
                }`}
              >
                <div className="font-serif text-6xl md:text-7xl text-cream mb-4 tracking-tighter">
                  {impact.value}
                </div>
                <div className="w-8 h-px bg-gold/60 mb-6 hidden lg:block"></div>
                <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                  {impact.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
