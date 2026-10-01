"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
};

/**
 * Word-by-word masked rise. Each word sits in an overflow-hidden mask and
 * slides up on scroll. Renders plain words first, so it is SSR / no-JS safe.
 */
export default function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  start = "top 88%",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-word]");
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        yPercent: 115,
        duration: 0.9,
        delay,
        ease: "power4.out",
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, stagger, start]);

  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block overflow-hidden align-bottom",
            i < words.length - 1 && "me-[0.28em]",
          )}
        >
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
