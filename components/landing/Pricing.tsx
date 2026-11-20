"use client"

import { useState } from 'react'
import { ArrowRight, TrendingUp, Target, Zap, Check } from 'lucide-react'
import Link from 'next/link'
import { SectionEyebrow } from '@/components/services/SectionEyebrow'
import { BookCallButton } from '../BookCallButton'

const goals = [
  {
    id: 'discover',
    label: '01',
    title: 'Discover',
    subtitle: 'What Your Brand Needs',
    icon: Zap,
    description: 'Something is not working, but you need clarity before investing in a larger engagement.',
    investment: '₦150,000',
    investmentLabel: 'Starting from',
    services: ['Brand audit', 'Market & competitor review', 'Recommended next steps'],
    outcome: 'Clarity for your next move',
  },
  {
    id: 'build',
    label: '02',
    title: 'Build',
    subtitle: 'Your Brand Properly',
    icon: TrendingUp,
    description: 'You need a strategic brand foundation that can support the next stage of growth.',
    investment: '₦500,000',
    investmentLabel: 'Starting from',
    services: ['Strategy & positioning', 'Communication & identity', 'Brand systems & launch guidance'],
    outcome: 'A foundation built for growth',
    recommended: true,
  },
  {
    id: 'evolve',
    label: '03',
    title: 'Evolve',
    subtitle: 'Your Existing Brand',
    icon: Target,
    description: 'Your business has changed and your brand needs to catch up.',
    investment: '₦450,000',
    investmentLabel: 'Starting from',
    services: ['Existing brand audit', 'Strategic & visual evolution', 'Rollout support'],
    outcome: 'A brand aligned with where you\'re going',
  },
]

const stats = [
  { stat: '87%', label: 'Client satisfaction' },
  { stat: '3–5×', label: 'Average ROI in 12 months' },
  { stat: '50+', label: 'Brands transformed' },
]

const Pricing = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('discover')
  const selected = goals.find(g => g.id === selectedGoal) || goals[0]

  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ── */}
        <div className="max-w-2xl">
          <SectionEyebrow className="mb-4 block">Investment</SectionEyebrow>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-slate-900">
            Where does your brand<br className="hidden md:block" /> need to go?
          </h2>
          <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
            Every business is at a different stage. We&apos;ll help you find the right starting point.
          </p>
        </div>

        {/* ── Selector Tabs ── */}
        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`relative flex-1 text-left px-5 py-4 rounded-2xl border transition-all duration-200 hover:cursor-pointer group ${
                selectedGoal === goal.id
                  ? 'bg-dark-accent border-dark-accent text-white'
                  : 'bg-white border-slate-200 text-slate-900 hover:border-slate-400'
              }`}
            >
              {goal.recommended && selectedGoal !== goal.id && (
                <span className="absolute -top-2.5 right-3 rounded-full bg-blue-accent px-2.5 py-0.5 text-[10px] font-semibold text-white tracking-wide">
                  Popular
                </span>
              )}
              <span className={`block text-[10px] font-semibold tracking-widest uppercase mb-1 ${selectedGoal === goal.id ? 'text-slate-400' : 'text-slate-400'}`}>
                {goal.label}
              </span>
              <span className={`block text-base font-bold ${selectedGoal === goal.id ? 'text-white' : 'text-slate-900'}`}>
                {goal.title}
              </span>
              <span className={`block text-xs mt-0.5 ${selectedGoal === goal.id ? 'text-slate-300' : 'text-slate-600'}`}>
                {goal.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* ── Detail Panel ── */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left — Scope */}
          <div className="lg:col-span-3 border border-slate-200 rounded-2xl p-8 md:p-10 bg-white">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{selected.investmentLabel}</p>
                <p className="font-heading text-4xl font-bold text-slate-900 mt-1">{selected.investment}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                Scoped to your needs
              </span>
            </div>

            <p className="mt-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-6">
              {selected.description}
            </p>

            <ul className="mt-6 space-y-3">
              {selected.services.map((service) => (
                <li key={service} className="flex items-center gap-3 text-sm text-slate-900">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center">
                    <Check className="h-3 w-3 text-blue-accent" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 uppercase tracking-widest">Outcome</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{selected.outcome}</p>
            </div>
          </div>

          {/* Right — CTA */}
          <div className="lg:col-span-2 bg-dark-accent rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Ready to start?</p>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Let&apos;s build a brand that works.
              </h3>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                You don&apos;t need everything figured out. Tell us where you are, and we&apos;ll map the path forward together.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <BookCallButton
                className="w-full text-center justify-center bg-blue-accent! hover:bg-blue-accent/85! text-sm"
                text="Book a discovery call"
              />
              <Link href="#services" className="w-full">
                <button className="w-full text-sm text-slate-400 hover:text-white border border-white/10 rounded-full px-4 py-2 transition-colors hover:border-white/30 hover:cursor-pointer">
                  View all services <ArrowRight className="inline h-3.5 w-3.5 ml-1" />
                </button>
              </Link>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                Scope flexibility · Flexible payment plans
              </p>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          {stats.map((item) => (
            <div key={item.label} className="py-6 px-4 md:px-8 text-center bg-white">
              <p className="font-heading text-2xl md:text-3xl font-bold text-slate-900">{item.stat}</p>
              <p className="mt-1.5 text-xs md:text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom Banner ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-200 rounded-2xl px-7 py-5 bg-white">
          <p className="text-sm text-slate-600 text-center sm:text-left">
            <span className="font-semibold text-slate-900">Not sure which path is right?</span>{' '}
            Book a free 30-min call — no commitment needed.
          </p>
          <BookCallButton
            text="Let's talk"
            className="flex-shrink-0 text-sm"
          />
        </div>

      </div>
    </section>
  )
}

export default Pricing
