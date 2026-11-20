"use client";

import type { ServiceConfig } from "@/lib/services-config";
import { Button } from "@/components/ui/button";
import { DarkCTA } from "@/components/DarkCTA";
import { SectionEyebrow } from "@/components/services/SectionEyebrow";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceTemplateProps {
  config: ServiceConfig;
}

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const gridOverlay =
  "absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA2KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]";

const ServiceTemplate = ({ config }: ServiceTemplateProps) => {
  if (!config.templateContent) {
    return <div>Template content not configured</div>;
  }

  const { hero, templateContent } = config;
  const { problem, process, deliverables, pricing, cta } = templateContent;

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-dark-accent text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(35,187,211,0.22),transparent_55%)]"
        />
        <div aria-hidden className={gridOverlay} />

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 md:pt-24 md:pb-16">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-accent/30 bg-blue-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200"
          >
            <Zap className="size-3.5" aria-hidden />
            {hero.badge}
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="font-heading mt-6 max-w-4xl text-[2.6rem] leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.19 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.26 }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-blue-accent px-7 text-sm font-bold text-white shadow-lg shadow-blue-accent/20 hover:bg-[#3ac8dd]"
            >
              <Link href="/contact">
                {hero.ctaPrimary}
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Why it matters</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              {problem.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {problem.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 md:gap-6">
            {problem.painPoints.map((point) => (
              <div
                key={point.desc}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-blue-accent/40 hover:bg-blue-accent/5 md:p-7"
              >
                <div className="font-heading text-2xl font-bold text-cyan-700 md:text-3xl">
                  {point.stat}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-slate-200/70 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>How we work</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              {process.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {process.steps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70 md:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-accent/10 font-heading text-sm font-bold text-cyan-700">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {step.timeline && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {step.timeline}
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <SectionEyebrow>What&apos;s included</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              {deliverables.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {deliverables.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:border-blue-accent/40 hover:bg-blue-accent/5"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-accent/10">
                  <CheckCircle2 className="size-4 text-cyan-700" aria-hidden />
                </span>
                <span className="text-sm leading-snug font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      {pricing && (
        <section className="border-y border-slate-200/70 bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="text-center">
              <SectionEyebrow>Investment</SectionEyebrow>
              <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
                Investment &amp; Packages
              </h2>
              <p className="mt-4 text-sm text-slate-600 sm:text-base">
                Starting at {pricing.startingAt}
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pricing.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl border bg-white p-6 ${
                    pkg.recommended
                      ? "border-dark-accent ring-2 ring-blue-accent/40"
                      : "border-slate-200"
                  }`}
                >
                  {pkg.recommended && (
                    <span className="inline-block rounded-full bg-blue-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-heading mt-4 text-xl font-bold text-slate-900">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 font-heading text-3xl font-bold text-slate-900">
                    {pkg.price}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-cyan-700"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full rounded-full bg-blue-accent text-sm font-bold text-white hover:bg-[#3ac8dd]"
                  >
                    <Link href="/contact">Choose {pkg.name}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <DarkCTA
        title={cta.title}
        description={cta.description}
        buttonText="Schedule Strategy Call"
      />
    </div>
  );
};

export default ServiceTemplate;
