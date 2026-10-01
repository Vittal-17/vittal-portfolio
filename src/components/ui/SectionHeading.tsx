import TextReveal from "@/components/motion/TextReveal";
import Pill from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Pill tone="default" className="mb-5">
        {eyebrow}
      </Pill>
      <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl">
        <TextReveal text={title} />
      </h2>
      {intro ? <p className="mt-5 text-pretty text-lg text-ink/60">{intro}</p> : null}
    </div>
  );
}
