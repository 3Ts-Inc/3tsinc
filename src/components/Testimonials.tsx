"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Shareef has been a great coach for me as a new manager. He has provided me tools to work through customized strategies for dealing with new management situations and to empower my team.",
    author: "Andrew F.",
    title: "Division Lead, International Assistance \u2013 Energy Sector",
  },
  {
    quote:
      "When I partnered with Shareef in a Program to strengthen the City of Portland\u2019s approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do.",
    author: "Rose King",
    title: "Principal, Hearts & Minds Communications",
  },
  {
    quote:
      "Shareef knew how to navigate criticism and stay the course, transparently and frequently sharing information about the work, building relationships, and not bending to the pressure of the \u201Cway things are always done.\u201D",
    author: "Lisa Freeman",
    title: "Chief of Staff for Portland City Councilor Sameer Kanal",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#111]">
        <Image
          src="/vaseANDfooter.png"
          alt="Decorative vase"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151a16] via-[#151a16]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex-grow flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              What Clients are Saying
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {testimonials.map((t, i) => (
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
          <Link href="/testimonials" className="group flex flex-col">
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              Read More Testimonials <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
