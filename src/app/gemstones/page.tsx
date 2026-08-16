import { ProductCard } from "@/components/commerce/product-card";
import { FilterBar } from "@/components/commerce/filter-bar";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageFrame } from "@/components/ui/page-frame";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getAllProducts, getSpecies } from "@/lib/catalog";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "A private cabinet of gemstone specimens — selected for colour, origin and character.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ArchivePage({ searchParams }: Props) {
  const params = await searchParams;
  const gem = single(params.gem);
  const color = single(params.color);
  const originType = single(params.originType);
  const treatment = single(params.treatment);
  const available = single(params.available);

  const stones = getAllProducts().filter((product) => {
    const species = getSpecies(product.gemstoneId);
    if (gem && product.gemstoneId !== gem) return false;
    if (originType && product.specs.originType !== originType) return false;
    if (treatment && product.specs.treatment !== treatment) return false;
    if (available === "1" && product.availability !== "available") return false;
    if (color && species && !species.colours.some((c) => c.includes(color))) {
      const blob = `${product.specs.color} ${species.colours.join(" ")}`.toLowerCase();
      if (!blob.includes(color)) return false;
    }
    return true;
  });

  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "The Archive" },
          ]}
        />
        <div className="mt-10 max-w-2xl">
          <p className="caption">The Archive</p>
          <h1 className="mt-4 font-display text-4xl font-normal leading-tight sm:text-6xl">
            A cabinet, not a catalogue.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-dark">
            Unique specimens. Weight, origin and treatment stated. Photography of each stone will replace these studies when the house holds it.
          </p>
        </div>
        <div className="mt-12">
          <Suspense>
            <FilterBar />
          </Suspense>
        </div>
        {stones.length === 0 ? (
          <EmptyState
            title="No specimens match"
            body="Widen the filters, or speak with us — some stones are held for private clients and never listed."
            action={{ href: "/consult", label: "Request a consultation" }}
          />
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </PageFrame>
  );
}

function single(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}
