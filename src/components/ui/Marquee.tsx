"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  duration?: number;
};

/**
 * Velocity-reactive marquee: a base GSAP loop that speeds up, follows scroll
 * direction, and skews with scroll velocity, easing back to idle when still.
 * Falls back to a static (visible) row under reduced motion.
 */
export default function Marquee({ items, className, duration = 32 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, { xPercent: -50, repeat: -1, duration, ease: "none" });
      const skewSetter = gsap.quickSetter(track, "skewX", "deg");
      const proxy = { skew: 0 };
      const clampSkew = gsap.utils.clamp(-14, 14);

      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = self.getVelocity() / 320;
          tween.timeScale(gsap.utils.clamp(1, 6, 1 + Math.abs(v) * 0.7));
          tween.reversed(self.direction === -1);
          const skew = clampSkew(v);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.7,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });

      const decay = () => {
        const ts = tween.timeScale();
        if (Math.abs(ts - 1) > 0.01) tween.timeScale(gsap.utils.interpolate(ts, 1, 0.04));
      };
      gsap.ticker.add(decay);

      return () => {
        st.kill();
        gsap.ticker.remove(decay);
      };
    }, trackRef);

    return () => ctx.revert();
  }, [duration, items.length]);

  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden ? true : undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10 font-mono text-sm uppercase tracking-wider text-ink/50">
          {item}
          <span className="text-accent">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div ref={trackRef} className="flex will-change-transform">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
