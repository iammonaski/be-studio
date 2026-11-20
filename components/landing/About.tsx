"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Understanding",
    desc: "We start by learning your business, goals, and audience before anything is designed.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Every visual decision is backed by a clear brand direction and positioning.",
  },
  {
    num: "03",
    title: "Identity",
    desc: "A distinctive visual system that communicates who you are with consistency.",
  },
  {
    num: "04",
    title: "Growth",
    desc: "Brands built with room to evolve as your business moves to its next stage.",
  },
];

export const About = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-36" id="about">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-accent mb-4">Our Approach</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-[#0B1C2D]">
              Branding goes beyond how your business looks.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pb-2"
          >
            <p className="text-sm md:text-base text-[#4B5C73] leading-relaxed">
              At BE Graphic Studio, we believe building a strong brand takes more than good design. It requires a clear understanding of your business, a defined position, purposeful communication, and a visual identity that brings everything together.
            </p>
            <p className="mt-4 text-sm md:text-base text-[#4B5C73] leading-relaxed">
              We work with growing businesses to bring these elements together — making quality branding accessible and helping you build a brand with clarity, intention, and room to grow.
            </p>
          </motion.div>
        </div>

        {/* ── Pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200 border border-slate-200 rounded-3xl overflow-hidden bg-white"
        >
          {pillars.map((p) => (
            <div key={p.num} className="p-7 md:p-8">
              <span className="text-[11px] font-semibold tabular-nums tracking-widest text-slate-400">{p.num}</span>
              <h3 className="mt-3 text-base font-bold text-[#0B1C2D]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#4B5C73] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
