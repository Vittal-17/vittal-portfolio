import { ArrowUpRight, Server, BookOpen, Check } from "lucide-react";
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
  // Woven entrance: even cards fly in from the left, odd cards from the right.
  const from = flip ? "right" : "left";

  return (
    <FlyIn from={from} className="scene-3d">
      <div className="group glass overflow-hidden rounded-[28px] p-5 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-float sm:p-7">
        <div className="grid items-center gap-7 lg:grid-cols-2">
          <div className={cn("flex min-w-0 flex-col", flip && "lg:order-2")}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Pill tone="ink">{project.category}</Pill>
              {project.badge && <Pill tone="accent">{project.badge}</Pill>}
              {project.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
            <p className="mt-1 text-base font-medium text-ink/50">{project.tagline}</p>
            <p className="mt-4 text-pretty text-ink/70">{project.summary}</p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full chip-accent">
                    <Check size={11} className="text-ink" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {project.metrics && (
              <div className="mt-5 flex flex-wrap gap-5">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-xl font-semibold tracking-tight">
                      <CountUp value={m.value} />
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink/40">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full border border-ink/10 bg-white/50 px-2.5 py-1 text-xs text-ink/70">
                  {s}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
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

          <div className={cn("min-w-0", flip && "lg:order-1")}>
            <Gallery items={project.gallery} name={project.name} />
          </div>
        </div>
      </div>
    </FlyIn>
  );
}
