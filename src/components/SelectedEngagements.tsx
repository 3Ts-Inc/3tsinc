"use client";

import { motion, type Variants } from "framer-motion";

const cases = [
  {
    number: "01",
    title: "Saudi Arabia \u2014\nVision 2030 Assessment",
    description:
      "Currently supporting the World Bank team in the assessment of Saudi Arabia\u2019s Vision 2030 progress and next steps.",
  },
  {
    number: "02",
    title: "Portland \u2014\nCommunity Safety Transformation",
    description:
      "Led citywide initiative to realign governance and community engagement around gun violence and safety. 43% reduction in predicted gun violence and 24% mitigation of predicted homicides over three months.",
  },
  {
    number: "03",
    title: "Executive and Leadership Coach to INGOs",
    description:
      "Currently providing executive coaching support to multiple MENA and Africa senior leaders in a leading global humanitarian confederation working to combat systemic poverty and inequality.",
  },
  {
    number: "04",
    title: "DC Public Schools \u2014\nLeadership Team Support",
    description:
      "Facilitated team building retreats and served as technical adviser for public sector leaders navigating the increased risk of gun violence in schools.",
  },
];

const mapDots = Array.from({ length: 220 }, (_, i) => {
  const x = (i * 73) % 1000;
  const y = (i * 41) % 500;
  const inAmerica = x > 100 && x < 350 && y > 100 && y < 400;
  const inEurasia = x > 450 && x < 900 && y > 50 && y < 350;
  const inAfrica = x > 450 && x < 650 && y > 250 && y < 450;
  return inAmerica || inEurasia || inAfrica ? { x, y } : null;
}).filter(Boolean) as Array<{ x: number; y: number }>;

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

export default function SelectedEngagements() {
  return (
    <section className="w-full bg-cream py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-[500px] opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#A9835A">
            {mapDots.map((dot, i) => (
              <circle key={i} cx={dot.x} cy={dot.y} r="2" />
            ))}
          </g>
          <circle cx="580" cy="220" r="6" fill="#1E2520" />
          <circle cx="820" cy="320" r="6" fill="#1E2520" />
          <circle cx="280" cy="200" r="6" fill="#1E2520" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start space-y-4 mb-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Selected Engagements
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-20"
        >
          Selected engagements.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-[#fcfbf9] border border-charcoal/5 p-8 flex flex-col shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="flex flex-col items-start mb-6">
                <span className="text-gold text-sm font-semibold tracking-[0.2em] mb-2">
                  {item.number}
                </span>
                <div className="w-6 h-px bg-charcoal/20 mb-6"></div>
                <h3 className="font-serif text-2xl text-charcoal leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
              <div className="w-full h-px bg-charcoal/10 mb-6"></div>
              <p className="text-charcoal/70 text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
