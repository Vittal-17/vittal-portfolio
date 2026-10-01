import { ArrowUpRight, Check, Mail, MapPin, Radio, Sparkles } from "lucide-react";
import { PROFILE, SOCIALS } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/motion/TextReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <Reveal className="contact-stage relative overflow-hidden rounded-[32px] bg-ink p-7 text-paper shadow-[0_40px_110px_-52px_rgba(18,18,18,0.85)] sm:rounded-[42px] sm:p-14">
        <div className="contact-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="aurora pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#eaff8f] to-[#c6f04a] opacity-30 blur-2xl" />
        <div
          className="aurora pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#c9d8ff] opacity-30 blur-2xl"
          style={{ animationDelay: "-9s", animationDuration: "26s" }}
        />

        <div className="contact-inner relative grid items-center gap-12 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45"><Radio size={13} className="text-accent" /> contact / open channel</div>
            <h2 className="mt-6 max-w-2xl text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-paper sm:text-7xl"><TextReveal text="Let's build something that ships." /></h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/60 sm:text-lg">Have a product, platform or stubborn systems problem? Send the signal. I'm available for full-time software engineering roles and serious things worth making real.</p>

            <a
              href={`mailto:${PROFILE.email}`}
              className="group mt-8 inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-paper sm:text-3xl"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl chip-accent sm:h-14 sm:w-14">
                <Mail className="text-ink" />
              </span>
              <span className="link-underline">{PROFILE.email}</span>
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.45}>
                <Button href={`mailto:${PROFILE.email}`} variant="accent">
                  Email me <ArrowUpRight size={16} />
                </Button>
              </Magnetic>
              <Magnetic strength={0.45}>
                <Button href={PROFILE.resume} external variant="outline" className="border-white/20 bg-white/5 text-paper hover:border-white/40 hover:bg-white/10">
                  Résumé
                </Button>
              </Magnetic>
              {SOCIALS.filter((s) => s.label !== "Email").map((s) => (
                <Button key={s.label} href={s.href} external variant="outline" className="border-white/15 bg-white/[0.03] text-paper/70 hover:border-white/35 hover:bg-white/10 hover:text-paper">
                  {s.label}
                </Button>
              ))}
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-paper/45">
              <MapPin size={15} /> {PROFILE.location}
            </p>
          </div>

          <div className="contact-radar relative mx-auto aspect-square w-full max-w-[360px]">
            <div className="contact-radar-ring contact-radar-ring-one" />
            <div className="contact-radar-ring contact-radar-ring-two" />
            <div className="contact-radar-ring contact-radar-ring-three" />
            <div className="contact-radar-sweep" />
            <div className="contact-radar-core"><Sparkles size={21} /><span>VJ</span></div>
            <div className="contact-radar-point contact-radar-point-a"><Check size={11} /> API</div>
            <div className="contact-radar-point contact-radar-point-b"><Check size={11} /> AI</div>
            <div className="contact-radar-point contact-radar-point-c"><Check size={11} /> UI</div>
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-paper/30">ready when you are</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
