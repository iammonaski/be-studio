import { portfolioProjects } from "@/lib/portfolio-config"
import { SectionEyebrow } from "@/components/services/SectionEyebrow"
import { DarkCTA } from "@/components/DarkCTA"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag, CheckCircle2 } from "lucide-react"

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="sticky top-16 z-40 hidden w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md sm:top-20 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden />
            Back to Portfolio
          </Link>
          <SectionEyebrow>{project.category}</SectionEyebrow>
        </div>
      </div>

      {/* Hero Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left: Project Info */}
            <div>
              <SectionEyebrow>{project.category}</SectionEyebrow>
              <h1 className="font-heading mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                {project.longDescription || project.description}
              </p>

              {/* Metadata Grid */}
              <div className="mt-10 grid grid-cols-2 gap-8 border-y border-slate-200/70 py-10">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-blue-accent/10 text-cyan-700">
                      <User size={16} aria-hidden />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Client</span>
                  </div>
                  <p className="font-medium text-slate-900">{project.client || "Confidential"}</p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-blue-accent/10 text-cyan-700">
                      <Calendar size={16} aria-hidden />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Year</span>
                  </div>
                  <p className="font-medium text-slate-900">{project.year || "2023"}</p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-blue-accent/10 text-cyan-700">
                      <Tag size={16} aria-hidden />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Services</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="space-y-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 md:p-10">
                {project.challenge && (
                  <div>
                    <h2 className="font-heading text-xl font-bold text-slate-900">The Challenge</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h2 className="font-heading text-xl font-bold text-slate-900">Our Strategy</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.solution}</p>
                    <ul className="mt-5 space-y-3">
                      {project.tags.map((tag) => (
                        <li key={tag} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="size-5 shrink-0 text-cyan-700" aria-hidden />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="border-y border-slate-200/70 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:gap-8">
            {/* Main Feature Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={project.image}
                alt={`${project.title} overview`}
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {project.gallery.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:aspect-[4/3]">
                    <Image
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project / CTA */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <SectionEyebrow>Next Project</SectionEyebrow>
      </div>
      <DarkCTA
        title={
          <>
            Let&apos;s work on your next <br className="hidden sm:block" /> big thing together.
          </>
        }
        buttonText="Start a Conversation"
        buttonHref="/contact"
      >
        <Link
          href="/portfolio"
          className="mt-6 inline-block text-sm font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Explore More Work
        </Link>
      </DarkCTA>
    </div>
  )
}
