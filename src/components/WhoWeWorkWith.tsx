"use client";

import { motion, type Variants } from "framer-motion";
import {
  Bank,
  Globe,
  Shield,
  Users,
  Buildings,
} from "@phosphor-icons/react";
import type { ThreeTsContent } from "@/lib/siteContent";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const icons = [Bank, Globe, Shield, Users, Buildings];

export default function WhoWeWorkWith({ content }: { content: ThreeTsContent["home"]["audiences"] }) {
  return (
    <section className="w-full bg-[#f8f6f2] py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content (Text & Typography) */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-20 z-10 flex flex-col justify-center mb-16 lg:mb-0">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {content.eyebrow}
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-charcoal mb-8"
          >
            {content.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal/70 text-lg md:text-xl leading-relaxed max-w-lg"
          >
            {content.paragraphs.map((paragraph, index) => <span key={paragraph} className="text-charcoal/70">{index > 0 && <><br /><br /></>}{paragraph}</span>)}
          </motion.p>
        </div>

        {/* Right Content (Vertical List) */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex flex-col space-y-0 relative"
        >
          {/* Subtle vertical line connecting the list items visually */}
          <div className="absolute left-6 top-12 bottom-12 w-px bg-[#edebe4] -z-10 hidden md:block"></div>
          
          {content.items.map((text, index) => {
            const Icon = icons[index % icons.length];
            return (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-6 border-b border-[#edebe4] py-8 last:border-0 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-[#fcfbf9] border border-charcoal/10 flex items-center justify-center shrink-0 shadow-[0_4px_10px_-5px_rgba(0,0,0,0.05)] group-hover:border-gold/50 group-hover:shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
                <Icon size={24} weight="light" className="text-charcoal group-hover:text-gold transition-colors duration-300" />
              </div>
              <div className="text-xl md:text-2xl font-serif text-charcoal/80 group-hover:text-charcoal transition-colors duration-300">
                {text}
              </div>
            </motion.li>
          )})}
        </motion.ul>
      </div>
    </section>
  );
}
