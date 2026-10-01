import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  duration?: number;
};

/** Seamless looping marquee of text items (pure CSS). */
export default function Marquee({ items, className, duration = 32 }: MarqueeProps) {
  const row = (aria?: boolean) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={aria ? undefined : true}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10 font-mono text-sm uppercase tracking-wider text-ink/50">
          {item}
          <span className="text-accent">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex animate-marquee"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {row(true)}
        {row(false)}
      </div>
    </div>
  );
}
