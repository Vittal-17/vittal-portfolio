"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Lenis smooth-scroll driven by GSAP's ticker so ScrollTrigger stays in sync.
 * Disabled when the user prefers reduced motion (native scroll takes over).
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 0.72,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    // Do not disable GSAP's lag protection: a dropped frame should catch up
    // gracefully instead of forcing a burst of work on the next frame.
    gsap.ticker.lagSmoothing(1000, 33);

    // ScrollTriggers are created by child components BEFORE this provider mounts,
    // so their start/end offsets are computed before Lenis changes the document
    // height and before the async <link> fonts reflow the layout. Without a
    // refresh, many triggers evaluate as "already past" at load and never replay
    // on scroll — which reads as "almost no animations". Recompute once Lenis is
    // live, on the window load event, and after web fonts finish loading.
    const refresh = () => ScrollTrigger.refresh();
    const rafId = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    // Allow anchor links to drive Lenis.
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      cancelAnimationFrame(rafId);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
