"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "../BlurText";
import { BookCallButton } from "../BookCallButton";
import { useScrollToSection } from "@/hooks/scroll-to-section";

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="px-2 md:px-3 bg-white">
      <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[4rem] bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-50" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-24 pb-6 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            {/* LEFT: COPY */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-heading text-[2.5rem] leading-[1.1] md:text-[2.8rem] xl:text-[3.2rem] font-semibold tracking-tight text-slate-900">
                <BlurText
                  text="Build a stronger brand with clarity and direction."
                  delay={130}
                  animateBy="words"
                  direction="top"
                  className="text-blue-accent"
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-xl text-md leading-relaxed text-slate-700"
              >
                We help growing businesses understand, build, and strengthen their brands through strategy, positioning, communication, identity, experience, and systems.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                {/* PRIMARY */}
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center justify-center rounded-full bg-blue-accent px-8 py-3 hover:px-9 text-base font-medium text-white transition-all hover:bg-blue-accent/80"
                >
                  Explore our work
                </button>

                {/* SECONDARY */}
                <BookCallButton className="border border-slate-200! bg-white! py-4! px-6! text-slate-700! hover:border-blue-accent/40! hover:text-slate-900! text-center font-semibold text-base" />
              </motion.div>

              {/* Quiet trust signal */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="hidden md:block pt-6 text-sm text-slate-500"
              >
                Trusted by growing teams across multiple industries
              </motion.p>
            </div>

            {/* RIGHT: VISUAL */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
              >
                {/* Soft glow */}
                <div className="absolute -inset-6 rounded-3xl bg-blue-accent/5 blur-2xl" />

                {/* Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] md:rounded-[4rem] border border-slate-200 bg-slate-50 shadow-sm">
                  <Image
                    src="/images/hero123.png"
                    alt="Brand strategy and positioning visual"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
