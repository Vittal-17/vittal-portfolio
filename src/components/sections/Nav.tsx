"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE, SOCIALS } from "@/lib/content";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const linkedIn = SOCIALS.find((s) => s.label === "LinkedIn")?.href ?? "#";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 pl-4 transition-all duration-500",
          scrolled ? "glass-strong py-2" : "bg-transparent py-1.5",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Vittal J G — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl chip-accent font-mono text-lg font-semibold text-ink">
            V
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">{PROFILE.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3.5 py-2 text-sm text-ink/70 transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <Button href={PROFILE.resume} external variant="primary" className="ml-1">
            Résumé <ArrowUpRight size={15} />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl md:hidden">
          <div className="glass-strong flex flex-col gap-1 rounded-3xl p-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-medium text-ink/80 transition-colors hover:bg-white/60 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-ink/80 transition-colors hover:bg-white/60 hover:text-ink"
            >
              LinkedIn
            </a>
            <Button href={PROFILE.resume} external variant="primary" className="mt-1 w-full">
              Résumé <ArrowUpRight size={15} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
