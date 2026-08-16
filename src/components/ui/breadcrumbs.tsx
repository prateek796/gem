import { cn } from "@/lib/cn";
import Link from "next/link";

export function Breadcrumbs({
  items,
  invert = false,
}: {
  items: { href?: string; label: string }[];
  invert?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em]",
          invert ? "text-ivory/45" : "text-stone-dark",
        )}
      >
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  invert ? "hover:text-ivory" : "hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={invert ? "text-ivory/80" : "text-ink"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
