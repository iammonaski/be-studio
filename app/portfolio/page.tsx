import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid"
import { SectionEyebrow } from "@/components/services/SectionEyebrow"
import { DarkCTA } from "@/components/DarkCTA"
import { Metadata } from "next"
import Link from "next/link"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | BE Graphic Studio",
  description: "Explore our portfolio of strategic brand identity, digital design, and marketing assets that drive business growth.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen sm:-mt-18">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white py-16 md:py-24">
        {/* Subtle decorative glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[500px] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(35,187,211,0.16),transparent_65%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-0 size-[500px] -translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(35,187,211,0.1),transparent_65%)] blur-2xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <SectionEyebrow>Our Portfolio</SectionEyebrow>

            <h1 className="font-heading mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
              Crafting <span className="text-cyan-700 italic">Exceptional</span> <br className="hidden md:block" /> Brand Experiences
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              From deep strategy to pixel-perfect execution, explore how we&apos;ve helped diverse businesses define their identity and scale their impact.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:gap-4">
              <div className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm sm:w-auto">
                <Star className="size-4 fill-cyan-700 text-cyan-700" aria-hidden />
                <span className="text-sm font-medium text-slate-700">50+ Brands Transformed</span>
              </div>
              <div className="flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm sm:w-auto">
                <span className="text-sm font-medium text-slate-700">100% Bespoke Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <PortfolioGrid />

      {/* CTA Section */}
      <DarkCTA
        title={
          <>
            Ready to build something <span className="text-cyan-300">remarkable</span>?
          </>
        }
        description="Let's discuss how we can bring your brand vision to life with strategic design that actually converts."
        buttonText="Start Your Project"
        buttonHref="/contact"
      >
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Back to Home
        </Link>
      </DarkCTA>
    </div>
  )
}
