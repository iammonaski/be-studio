"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/calendly";
import { useScrollToSection } from "@/hooks/scroll-to-section";

const navLinks = [
  { name: "Services", path: "#services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Approach", path: "#approach" },
  { name: "FAQ", path: "#faq" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const scrollToSection = useScrollToSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-slate-200/60 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-white"
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 -ml-3 shrink-0">
              <Image
                src="/logo_temp.png"
                alt="BE Graphic Studio"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block font-heading text-sm font-bold tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
              BE Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isHash = link.path.startsWith("#");
              const isActive = !isHash && pathname === link.path;

              if (isHash) {
                return (
                  <button
                    key={link.path}
                    onClick={() => scrollToSection(link.path.slice(1))}
                    className="relative text-[13px] font-medium text-slate-500 hover:text-slate-900 hover:cursor-pointer transition-colors"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "relative text-[13px] font-medium transition-colors",
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-dark-accent rounded-full" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile trigger */}
          <div className="flex items-center gap-3">
            {/* Ghost CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-[13px] font-medium text-slate-900 hover:bg-dark-accent hover:text-white hover:border-dark-accent transition-all duration-200"
            >
              Let&apos;s Talk
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-4.5 w-4.5 text-slate-900" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full max-w-sm bg-white p-0 h-dvh border-l border-slate-100"
                aria-describedby={undefined}
              >
                <SheetTitle className="hidden" />

                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 h-10 -ml-2 shrink-0">
                      <Image src="/logo_temp.png" alt="BE Graphic Studio" fill sizes="40px" className="object-contain" />
                    </div>
                    <span className="font-heading text-sm font-bold text-slate-900">BE Studio</span>
                  </Link>
                  <SheetClose asChild>
                    <button aria-label="Close menu" className="flex items-center justify-center h-8 w-8 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                      <X size={15} className="text-slate-600" />
                    </button>
                  </SheetClose>
                </div>

                {/* Drawer nav */}
                <div className="px-6 pt-10 pb-20 flex flex-col h-[calc(100dvh-69px)] justify-between">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => {
                      const isHash = link.path.startsWith("#");
                      if (isHash) {
                        return (
                          <SheetClose asChild key={link.path}>
                            <button
                              onClick={() => scrollToSection(link.path.slice(1))}
                              className="group flex items-center justify-between py-3.5 text-xl font-semibold text-slate-900 hover:text-cyan-700 transition-colors hover:cursor-pointer border-b border-slate-100 last:border-0"
                            >
                              {link.name}
                              <ArrowRight size={16} className="text-slate-300 group-hover:text-cyan-700 group-hover:translate-x-0.5 transition-all" />
                            </button>
                          </SheetClose>
                        );
                      }
                      return (
                        <SheetClose asChild key={link.path}>
                          <Link
                            href={link.path}
                            className="group flex items-center justify-between py-3.5 text-xl font-semibold text-slate-900 hover:text-cyan-700 transition-colors border-b border-slate-100 last:border-0"
                          >
                            {link.name}
                            <ArrowRight size={16} className="text-slate-300 group-hover:text-cyan-700 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  {/* Drawer footer CTA */}
                  <div className="border-t border-slate-100 pt-8">
                    <p className="text-sm text-slate-400 mb-4">Ready to build a stronger brand?</p>
                    <SheetClose asChild>
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-full bg-dark-accent px-5 py-3 text-sm font-semibold text-white hover:bg-dark-accent/85 transition-colors"
                      >
                        Book a discovery call
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.header>
  );
}
