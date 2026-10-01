"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), { ssr: false });

/* Floating glass tile — part of the no-WebGL / reduced-motion fallback art. */
function FloatTile({ className, delay }: { className?: string; delay?: string }) {
  return (
    <div
      className={`absolute glass rounded-3xl animate-floaty ${className ?? ""}`}
      style={{ animationDelay: delay }}
      aria-hidden
    />
  );
}

/**
 * Hero backdrop. Mounts the WebGL canvas on capable clients; otherwise renders
 * the CSS fallback art. The soft ambient glow sits behind both. The whole stage
 * is pointer-events-none so it never intercepts clicks on the hero content.
 */
export default function HeroStage() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let webgl = false;
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setEnabled(!reduced && webgl);
  }, []);

  return (
    <div id="hero-stage" className="pointer-events-none absolute inset-0 -z-0">
      <div className="canvas-fallback absolute right-[-10%] top-[8%] h-[70vh] w-[70vh] rounded-full" />
      {enabled ? (
        <div className="absolute inset-0">
          <HeroCanvas />
        </div>
      ) : (
        <>
          <div className="absolute right-[14%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#eaff8f] to-[#c6f04a] shadow-[0_40px_120px_-20px_rgba(216,255,78,0.8)] animate-floaty" />
          <FloatTile className="right-[8%] top-[18%] h-32 w-32" delay="0s" />
          <FloatTile className="right-[32%] top-[30%] h-24 w-36" delay="-1.5s" />
          <FloatTile className="right-[22%] bottom-[16%] h-36 w-28" delay="-3s" />
          <FloatTile className="right-[40%] bottom-[26%] h-20 w-20" delay="-2.2s" />
        </>
      )}
    </div>
  );
}
