import { DarkCTA } from "@/components/DarkCTA";
import { SectionEyebrow } from "@/components/services/SectionEyebrow";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Star,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FullBrandBuildPage() {
  const corePillars = [
    {
      icon: Target,
      title: "Strategic Foundation",
      desc: "Deep-dive brand analysis and positioning strategy that defines your unique competitive advantage.",
    },
    {
      icon: Layers,
      title: "Visual Identity System",
      desc: "Comprehensive design system including logos, typography, colour palettes, and brand guidelines.",
    },
    {
      icon: Globe,
      title: "Market Rollout",
      desc: "Complete marketing asset suite, social media systems, and launch collateral for a global presence.",
    },
  ];

  const exclusiveBenefits = [
    "Priority support & dedicated brand manager",
    "6 months of strategic brand governance",
    "Executive-level brand audit & roadmap",
    "Complete digital & print asset library",
    "Custom motion design & social systems",
    "Founder-level strategy workshops",
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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/30 bg-blue-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200">
            <Star className="size-3.5 fill-blue-accent text-blue-accent" aria-hidden />
            Flagship Experience
          </span>

          <h1 className="font-heading mt-6 max-w-4xl text-[2.6rem] leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl">
            The <span className="text-blue-accent italic">Definitive</span>
            <br /> Brand Foundation
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            Our most prestigious partnership. A strategic 12-week transformation
            that takes your brand from its current state to market-leading
            authority.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-blue-accent px-7 text-sm font-bold text-white shadow-lg shadow-blue-accent/20 hover:bg-[#3ac8dd]"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>What&apos;s included</SectionEyebrow>
            <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
              One Partnership.{" "}
              <span className="text-cyan-700">Zero Fragmentation.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Stop juggling multiple agencies. We handle the entire brand
              ecosystem under one roof, ensuring perfect alignment between
              strategy and aesthetics.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-blue-accent/40 hover:bg-blue-accent/5 md:p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-accent/10 text-cyan-700">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-heading mt-5 text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY FLAGSHIP */}
      <section className="border-y border-slate-200/70 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm lg:order-1">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/images/blue-abstract.png"
                  alt="Executive Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionEyebrow>Why the flagship</SectionEyebrow>
              <h2 className="font-heading mt-3 text-[1.75rem] leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.6rem]">
                Why the <span className="text-cyan-700 italic">Flagship</span>?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Designed for founders who value speed, consistency, and market
                dominance. This isn&apos;t just a service—it&apos;s an investment in
                your company&apos;s legacy.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {exclusiveBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-accent/10">
                      <CheckCircle2 className="size-4 text-cyan-700" aria-hidden />
                    </span>
                    <span className="text-sm leading-snug font-medium text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <DarkCTA
        title={
          <>
            Ready for <span className="text-blue-accent italic">Absolute</span>{" "}
            Clarity?
          </>
        }
        description="The Full Brand Build is a 12-week high-fidelity sprint. We only partner with 2 businesses per quarter to ensure zero compromise in quality."
        buttonText="Schedule Strategy Call"
      >
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-5">
          {[
            { label: "Duration", value: "12 Weeks" },
            { label: "Typical Investment", value: "₦500K+" },
            { label: "ROI Potential", value: "10–20×" },
          ].map((item) => (
            <div key={item.label} className="px-2 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
                {item.label}
              </p>
              <p className="mt-2 font-heading text-lg font-bold text-white sm:text-2xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </DarkCTA>
    </div>
  );
}
