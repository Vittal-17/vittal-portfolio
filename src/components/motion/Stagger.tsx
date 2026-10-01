"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  start?: string;
};

/** Reveals direct children one-by-one on scroll. No-ops under reduced motion. */
export default function Stagger({
  children,
  className,
  delay = 0,
  y = 22,
  stagger = 0.08,
  start = "top 85%",
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(el.children) as HTMLElement[];
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, y, stagger, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
