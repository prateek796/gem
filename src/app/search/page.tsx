import { ProductCard } from "@/components/commerce/product-card";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageFrame } from "@/components/ui/page-frame";
import { journal } from "@/content/journal";
import { getAllProducts, getAllSpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Search",
  description: "Search specimens, species and the journal.",
};

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const products = query
    ? getAllProducts().filter((p) =>
        `${p.name} ${p.gemstoneId} ${p.specs.origin} ${p.specs.color} ${p.seo.description}`.toLowerCase().includes(query),
      )
    : [];
  const stones = query
    ? getAllSpecies().filter((s) =>
        `${s.name} ${s.excerpt} ${s.colours.join(" ")} ${s.meaning.symbolism}`.toLowerCase().includes(query),
      )
    : [];
  const essays = query
    ? journal.filter((a) => `${a.title} ${a.dek} ${a.category}`.toLowerCase().includes(query))
    : [];

  const empty = query && !products.length && !stones.length && !essays.length;

  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <h1 className="font-display text-4xl sm:text-5xl">Search</h1>
        <form className="mt-8 max-w-xl border-b border-ink/20">
          <input
            name="q"
            defaultValue={q}
            placeholder="Blue gemstone, ruby, October…"
            className="w-full bg-transparent py-3 font-display text-2xl outline-none"
          />
        </form>
        {!query ? (
          <p className="mt-10 text-stone-dark">Try a colour, a species, a month.</p>
        ) : empty ? (
          <EmptyState
            title="Nothing matches"
            body="The cabinet is finite. A consultation can look beyond what is listed."
            action={{ href: "/consult", label: "Speak with us" }}
          />
        ) : (
          <div className="mt-14 space-y-16">
            {products.length ? (
              <section>
                <p className="caption mb-6">Specimens</p>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            ) : null}
            {stones.length ? (
              <section>
                <p className="caption mb-4">Library</p>
                <ul className="space-y-2">
                  {stones.map((s) => (
                    <li key={s.id}>
                      <Link href={`/gemstones/${s.slug}`} className="font-display text-2xl">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            {essays.length ? (
              <section>
                <p className="caption mb-4">Journal</p>
                <ul className="space-y-3">
                  {essays.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/journal/${a.slug}`} className="font-display text-xl">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        )}
      </Container>
    </PageFrame>
  );
}
