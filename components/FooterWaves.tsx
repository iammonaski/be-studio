"use client";

import { useEffect, useRef } from "react";

// A lightweight dot-wave texture inspired by Pattern Waves. Deliberately uses
// Canvas 2D: decorative footer motion must not initialize a WebGL context.
export function FooterWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shades = Array.from({ length: 12 }, (_, index) => 0.06 + index * 0.024);
    let width = 0;
    let height = 0;
    let visible = false;
    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    let disposed = false;
    let dirty = true;
    let tint = "#23bbd3";

    const resize = () => {
      // Keep dot spacing in CSS pixels; cap DPI rather than scaling the pattern.
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      tint = getComputedStyle(document.documentElement)
        .getPropertyValue("--blue-accent").trim() || "#23bbd3";
      dirty = true;
      start();
    };

    const paint = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = tint;
      const paths = shades.map(() => new Path2D());
      const spacing = Math.max(10, Math.sqrt((width * height) / 12000));
      const time = elapsed * 0.00016;

      for (let row = 0; row < Math.ceil(height / spacing) + 2; row++) {
        const y = row * spacing;
        for (let column = 0; column < Math.ceil(width / spacing) + 1; column++) {
          const x = column * spacing;
          const bend = Math.sin(y * 0.004 + time * 0.2) * 0.75
            + Math.sin(x * 0.002 - y * 0.003 + time * 0.12) * 0.35;
          const phase = x * 0.009 + y * 0.006 + bend - time;
          const fold = Math.sin(phase) + 0.24 * Math.sin(phase * 2 + 1.3);
          const crest = Math.min(1, Math.max(0, (fold / 1.24 + 1) / 2));
          const radius = 0.45 + Math.pow(crest, 1.4) * 1.3;
          const lift = fold * 2;
          const path = paths[Math.min(shades.length - 1, Math.floor(crest * shades.length))];
          path.moveTo(x + radius, y + lift);
          path.arc(x, y + lift, radius, 0, Math.PI * 2);
        }
      }
      paths.forEach((path, index) => {
        context.globalAlpha = shades[index];
        context.fill(path);
      });
      context.globalAlpha = 1;
      canvas.dataset.ready = "true";
      dirty = false;
    };

    const tick = (now: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      const delta = previous ? now - previous : 0;
      if (dirty || !previous || delta >= 1000 / 24) {
        if (!reducedMotion.matches) elapsed += Math.min(delta, 100);
        previous = now;
        paint();
      }
      if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
    };

    function start() {
      if (disposed || frame || !visible || document.hidden) return;
      frame = requestAnimationFrame(tick);
    }

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    const handleMotion = () => {
      stop();
      dirty = true;
      start();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersectionObserver.observe(container);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotion);

    return () => {
      disposed = true;
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotion);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
