import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article" | "nav";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  kicker,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  kicker?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className={cn("caption mb-4", invert && "text-ivory/50")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </h2>
      {kicker ? (
        <p className={cn("mt-5 max-w-lg text-[1.02rem] leading-relaxed", invert ? "text-ivory/70" : "text-stone-dark")}>
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
