"use client";

import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/BookCallButton";
import { DarkCTA } from "@/components/DarkCTA";
import { SectionEyebrow } from "@/components/services/SectionEyebrow";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const BrandAnalysisPage = () => {
  const approachSteps = [
    {
      icon: BarChart3,
      title: "Understand",
      tag: "Brand audit",
      desc: "Your business, audience, market, and how your brand is perceived today.",
    },
    {
      icon: Target,
      title: "Review",
      tag: "Market & competitor review",
      desc: "Competitor and audience analysis to see where there are opportunities to improve.",
    },
    {
      icon: TrendingUp,
      title: "Recommend",
      tag: "Recommended next steps",
      desc: "Strengths, gaps, and recommendations — clarity for your next move.",
    },
  ];

  const deliverables = [
    "Brand Audit & Market Review",
    "Competitor & Audience Analysis",
    "Strengths, Gaps & Recommendations",
  ];

  const idealClients = [
    {
      icon: TrendingUp,
      title: "Growing businesses",
      desc: "Building a stronger brand with room to grow into the next stage.",
    },
    {
      icon: Zap,
      title: "Startups & early-stage founders",
      desc: "Laying a clear foundation before investing in a larger brand engagement.",
    },
    {
      icon: Users,
      title: "Established companies",
      desc: "Improving or evolving a brand as direction, audience, or market changes.",
    },
  ];

  const stats = [
    { value: "87%", label: "Client satisfaction" },
    { value: "3–5×", label: "Average ROI in 12 months" },
    { value: "50+", label: "Brands transformed" },
  ];

  const problemPoints = [
    {
      stat: "Clarity",
      desc: "Something is not working, but you need clarity before investing in a larger engagement.",
    },
    {
      stat: "Direction",
      desc: "Every decision is intentional — grounded in your goals, audience, and long-term vision, not trends alone.",
    },
    {
      stat: "Perception",
      desc: "Businesses need to clearly communicate who they are, what they stand for, and how they want to be perceived.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-dark-accent text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(35,187,211,0.22),transparent_55%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA2KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"
        />

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 md:pt-24 md:pb-16">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-accent/30 bg-blue-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200"
          >
            <Zap className="size-3.5" aria-hidden />
            Clarity First
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="font-heading mt-6 max-w-4xl text-[2.6rem] leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Understand where
            <br />
            <span className="text-blue-accent">your brand stands.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.19 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg"
          >
            Understand where your brand stands, how it is perceived, and where
            there are opportunities to improve.
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
                Book a discovery call
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Button>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 px-1 py-5 backdrop-blur-sm sm:px-6">
            {stats.map((stat) => (
              <div key={stat.label} className="px-1 text-center sm:px-4">
                <div className="font-heading text-xl font-bold sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="mx-auto mt-1 max-w-30 text-[10px] leading-snug text-slate-400 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ANALYSIS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Why start here</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              Branding goes beyond how your business looks.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              At BE Graphic Studio, we believe building a strong brand takes
              more than good design. It requires a clear understanding of your
              business, a defined position, purposeful communication, and a
              visual identity that brings everything together.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 md:gap-6">
            {problemPoints.map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-blue-accent/40 hover:bg-blue-accent/5 md:p-7"
              >
                <div className="font-heading text-xl font-bold text-cyan-700 md:text-2xl">
                  {item.stat}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-slate-200/70 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>How we work</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              Build the brand your business actually needs.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              We start by understanding your business and how it is perceived.
              That guides what needs to change, from positioning and messaging
              to identity and the systems that keep it consistent.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {approachSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70 md:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-blue-accent/10 text-cyan-700">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {step.tag}
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-heading text-sm font-bold text-cyan-700">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <SectionEyebrow>What&apos;s included</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              Clarity for your next move.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {deliverables.map((item) => (
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

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-blue-accent/20 bg-blue-accent/5 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900">
                  Not sure which path is right?
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Book a free 30-min call — no commitment needed.
                </p>
              </div>
            </div>
            <BookCallButton
              text="Let's talk"
              className="shrink-0 self-start text-sm sm:self-auto"
            />
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="border-t border-slate-200/70 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <SectionEyebrow>Who we work with</SectionEyebrow>
            <h2 className="font-heading mx-auto mt-3 max-w-3xl text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              Growing businesses, startups, and established companies.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {idealClients.map((client) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-accent/40 md:p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-accent/10 text-cyan-700">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-heading mt-5 text-lg font-bold text-slate-900">
                    {client.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {client.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <DarkCTA
        title="Let's build a brand that works."
        description="You don't need everything figured out. Tell us where you are, and we'll map the path forward together."
        footnote="Starting from ₦150,000 · Scope flexibility · Flexible payment plans"
      />
    </div>
  );
};

export default BrandAnalysisPage;
