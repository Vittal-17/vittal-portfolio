"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";

/**
 * Counts a numeric metric up when it scrolls into view. Non-numeric values
 * (e.g. "v0.1.0", "Store + Admin") render verbatim. SSR-safe: prints the final
 * value first, then animates on the client.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\d+(?:\.\d+)?)([%+x]?)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const obj = { n: 0 };
    el.textContent = `0${decimals ? "." + "0".repeat(decimals) : ""}${suffix}`;

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: target,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${obj.n.toFixed(decimals)}${suffix}`;
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
