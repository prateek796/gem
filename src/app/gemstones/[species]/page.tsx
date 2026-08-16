import { ProductCard } from "@/components/commerce/product-card";
import { GemPlate } from "@/components/editorial/gem-plate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { getAllSpecies, getProductsBySpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ species: string }> };

export function generateStaticParams() {
  return getAllSpecies().map((stone) => ({ species: stone.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { species: slug } = await params;
  const stone = getAllSpecies().find((item) => item.slug === slug);
  if (!stone) return {};
  return { title: stone.seo.title, description: stone.seo.description };
}

export default async function SpeciesPage({ params }: Props) {
  const { species: slug } = await params;
  const stone = getAllSpecies().find((item) => item.slug === slug);
  if (!stone) notFound();
  const specimens = getProductsBySpecies(stone.id);

  return (
    <PageFrame>
      <div className="bg-ink text-ivory">
        <Container className="grid items-end gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Breadcrumbs
              invert
              items={[
                { href: "/", label: "Home" },
                { href: "/gemstones", label: "Archive" },
                { label: stone.name },
              ]}
            />
            <p className="caption mt-10 text-ivory/50">{stone.family}</p>
            <h1 className="mt-4 font-display text-5xl font-light sm:text-7xl">
              {stone.name}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/70">
              {stone.excerpt}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="caption text-ivory/40">Hardness</dt>
                <dd className="mt-1">{stone.hardness}</dd>
              </div>
              <div>
                <dt className="caption text-ivory/40">Rarity</dt>
                <dd className="mt-1">{stone.rarity}</dd>
              </div>
            </dl>
          </div>
          <GemPlate
            palette={stone.palette}
            cut={stone.defaultCut}
            name={`${stone.slug}-species`}
            size="lg"
            caption={stone.typicalOrigins[0]}
          />
        </Container>
      </div>
      <Container className="py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <article className="prose-kalpa lg:col-span-7">
            <h2 className="font-display text-3xl text-ink">How it forms</h2>
            <p className="mt-4">{stone.formation}</p>
            <h2 className="mt-12 font-display text-3xl text-ink">A longer memory</h2>
            <p className="mt-4">{stone.history}</p>
          </article>
          <aside className="border border-ink/10 p-8 lg:col-span-5">
            <p className="caption">Traditional meaning</p>
            <p className="mt-4 font-display text-2xl leading-snug">{stone.meaning.symbolism}</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-dark">{stone.meaning.cultural}</p>
            <p className="caption mt-8">
              {stone.meaning.birthMonths.join(" · ")}
              {stone.meaning.planet ? ` · ${stone.meaning.planet}` : ""}
            </p>
            <Button href="/astrology" variant="quiet" className="mt-6">
              Meaning as culture →
            </Button>
          </aside>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl">Specimens in the house</h2>
          {specimens.length === 0 ? (
            <p className="mt-6 max-w-md text-stone-dark">
              No {stone.name.toLowerCase()} is listed at this moment. Enquire — private stock is not always published.
            </p>
          ) : (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {specimens.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </PageFrame>
  );
}
