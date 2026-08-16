"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageFrame } from "@/components/ui/page-frame";
import { GemPlate } from "@/components/editorial/gem-plate";
import {
  getProductById,
  getSpecies,
  originTypeLabel,
  treatmentLabel,
} from "@/lib/catalog";
import { formatCarat, formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function ComparePage() {
  const { compare, toggleCompare } = useStore();
  const items = compare
    .map((id) => {
      const product = getProductById(id);
      const stone = product ? getSpecies(product.gemstoneId) : undefined;
      return product && stone ? { product, stone } : null;
    })
    .filter((item) => item !== null);

  if (items.length === 0) {
    return (
      <PageFrame>
        <Container className="py-16">
          <EmptyState
            title="Nothing to compare"
            body="On a specimen page, choose Compare. Up to three stones."
            action={{ href: "/gemstones", label: "Enter the Archive" }}
          />
        </Container>
      </PageFrame>
    );
  }

  const rows = [
    { k: "Species", v: (i: (typeof items)[number]) => i.stone.name },
    { k: "Price", v: (i: (typeof items)[number]) => formatPrice(i.product.priceInr) },
    { k: "Weight", v: (i: (typeof items)[number]) => formatCarat(i.product.specs.weightCarat) },
    { k: "Colour", v: (i: (typeof items)[number]) => i.product.specs.color },
    { k: "Origin", v: (i: (typeof items)[number]) => i.product.specs.origin },
    { k: "Treatment", v: (i: (typeof items)[number]) => treatmentLabel(i.product.specs.treatment) },
    { k: "Nature", v: (i: (typeof items)[number]) => originTypeLabel(i.product.specs.originType) },
    { k: "Hardness", v: (i: (typeof items)[number]) => i.stone.hardness },
    { k: "Rarity", v: (i: (typeof items)[number]) => i.stone.rarity },
    { k: "Traditional meaning", v: (i: (typeof items)[number]) => i.product.meaning.symbolism },
    { k: "Zodiac", v: (i: (typeof items)[number]) => i.stone.meaning.zodiac.join(", ") },
  ];

  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <p className="caption">Compare</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Side by side, without noise.</h1>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr>
                <th className="w-40 p-4" />
                {items.map(({ product, stone }) => (
                  <th key={product.id} className="p-4 align-bottom">
                    <GemPlate
                      palette={stone.palette}
                      cut={product.specs.cut}
                      name={`cmp-${product.slug}`}
                      size="sm"
                      className="h-36"
                      glow={false}
                    />
                    <Link
                      href={`/gemstones/${stone.slug}/${product.slug}`}
                      className="mt-4 block font-display text-xl"
                    >
                      {product.name}
                    </Link>
                    <button
                      type="button"
                      className="caption mt-2"
                      onClick={() => toggleCompare(product.id)}
                    >
                      Remove
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.k} className="border-t border-ink/10">
                  <th className="caption p-4 align-top font-medium">{row.k}</th>
                  {items.map((item) => (
                    <td key={item.product.id} className="p-4 align-top leading-relaxed text-stone-dark">
                      {row.v(item)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10">
          <Button href="/gemstones" variant="ghost">
            Add another from the Archive
          </Button>
        </div>
      </Container>
    </PageFrame>
  );
}
