import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "invert" | "quiet" | "goldline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory hover:bg-ink-mid border border-ink",
  ghost:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
  invert:
    "bg-ivory text-ink hover:bg-ivory-deep border border-ivory",
  quiet:
    "bg-transparent text-ink/80 hover:text-ink border-0 px-0 underline-offset-[6px] hover:underline",
  goldline:
    "bg-transparent text-ivory border border-champagne/40 hover:border-champagne",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.68rem]",
  md: "h-12 px-7 text-[0.72rem]",
  lg: "h-14 px-9 text-[0.75rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 tracking-[0.18em] uppercase font-medium transition-colors duration-300 disabled:opacity-40 disabled:pointer-events-none";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={props.onClick as never}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
