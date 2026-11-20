"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { PointerEvent } from "react";
import { CALENDLY_URL } from "@/lib/calendly";
import styles from "./Footer.module.css";

const PatternWaves = dynamic(() => import("./PatternWaves"), { ssr: false });

function FooterBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isNear = useInView(ref, { margin: "800px", once: true });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} aria-hidden="true" className={styles.background}>
      {isNear && (
        <PatternWaves
          preset="silk"
          color="var(--blue-accent)"
          backgroundColor="transparent"
          spacing={10}
          markSize={0.85}
          depth={0.8}
          shine={0.55}
          contrast={1.1}
          speed={0.18}
          scale={1.25}
          opacity={0.7}
          fade="bottom"
          fadeSize={0.65}
          interactive={false}
          intro={false}
          paused={Boolean(reduceMotion)}
        />
      )}
    </div>
  );
}

const services = [
  { name: "Full Brand Build", slug: "full-brand-build" },
  { name: "Brand Analysis", slug: "brand-analysis" },
  { name: "Brand Strategy", slug: "brand-strategy" },
  { name: "Brand Identity System", slug: "brand-identity-system" },
  { name: "Brand Repositioning", slug: "brand-repositioning" },
  { name: "Brand Growth Assets", slug: "brand-growth-assets" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Approach", path: "/#approach" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/#faq" },
];

function MagneticCallLink() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 22 });
  const springY = useSpring(y, { stiffness: 240, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.1);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.1);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={styles.callTarget}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      onBlur={reset}
    >
      <motion.a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.callLink}
        style={{ x: reduceMotion ? 0 : springX, y: reduceMotion ? 0 : springY }}
      >
        <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
        <span>Book a call</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </motion.a>
    </div>
  );
}

function FooterWordmark() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 28 });
  const springY = useSpring(y, { stiffness: 180, damping: 28 });
  const springOpacity = useSpring(opacity, { stiffness: 180, damping: 28 });
  const mask = useMotionTemplate`radial-gradient(240px circle at ${springX}px ${springY}px, black 0%, transparent 100%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
    opacity.set(1);
  };

  return (
    <div
      aria-hidden="true"
      className={styles.wordmark}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => opacity.set(0)}
      onPointerCancel={() => opacity.set(0)}
    >
      <svg viewBox="0 0 1000 155" focusable="false" className={styles.wordmarkBase}>
        <text x="0" y="125" textLength="1000" lengthAdjust="spacingAndGlyphs">
          BE STUDIO
        </text>
      </svg>
      <motion.div
        className={styles.wordmarkLight}
        style={{
          opacity: reduceMotion ? 0 : springOpacity,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        <svg viewBox="0 0 1000 155" focusable="false">
          <text x="0" y="125" textLength="1000" lengthAdjust="spacingAndGlyphs">
            BE STUDIO
          </text>
        </svg>
      </motion.div>
    </div>
  );
}

export const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <footer className={styles.footer}>
      <FooterBackground />
      <div className={styles.container}>
        <motion.div
          className={styles.invitation}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div>
            <p className={styles.eyebrow}>Have something in mind?</p>
            <h2 className={styles.headline}>
              <motion.span
                className={styles.headlineText}
                variants={{ visible: { backgroundPosition: ["100% 50%", "0% 50%"] } }}
                transition={{ duration: reduceMotion ? 0 : 1.8, ease: "easeInOut" }}
              >
                Let&apos;s build<br />what&apos;s next.
              </motion.span>
            </h2>
          </div>
          <MagneticCallLink />
        </motion.div>

        <div className={styles.directory}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandName}>
              BE Graphic Studio<span aria-hidden="true">.</span>
            </Link>
            <p>Strategy, identity, and brand systems for growing businesses.</p>
            <Link href="/contact" className={styles.textLink}>
              Start a conversation <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>

          <nav aria-label="Footer services">
            <h3 className={styles.columnHeading}>Services</h3>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link className={styles.textLink} href={`/services/${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation">
            <h3 className={styles.columnHeading}>Explore</h3>
            <ul className={styles.linkList}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={styles.textLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={styles.columnHeading}>Connect</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://www.linkedin.com/company/be-graphic-studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className={styles.textLink}>Get in touch</Link>
              </li>
            </ul>
          </div>
        </div>

        <FooterWordmark />

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} BE Graphic Studio. All rights reserved.</p>
          <p>
            Design &amp; development by{" "}
            <a
              href="https://monaski.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Monaski<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
