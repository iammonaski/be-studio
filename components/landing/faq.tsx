"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/services/SectionEyebrow";
import { BookCallButton } from "../BookCallButton";

const faqs = [
  {
    q: "What does BE Graphic Studio do?",
    a: "At BE Graphic Studio, we help growing businesses build, strengthen, and develop their brands through strategic branding. Our work goes beyond visual design to include brand analysis, strategy, positioning, communication, visual identity, and brand applications — bringing these together so businesses clearly communicate who they are, what they stand for, and how they want to be perceived.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We primarily work with growing businesses, startups, and established companies looking to build, improve, or evolve their brands. Whether you're launching a new business, developing an existing brand, or preparing for a new stage of growth, we work with you to understand your needs and determine the right branding support.",
  },
  {
    q: "What is your branding process like?",
    a: "Our process is structured and collaborative. It typically includes discovery and research, brand strategy development, visual identity design, and final asset delivery. Every decision is intentional — grounded in your goals, audience, and long-term vision, not trends alone.",
  },
  {
    q: "How long does a branding project take?",
    a: "Timelines vary depending on scope, but most branding projects take between 4–8 weeks. We establish clear milestones upfront so you always know what to expect and when.",
  },
  {
    q: "How do I get started with BE?",
    a: "Getting started is simple. Book a consultation through our website or reach out directly via any of our social media platforms. We'll talk about your business, understand what you're looking to achieve, then recommend an appropriate scope of work and provide a proposal with next steps.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-24 md:py-36" id="faq">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <SectionEyebrow className="mb-4 block">FAQ</SectionEyebrow>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Common questions
            </h2>
            <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
              Everything you need to know about working with BE. Can&apos;t find an answer?
            </p>
            <div className="mt-6">
              <BookCallButton text="Ask us directly" className="text-sm" />
            </div>
          </motion.div>

          {/* ── Accordion ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <AccordionTrigger className="group flex w-full items-start justify-between gap-6 py-6 text-left hover:no-underline hover:cursor-pointer">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 text-[11px] font-semibold tabular-nums text-slate-400 tracking-widest shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {faq.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-9">
                    <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
