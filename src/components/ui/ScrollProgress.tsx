"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

/** Thin lime progress bar pinned to the top, driven by page scroll. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const bar = ref.current;
    if (!bar) return;

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
    });

    return () => st.kill();
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden />;
}
