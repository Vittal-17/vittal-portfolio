import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";

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
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems I've shipped."
          intro="Grouped by engineering depth — from document-grounded AI retrieval to production full-stack platforms and applied machine learning."
        />
      </div>

      <Marquee items={MARQUEE} className="my-12 border-y border-ink/5 py-4" />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
