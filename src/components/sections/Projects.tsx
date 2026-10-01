import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import { ArrowDown, ArrowUpRight, Boxes, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/motion/Magnetic";

const MARQUEE = [
  "RAG",
  "Vector Search",
  "FastAPI",
  "Django REST",
  "React",
  "Next.js",
  "Machine Learning",
  "PostgreSQL",
  "Cloud Deployment",
];

export default function Projects() {
  return (
    <section id="work" className="projects-section relative scroll-mt-24 overflow-hidden py-28 sm:py-40">
      <div className="projects-backdrop pointer-events-none absolute inset-x-0 top-[18%] h-[70%] opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.72fr]">
          <SectionHeading
            eyebrow="Selected work / flight deck"
            title="Proof, not promises."
            intro="A live ship log of production-minded systems — each one starts as a messy problem and lands as a product people can actually use."
          />

          <div className="projects-manifesto relative overflow-hidden rounded-[28px] border border-ink/10 bg-ink p-5 text-paper shadow-[0_30px_80px_-42px_rgba(18,18,18,0.7)] sm:p-7">
            <div className="projects-manifesto-grid absolute inset-0 opacity-40" aria-hidden />
            <div className="relative">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-paper/45"><span>operating principle</span><Sparkles size={13} className="text-accent" /></div>
              <p className="mt-5 max-w-md text-xl leading-tight tracking-tight text-paper sm:text-2xl">Make the invisible architecture feel obvious.</p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.15em] text-paper/40"><span className="inline-flex items-center gap-1.5"><Boxes size={12} className="text-accent" /> {PROJECTS.length} systems mapped</span><span>01 → ∞</span></div>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={MARQUEE} className="my-14 border-y border-ink/10 py-5" />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 sm:gap-16 sm:px-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col items-start justify-between gap-5 border-t border-ink/10 px-5 pt-6 sm:flex-row sm:items-center sm:px-10">
        <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40"><ArrowDown size={14} className="text-accent" /> keep scrolling / the system is still live</p>
        <Magnetic strength={0.45}>
          <Button href="#contact" variant="outline">Have a hard problem? <ArrowUpRight size={15} /></Button>
        </Magnetic>
      </div>
    </section>
  );
}
