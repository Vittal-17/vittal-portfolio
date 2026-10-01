import { Activity, ArrowUpRight, BookOpen, Check, Move3d, Server } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project, ProjectLink } from "@/lib/projects";
import Gallery from "@/components/sections/Gallery";
import FlyIn from "@/components/motion/FlyIn";
import CountUp from "@/components/motion/CountUp";
import Pill from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  if (kind === "github") return <GithubIcon size={15} />;
  if (kind === "api") return <Server size={15} />;
  if (kind === "docs") return <BookOpen size={15} />;
  return <ArrowUpRight size={15} />;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const from = flip ? "right" : "left";
  const directionLabel = flip ? "right → center" : "left → center";

  return (
    <FlyIn from={from} distance="viewport" start="top 98%" end="top 44%" className="scene-3d project-flight">
      <article className="project-card group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/90 p-4 shadow-[0_30px_80px_-42px_rgba(18,18,18,0.5)] transition-[box-shadow,border-color] duration-700 hover:border-accent/60 hover:shadow-[0_42px_100px_-42px_rgba(18,18,18,0.65)] sm:rounded-[38px] sm:p-6">
        <div className="project-card-glow pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/20 blur-3xl transition-transform duration-1000 group-hover:scale-150" aria-hidden />
        <div className="project-card-glow pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-accent-2/15 blur-3xl transition-transform duration-1000 group-hover:scale-125" aria-hidden />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-1 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
          <div className="flex items-center gap-3">
            <span className="project-index grid h-8 w-8 place-items-center rounded-xl bg-ink text-paper">{String(index + 1).padStart(2, "0")}</span>
            <span className="inline-flex items-center gap-1.5"><Activity size={12} className="text-accent-2" /> system / {project.id}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-ink/45"><Move3d size={12} className="text-accent" /> {directionLabel}</span>
        </div>

        <div className="relative z-10 grid items-center gap-8 pt-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:pt-8">
          <div className={cn("flex min-w-0 flex-col", flip && "lg:order-2")}>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Pill tone="ink">{project.category}</Pill>
              {project.badge && <Pill tone="accent">{project.badge}</Pill>}
              {project.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="project-card-title text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl">{project.name}</h3>
            <p className="mt-3 text-base font-medium text-ink/50 sm:text-lg">{project.tagline}</p>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink/70">{project.summary}</p>

            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="project-highlight flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full chip-accent">
                    <Check size={11} className="text-ink" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {project.metrics && (
              <div className="mt-7 grid grid-cols-3 gap-3 border-y border-ink/10 py-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      <CountUp value={m.value} />
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full border border-ink/10 bg-white/60 px-2.5 py-1 text-xs text-ink/70 transition-colors duration-300 group-hover:border-ink/20">
                  {s}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {project.links.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1",
                      i === 0 ? "bg-ink text-paper hover:shadow-float" : "border border-ink/15 bg-white/50 text-ink hover:bg-white/80",
                    )}
                  >
                    <LinkIcon kind={link.kind} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className={cn("project-gallery-shell min-w-0", flip && "lg:order-1")}>
            <div className="project-gallery-tag pointer-events-none absolute z-10 hidden -translate-x-3 -translate-y-3 rounded-full border border-ink/10 bg-paper/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.17em] text-ink/50 shadow-soft sm:block">
              interface / live surface
            </div>
            <Gallery items={project.gallery} name={project.name} />
          </div>
        </div>

        <div className="relative z-10 mt-6 flex items-center justify-between gap-3 border-t border-ink/10 px-1 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">
          <span>case file / {String(index + 1).padStart(2, "0")}</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> shipped with intent</span>
        </div>
      </article>
    </FlyIn>
  );
}
