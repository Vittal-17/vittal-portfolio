import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "ink";
};

const tones = {
  default: "border border-ink/10 bg-white/60 text-ink/70",
  accent: "chip-accent text-ink",
  ink: "bg-ink text-paper",
};

/** Small rounded label chip. */
export default function Pill({ children, className, tone = "default" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
