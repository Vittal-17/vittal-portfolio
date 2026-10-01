"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { HERO, PROFILE, SOCIALS } from "@/lib/content";
import TextReveal from "@/components/motion/TextReveal";
import Magnetic from "@/components/motion/Magnetic";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import HeroStage from "@/components/canvas/HeroStage";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16">
      {/* Stage: WebGL hero canvas (client-only) with CSS fallback art. */}
      <HeroStage />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start justify-center">
          <Pill tone="default" className="mb-6 bg-white/70">
            <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse-dot" />
            {HERO.eyebrow}
          </Pill>

          <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {HERO.titleLines.map((line, i) => (
              <span key={i} className="block">
                <TextReveal text={line} delay={i * 0.08} />
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base text-ink/65 sm:text-lg">{HERO.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="mt-8 flex items-center gap-4 text-sm text-ink/55">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 transition-colors hover:text-ink"
              >
                {s.label === "GitHub" && <GithubIcon size={15} />}
                {s.label}
              </a>
            ))}
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
