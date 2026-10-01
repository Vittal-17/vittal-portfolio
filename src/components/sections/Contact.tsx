import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { PROFILE, SOCIALS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <Reveal className="glass-strong relative overflow-hidden rounded-[32px] p-8 sm:p-14">
        <div className="aurora pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#eaff8f] to-[#c6f04a] opacity-40 blur-2xl" />
        <div
          className="aurora pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#c9d8ff] opacity-40 blur-2xl"
          style={{ animationDelay: "-9s", animationDuration: "26s" }}
        />

        <div className="relative">
          <SectionHeading eyebrow="Contact" title="Let's build something that ships." />

          <a
            href={`mailto:${PROFILE.email}`}
            className="group mt-8 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-4xl"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl chip-accent sm:h-14 sm:w-14">
              <Mail className="text-ink" />
            </span>
            <span className="link-underline">{PROFILE.email}</span>
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href={`mailto:${PROFILE.email}`} variant="accent">
                Email me <ArrowUpRight size={16} />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={PROFILE.resume} external variant="primary">
                Résumé
              </Button>
            </Magnetic>
            {SOCIALS.filter((s) => s.label !== "Email").map((s) => (
              <Button key={s.label} href={s.href} external variant="outline">
                {s.label}
              </Button>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-ink/50">
            <MapPin size={15} /> {PROFILE.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
