import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "accent" | "outline";
  className?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 tap-highlight-none focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: "bg-ink text-paper hover:shadow-float hover:-translate-y-0.5",
  accent: "chip-accent text-ink hover:-translate-y-0.5 hover:shadow-float",
  outline: "border border-ink/15 bg-white/50 text-ink backdrop-blur hover:border-ink/40 hover:bg-white/80",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
