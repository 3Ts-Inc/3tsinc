"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";

type Principle = {
  title: string;
  text: string;
  short: string;
};

const principles: Principle[] = [
  {
    title: "Tailored Solutions",
    short: "Designed around the real context.",
    text: "There is no one size fits all. I appreciatively enquire to tailor my engagement to meet your specific needs, challenges and goals.",
  },
  {
    title: "Walking the Talk",
    short: "The work models the outcome.",
    text: "Together, we model effective teamwork by setting shared goals, clarifying roles, and communicating openly.",
  },
  {
    title: "One Team Mindset",
    short: "Shared ownership of what follows.",
    text: "We share responsibility for outcomes, successes and setbacks alike, because we will rise or fall together.",
  },
  {
    title: "Inclusive and Accountable",
    short: "Every voice has a role and a standard.",
    text: "We honor diverse perspectives, foster mutual accountability, and create space for every voice to be heard.",
  },
  {
    title: "Creativity with Purpose",
    short: "Inventive where it helps the work.",
    text: "We embrace fun and creativity as important tools for innovation, connection, and sustainable progress.",
  },
  {
    title: "Serious About Work, Light on Ego",
    short: "High standards without the posturing.",
    text: "Together we will take our mission, our stakeholders, and each other - but not ourselves - VERY seriously.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const mosaicStyles = [
  {
    surface: "border-[#151a16] bg-[#151a16] text-cream shadow-[0_28px_80px_-50px_rgba(0,0,0,0.62)]",
    number: "text-cream/[0.055]",
    short: "text-cream/56",
    body: "text-cream/70",
    wash: "bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(169,131,90,0.18),transparent_30%)]",
  },
  {
    surface: "border-[#d8cfbf] bg-[#fcfbf9] text-charcoal shadow-[0_22px_70px_-58px_rgba(30,37,32,0.3)]",
    number: "text-gold/10",
    short: "text-charcoal/45",
    body: "text-charcoal/68",
    wash: "bg-[linear-gradient(155deg,rgba(169,131,90,0.07),transparent_42%),linear-gradient(90deg,rgba(21,26,22,0.035)_1px,transparent_1px)] [background-size:auto,22px_22px]",
  },
  {
    surface: "border-[#d4c3a9] bg-[#efe9df] text-charcoal shadow-[0_22px_70px_-58px_rgba(30,37,32,0.32)]",
    number: "text-[#a9835a]/13",
    short: "text-charcoal/48",
    body: "text-charcoal/70",
    wash: "bg-[linear-gradient(145deg,rgba(255,255,255,0.34),transparent_44%),repeating-linear-gradient(135deg,rgba(169,131,90,0.07)_0,rgba(169,131,90,0.07)_1px,transparent_1px,transparent_12px)]",
  },
  {
    surface: "border-[#cad2bd] bg-[#e9eee2] text-charcoal shadow-[0_22px_70px_-58px_rgba(30,37,32,0.34)]",
    number: "text-[#7f9f50]/14",
    short: "text-charcoal/48",
    body: "text-charcoal/70",
    wash: "bg-[linear-gradient(160deg,rgba(127,159,80,0.13),transparent_45%),linear-gradient(90deg,rgba(21,26,22,0.035)_1px,transparent_1px)] [background-size:auto,20px_20px]",
  },
  {
    surface: "border-[#151a16] bg-[#151a16] text-cream shadow-[0_28px_80px_-50px_rgba(0,0,0,0.58)]",
    number: "text-cream/[0.06]",
    short: "text-cream/56",
    body: "text-cream/70",
    wash: "bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_78%_20%,rgba(169,131,90,0.2),transparent_32%),repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_18px)]",
  },
  {
    surface: "border-[#d9d3c8] bg-[#fcfbf9] text-charcoal shadow-[0_22px_70px_-58px_rgba(30,37,32,0.32)]",
    number: "text-charcoal/[0.055]",
    short: "text-charcoal/48",
    body: "text-charcoal/70",
    wash: "bg-[linear-gradient(145deg,rgba(21,26,22,0.05),transparent_38%),linear-gradient(0deg,rgba(169,131,90,0.08),transparent_28%)]",
  },
];

function Eyebrow({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mb-8 flex flex-col items-start space-y-4">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Why Choose 3Ts
      </span>
      <div className={`h-[2px] w-12 ${dark ? "bg-gold/70" : "bg-gold/60"}`} />
    </div>
  );
}

function Mosaic() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
  ];
  const baseWidths = [44, 31, 25, 31, 28, 41];
  const activeWidths: Record<number, number[]> = {
    0: [52, 27, 21],
    1: [34, 44, 22],
    2: [36, 25, 39],
    3: [43, 23, 34],
    4: [27, 40, 33],
    5: [27, 25, 48],
  };

  function cardWidth(index: number, row: number[]) {
    if (active === null) return baseWidths[index];
    if (!row.includes(active)) return baseWidths[index];
    return activeWidths[active][row.indexOf(index)];
  }

  return (
    <section className="w-full border-t border-[#e8e3d8] bg-[#f7f4ed] px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.56fr_0.9fr] lg:items-end">
          <div>
            <Eyebrow />
            <h2 className="font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl lg:text-6xl">
              Why choose 3Ts?
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-charcoal/64 md:text-lg">
            Six working principles, held in motion: structured enough to guide decisions, flexible enough to meet the room as it is.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onMouseLeave={() => setActive(null)}
          className="space-y-4"
        >
          {rows.map((row) => (
            <div
              key={row.join("-")}
              className="grid grid-cols-1 gap-4 md:flex md:h-[420px] md:items-stretch"
            >
              {row.map((index) => {
                const item = principles[index];
                const isActive = active === index;
                const style = mosaicStyles[index];
                const activeSurface = "border-[#151a16] bg-[#151a16] text-cream shadow-[0_34px_95px_-52px_rgba(0,0,0,0.72)]";
                const activeWash = "bg-[linear-gradient(135deg,rgba(255,255,255,0.065),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(169,131,90,0.2),transparent_30%)]";
                const activeLightSurface = "border-[#bda886] bg-[#fcfbf9] text-charcoal shadow-[0_34px_95px_-54px_rgba(30,37,32,0.48)]";
                const activeLightWash = "bg-[linear-gradient(145deg,rgba(169,131,90,0.13),transparent_40%),linear-gradient(90deg,rgba(21,26,22,0.04)_1px,transparent_1px)] [background-size:auto,20px_20px]";
                const startsDark = index === 0 || index === 4;
                const activeOnDefaultDark = isActive && startsDark;
                const activeOnDefaultLight = isActive && !startsDark;
                const isDark = activeOnDefaultLight || (!isActive && startsDark);
                const needsSlowerCopyReveal = index === 2 || index === 4;

                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    variants={itemVariants}
                    layout={!reduceMotion}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive(index)}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    style={{ flexBasis: `${cardWidth(index, row)}%` }}
                    className={`group relative min-h-[260px] w-full shrink overflow-hidden border p-6 text-left transition-[flex-basis,background-color,border-color,box-shadow] duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-gold/70 md:min-h-0 md:p-7 lg:p-8 ${
                      activeOnDefaultDark ? activeLightSurface : activeOnDefaultLight ? activeSurface : style.surface
                    } ${isActive ? "z-10" : "z-0"}`}
                  >
                    <div className={`pointer-events-none absolute inset-0 opacity-95 ${activeOnDefaultDark ? activeLightWash : activeOnDefaultLight ? activeWash : style.wash}`} />
                    <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-current opacity-[0.045] md:block" />
                    <div className={`pointer-events-none absolute right-5 top-4 font-serif text-7xl leading-none transition-colors duration-300 md:text-8xl ${isActive ? "text-gold/14" : style.number}`}>
                      0{index + 1}
                    </div>
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      } bg-gold`}
                    />
                    <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                          Principle 0{index + 1}
                        </span>
                        <h3
                          className={`mt-5 max-w-[13ch] font-serif leading-tight ${
                            isActive
                              ? "text-4xl md:text-5xl"
                              : "text-3xl md:text-4xl"
                          } ${index === 5 && !isActive ? "lg:text-[2.75rem]" : "lg:text-5xl"}`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <div>
                        <p className={`text-sm font-semibold uppercase tracking-[0.12em] ${isDark ? "text-cream/56" : activeOnDefaultDark ? "text-charcoal/48" : style.short}`}>
                          {item.short}
                        </p>
                        <p
                          className={`mt-4 max-w-2xl leading-relaxed transition-[max-height,opacity,transform] duration-300 ${
                            isDark
                              ? "text-base text-cream/70 md:text-lg"
                              : activeOnDefaultDark
                                ? "text-base text-charcoal/70 md:text-lg"
                                : `text-base md:text-lg ${style.body}`
                          } ${
                            isActive
                              ? `md:max-h-32 md:translate-y-0 md:opacity-100 ${needsSlowerCopyReveal ? "md:delay-[360ms]" : "md:delay-150"}`
                              : "md:max-h-0 md:translate-y-2 md:overflow-hidden md:opacity-0 md:delay-0"
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function WhyChoose() {
  return <Mosaic />;
}
