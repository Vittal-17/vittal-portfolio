import { PROFILE, SOCIALS, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto max-w-6xl px-5 pb-10">
      <div className="glass rounded-[28px] p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl chip-accent font-mono text-lg font-semibold text-ink">
                V
              </span>
              <span className="font-medium">{PROFILE.name}</span>
            </div>
            <p className="mt-4 text-sm text-ink/55">
              {PROFILE.role} building complete systems from database to deployment. {PROFILE.availability}.
            </p>
          </div>

          <div className="flex gap-12">
            <nav className="flex flex-col gap-2 text-sm">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink/40">Navigate</p>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-ink/70 transition-colors hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-2 text-sm">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink/40">Connect</p>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-ink/70 transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center">
          <p>© {year} {PROFILE.name}. Built with Next.js, GSAP & three.js.</p>
          <a href="#top" className="transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
