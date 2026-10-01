"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type FlyInProps = {
  children: React.ReactNode;
  className?: string;
  from?: "left" | "right" | "up";
  delay?: number;
  distance?: number | "viewport";
  start?: string;
  end?: string;
  scrub?: number | boolean;
};

/**
 * A real directional flight, not a tiny tilt: the element starts outside the
 * viewport on a deep Z plane and is scrubbed into place as it crosses the
 * viewport. Project cards alternate left / right for a woven entrance.
 */
export default function FlyIn({
  children,
  className,
  from = "up",
  delay = 0,
  distance = 150,
  start = "top 94%",
  end = "top 42%",
  scrub = 1.05,
}: FlyInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dir = from === "right" ? 1 : from === "left" ? -1 : 0;
    const viewportDistance = Math.min(Math.max(window.innerWidth * 0.62, 280), 900);
    const travel = distance === "viewport" ? viewportDistance : distance;
    const spin = dir === -1 ? 1 : -1;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: dir * travel,
          y: from === "up" ? 140 : 70,
          z: dir === 0 ? -100 : -320,
          rotateY: dir * -48,
          rotateX: from === "up" ? 12 : 5,
          rotateZ: spin * (dir === 0 ? 0 : 13),
          scale: dir === 0 ? 0.82 : 0.62,
          transformPerspective: 1500,
          transformOrigin: dir === -1 ? "right center" : dir === 1 ? "left center" : "center center",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          z: 0,
          rotateY: 0,
          rotateX: 0,
          rotateZ: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub,
            toggleActions: scrub ? undefined : "play none none reverse",
          },
        },
      );

    }, ref);

    return () => ctx.revert();
  }, [from, delay, distance, start, end, scrub]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
