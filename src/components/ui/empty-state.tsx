import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { Button } from "./button";

export function EmptyState({
  eyebrow = "Nothing here yet",
  title,
  body,
  action,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  action?: { href: string; label: string };
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <p className={cn("caption mb-4", invert && "text-ivory/50")}>{eyebrow}</p>
      <h2
        className={cn(
          "font-display text-3xl font-normal",
          invert ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-4 leading-relaxed", invert ? "text-ivory/65" : "text-stone-dark")}>
        {body}
      </p>
      {action ? (
        <div className="mt-8 flex justify-center">
          <Button href={action.href} variant={invert ? "invert" : "primary"}>
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse bg-parchment/80", className)}
      aria-hidden="true"
    />
  );
}

export function PageIntro({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>{children}</div>
  );
}
