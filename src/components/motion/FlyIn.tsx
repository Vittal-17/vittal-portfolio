"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type FlyInProps = {
  children: React.ReactNode;
  className?: string;
  from?: "left" | "right" | "up";
  delay?: number;
  distance?: number;
  start?: string;
};

/**
 * Flies in from a direction and settles ("mounts") into place. Project cards
 * alternate left / right for a woven entrance. No-ops under reduced motion.
 */
export default function FlyIn({
  children,
  className,
  from = "up",
  delay = 0,
  distance = 150,
  start = "top 82%",
}: FlyInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dir = from === "right" ? 1 : from === "left" ? -1 : 0;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        x: dir * distance,
        y: from === "up" ? 90 : 0,
        rotateY: dir * -16,
        rotateX: from === "up" ? 12 : 0,
        scale: 0.92,
        transformPerspective: 1100,
        transformOrigin: "center center",
        duration: 1.15,
        delay,
        ease: "power4.out",
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [from, delay, distance, start]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
