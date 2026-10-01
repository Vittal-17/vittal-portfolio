"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { HERO, PROFILE, SOCIALS } from "@/lib/content";
import { registerGsap, gsap } from "@/lib/gsap";
import TextReveal from "@/components/motion/TextReveal";
import Magnetic from "@/components/motion/Magnetic";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import HeroStage from "@/components/canvas/HeroStage";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    const content = contentRef.current;
    if (!root || !content) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Load-in: the headline runs its own word reveal; everything tagged
      // data-hero rises in just behind it.
      gsap.from("[data-hero]", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.35,
      });

      // Scroll parallax: the copy drifts up and fades as the hero exits.
      gsap.to(content, {
        yPercent: -14,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16"
    >
      {/* Stage: WebGL hero canvas (client-only) with CSS fallback art. */}
      <HeroStage />
      {/* Soft drifting aurora behind the copy. */}
      <div
        className="aurora pointer-events-none absolute left-[-8%] top-[16%] -z-0 h-[46vh] w-[46vh] rounded-full bg-[radial-gradient(circle,rgba(216,255,78,0.5),transparent_70%)]"
        aria-hidden
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="flex flex-col items-start justify-center">
          <div data-hero className="mb-6">
            <Pill tone="default" className="bg-white/70">
              <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse-dot" />
              {HERO.eyebrow}
            </Pill>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {HERO.titleLines.map((line, i) => (
              <span key={i} className="block">
                <TextReveal text={line} delay={i * 0.08} />
              </span>
            ))}
          </h1>

          <p data-hero className="mt-6 max-w-md text-pretty text-base text-ink/65 sm:text-lg">
            {HERO.lead}
          </p>

          <div data-hero className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href="#work" variant="accent">
                View work <ArrowUpRight size={16} />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={PROFILE.resume} external variant="outline">
                Résumé
              </Button>
            </Magnetic>
          </div>

          <div data-hero className="mt-8 flex items-center gap-4 text-sm text-ink/55">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="link-underline inline-flex items-center gap-1 transition-colors hover:text-ink"
              >
                {s.label === "GitHub" && <GithubIcon size={15} />}
                {s.label}
              </a>
            ))}
          </div>

          {/* Database → Deployment pipeline, animated. */}
          <div data-hero className="mt-9 w-full max-w-md">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink/40">
              <span>Pipeline</span>
              <span>End to end</span>
            </div>
            <div className="pipeline-sweep relative h-1.5 w-full overflow-hidden rounded-full bg-ink/10" />
            <div className="mt-2.5 flex items-center justify-between">
              {PROFILE.pipeline.map((step, i) => (
                <span key={step} className="flex items-center gap-1.5 font-mono text-[11px] text-ink/55">
                  <span
                    className="node-pulse h-1.5 w-1.5 rounded-full bg-accent"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-ink/40 transition-colors hover:text-ink"
        aria-label="Scroll to work"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-floaty" />
      </a>
    </section>
  );
}
