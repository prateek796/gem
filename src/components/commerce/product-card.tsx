import { GemPlate } from "@/components/editorial/gem-plate";
import { cn } from "@/lib/cn";
import { formatCarat, formatPrice } from "@/lib/format";
import { getSpecies } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import Link from "next/link";

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const stone = getSpecies(product.gemstoneId);
  if (!stone) return null;

  const href = `/gemstones/${stone.slug}/${product.slug}`;
  const unavailable = product.availability !== "available";

  return (
    <article className={cn("group", featured && "lg:col-span-2")}>
      <Link href={href} className="block focus-visible:outline-offset-8">
        <div className="relative overflow-hidden">
          <GemPlate
            palette={stone.palette}
            cut={product.specs.cut}
            name={`${product.slug}-card`}
            size={featured ? "lg" : "md"}
            caption={`${stone.name} · ${formatCarat(product.specs.weightCarat)}`}
          />
          {unavailable ? (
            <span className="absolute left-4 top-4 caption bg-ivory/90 px-3 py-1 text-ink">
              {product.availability === "sold" ? "Placed" : "Reserved"}
            </span>
          ) : product.quantity === 1 ? (
            <span className="absolute left-4 top-4 caption text-ivory/70">
              One available
            </span>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 py-4">
          <div>
            <h3 className="font-display text-xl tracking-tight text-ink group-hover:text-ink-mid">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-stone-dark">
              {product.specs.origin}
              {product.specs.originType === "lab-grown" ? " · Laboratory" : ""}
            </p>
          </div>
          <p className="shrink-0 pt-1 text-sm tracking-wide text-ink">
            {formatPrice(product.priceInr)}
          </p>
        </div>
      </Link>
    </article>
  );
}
