"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { portfolioProjects } from "@/lib/portfolio-config"
import Link from "next/link"

const categories = ["All", ...new Set(portfolioProjects.map(p => p.category))]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Category Filter */}
        <div className="relative mb-10 md:mb-14">
          <div className="no-scrollbar flex items-center gap-3 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-blue-accent text-white shadow-lg shadow-blue-accent/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-accent/40 hover:text-slate-900"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-accent/40 hover:shadow-lg hover:shadow-slate-200/70"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                    {/* Category Badge (Floating) */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-700 shadow-sm backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-7">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-700 md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="absolute right-6 bottom-6 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden>
                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-accent text-white shadow-lg shadow-blue-accent/20">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
