import { GemPlate } from "@/components/editorial/gem-plate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { getAllSpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gemstone library",
  description: "An encyclopedia of species — formation, history, and traditional meaning.",
};

export default function LibraryPage() {
  const stones = getAllSpecies();
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Library" }]} />
        <h1 className="mt-10 font-display text-4xl sm:text-6xl">The gemstone library</h1>
        <p className="mt-5 max-w-xl text-lg text-stone-dark">
          Species, not SKUs. A museum wall you can walk.
        </p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stones.map((stone) => (
            <li key={stone.id}>
              <Link href={`/gemstones/${stone.slug}`} className="group block">
                <GemPlate
                  palette={stone.palette}
                  cut={stone.defaultCut}
                  name={`lib-${stone.slug}`}
                  size="md"
                  caption={stone.family}
                />
                <h2 className="mt-4 font-display text-2xl group-hover:text-ink-mid">{stone.name}</h2>
                <p className="mt-2 text-sm text-stone-dark">{stone.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </PageFrame>
  );
}
