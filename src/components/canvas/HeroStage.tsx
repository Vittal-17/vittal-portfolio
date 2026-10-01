"use client";

/**
 * Lightweight CSS 3D stage. The original WebGL stage was beautiful but kept a
 * full-screen render loop alive underneath the page. This keeps the depth,
 * orbiting core and floating tiles while letting the browser compositor do the
 * work, so the actual portfolio remains responsive during scroll.
 */
function FloatTile({ className, delay }: { className?: string; delay?: string }) {
  return <div className={`hero-css-tile absolute rounded-3xl ${className ?? ""}`} style={{ animationDelay: delay }} aria-hidden />;
}

export default function HeroStage() {
  return (
    <div className="hero-css-stage pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="hero-css-glow absolute right-[2%] top-[8%] h-[68%] w-[68%] rounded-full" />
      <div className="hero-css-orbit hero-css-orbit-a" />
      <div className="hero-css-orbit hero-css-orbit-b" />
      <div className="hero-css-core"><span /><i /><b /></div>
      <FloatTile className="right-[4%] top-[13%] h-20 w-28 bg-accent/45" delay="0s" />
      <FloatTile className="right-[31%] top-[5%] h-16 w-16 bg-accent-2/55" delay="-1.8s" />
      <FloatTile className="right-[4%] bottom-[15%] h-28 w-20 bg-white/55" delay="-3.4s" />
      <FloatTile className="right-[37%] bottom-[8%] h-16 w-24 bg-accent/35" delay="-2.2s" />
    </div>
  );
}
