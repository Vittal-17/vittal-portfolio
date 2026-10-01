"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function Gallery({ items, name }: { items: GalleryItem[]; name: string }) {
  const [index, setIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const count = items.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Preload neighbours for snappy navigation.
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      const item = items[((i % count) + count) % count];
      if (item) {
        const img = new Image();
        img.src = item.src;
      }
    });
  }, [index, items, count]);

  // Keep the active thumbnail in view.
  useEffect(() => {
    const strip = stripRef.current;
    const active = strip?.querySelector<HTMLElement>(`[data-thumb="${index}"]`);
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const current = items[index];

  return (
    <div
      className="w-full"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-white/60">
        <img
          key={current.src}
          src={current.src}
          alt={`${name} — ${current.label}`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous screenshot"
          className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full glass-strong transition-transform hover:scale-105"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next screenshot"
          className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full glass-strong transition-transform hover:scale-105"
        >
          <ChevronRight size={18} />
        </button>

        {current.theme && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper">
            {current.theme}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full glass-strong px-2.5 py-1 font-mono text-[11px] text-ink/70">
          {index + 1} / {count}
        </span>
      </div>

      <p aria-live="polite" className="mt-3 text-sm text-ink/70">
        <span className="sr-only">{`Image ${index + 1} of ${count}: `}</span>
        {current.label}
      </p>

      <div ref={stripRef} className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {items.map((it, i) => (
          <button
            key={i}
            data-thumb={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to ${it.label}`}
            aria-current={i === index}
            className={cn(
              "relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border transition-all",
              i === index ? "border-ink" : "border-transparent opacity-50 hover:opacity-100",
            )}
          >
            <img src={it.src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
