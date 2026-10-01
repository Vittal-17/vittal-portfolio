import { ABOUT_PARAGRAPHS, AT_A_GLANCE, INTERESTS, PROFILE, SKILL_GROUPS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Parallax from "@/components/motion/Parallax";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <SectionHeading eyebrow="About" title="Full systems, built end to end." />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {/* Intro */}
        <Reveal className="glass flex flex-col justify-between rounded-3xl p-7 md:col-span-2">
          <div className="space-y-4">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl text-ink/85" : "text-ink/60"}>
                {p}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {PROFILE.pipeline.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 font-mono text-xs">
                  {step}
                </span>
                {i < PROFILE.pipeline.length - 1 && <span className="text-accent">→</span>}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Portrait */}
        <Reveal delay={0.1} className="glass flex flex-col overflow-hidden rounded-3xl md:row-span-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Parallax speed={6} className="absolute inset-[-8%]">
              <img
                src="/images/pfpisha.png"
                alt={`${PROFILE.name}, ${PROFILE.role}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <div>
              <p className="text-lg font-semibold">{PROFILE.name}</p>
              <p className="text-sm text-ink/55">{PROFILE.role}</p>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {AT_A_GLANCE.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-ink/40">{s.label}</dt>
                  <dd className="text-sm text-ink/80">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal delay={0.05} className="glass rounded-3xl p-7 md:col-span-2">
          <p className="mb-5 font-mono text-xs uppercase tracking-wider text-ink/40">Technical focus</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="mb-2 text-sm font-medium text-ink/80">{group.title}</p>
                <Stagger className="flex flex-wrap gap-1.5" stagger={0.04}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/10 bg-white/50 px-2.5 py-1 text-xs text-ink/70"
                    >
                      {skill}
                    </span>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Interests */}
        <Reveal delay={0.1} className="glass rounded-3xl p-7 md:col-span-3">
          <Stagger className="flex flex-wrap items-center gap-x-8 gap-y-3" stagger={0.07}>
            <p className="font-mono text-xs uppercase tracking-wider text-ink/40">Beyond code</p>
            {INTERESTS.map((it) => (
              <span key={it.label} className="inline-flex items-center gap-2 text-ink/75">
                <span className="text-lg">{it.emoji}</span>
                {it.label}
              </span>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
