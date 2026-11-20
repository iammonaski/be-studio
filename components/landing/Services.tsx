"use client"

import Link from "next/link"
import { SectionEyebrow } from "@/components/services/SectionEyebrow"
import { motion } from "framer-motion"
import { ArrowRight, BarChart2, Compass, Layers, RefreshCw, TrendingUp, Zap } from "lucide-react"

type Service = {
  title: string
  tagline: string
  description: string
  items: string[]
  featured?: boolean
  slug: string
  icon: React.ElementType
}

const services: Service[] = [
  {
    title: "Full Brand Build",
    tagline: "Flagship Service",
    description:
      "A comprehensive engagement for businesses looking to establish a strong brand foundation or build a complete brand system from the ground up.",
    items: [
      "Brand Analysis & Strategic Direction",
      "Positioning, Communication & Visual Identity",
      "Brand Applications, Systems & Guidelines",
    ],
    featured: true,
    slug: "full-brand-build",
    icon: Zap,
  },
  {
    title: "Brand Analysis",
    tagline: "Clarity First",
    description:
      "Understand where your brand stands, how it is perceived, and where there are opportunities to improve.",
    items: [
      "Brand Audit & Market Review",
      "Competitor & Audience Analysis",
      "Strengths, Gaps & Recommendations",
    ],
    slug: "brand-analysis",
    icon: BarChart2,
  },
  {
    title: "Brand Strategy",
    tagline: "Define Your Direction",
    description:
      "Establish a clear direction for your brand — what it stands for, who it serves, and how it communicates its value.",
    items: [
      "Purpose, Vision, Mission & Values",
      "Audience, Value Proposition & Positioning",
      "Messaging Framework & Brand Voice",
    ],
    slug: "brand-strategy",
    icon: Compass,
  },
  {
    title: "Brand Identity System",
    tagline: "Look the Part",
    description:
      "Translate strategy into a distinctive visual identity that communicates your brand's character and creates consistency.",
    items: [
      "Logo System (Primary, Secondary & Icon)",
      "Colour Palette & Typography System",
      "Graphic Language, Assets & Guidelines",
    ],
    slug: "brand-identity-system",
    icon: Layers,
  },
  {
    title: "Brand Repositioning",
    tagline: "Evolve & Grow",
    description:
      "Help established businesses evolve their brand to reflect changes in direction, offerings, audience, or market position.",
    items: [
      "Current Brand & Positioning Review",
      "Strategic Repositioning & Messaging",
      "Visual Identity Evolution & Rollout",
    ],
    slug: "brand-repositioning",
    icon: RefreshCw,
  },
  {
    title: "Brand Growth Assets",
    tagline: "Scale Consistently",
    description:
      "Practical brand applications and creative systems that help your business stay consistent across every marketing touchpoint.",
    items: [
      "Social Media Design Systems",
      "Marketing & Campaign Templates",
      "Pitch Decks & Presentation Templates",
    ],
    slug: "brand-growth-assets",
    icon: TrendingUp,
  },
]

export function Services() {
  const [featured, ...rest] = services

  return (
    <section className="bg-white py-24 md:py-36" id="services">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <SectionEyebrow className="mb-4 block">Core Services</SectionEyebrow>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-slate-900">
            Branding built around<br className="hidden md:block" /> what you need.
          </h2>
          <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
            From understanding your business to building its identity and scaling its presence — every service we offer is designed to work together.
          </p>
        </motion.div>

        {/* ── Featured Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14"
        >
          <Link href={`/services/${featured.slug}`} className="group block">
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl border border-slate-200 bg-dark-accent overflow-hidden transition-all duration-300 hover:border-slate-300">
              {/* Left */}
              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      <featured.icon className="h-3 w-3" />
                      {featured.tagline}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-md">
                    {featured.description}
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  Explore service <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              {/* Right */}
              <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-10 bg-white/5 flex flex-col justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-5">What&apos;s included</p>
                <ul className="space-y-4">
                  {featured.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ── Service Grid ── */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={`/services/${service.slug}`} className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-7 md:p-8 transition-all duration-300 hover:border-blue-accent/40">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-blue-accent/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-blue-accent/20">
                      <Icon className="h-4.5 w-4.5 text-cyan-700 transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 pt-1">{service.tagline}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-accent/40 transition-colors duration-300 group-hover:bg-blue-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-900">
                      Explore service
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-accent" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
