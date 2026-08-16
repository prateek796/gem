import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { getSpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vedic gemstones",
  description: "The navaratna system — planetary gems as cultural tradition.",
};

const grahas = [
  { planet: "Surya (Sun)", gem: "ruby", name: "Manikya" },
  { planet: "Chandra (Moon)", gem: "pearl", name: "Moti" },
  { planet: "Mangala (Mars)", gem: "garnet", name: "Often coral; we show a related red" },
  { planet: "Budh (Mercury)", gem: "emerald", name: "Panna" },
  { planet: "Guru (Jupiter)", gem: "citrine", name: "Often yellow sapphire; citrine shown as a related hue" },
  { planet: "Shukra (Venus)", gem: "diamond", name: "Heera" },
  { planet: "Shani (Saturn)", gem: "sapphire", name: "Neelam" },
  { planet: "Rahu", gem: "garnet", name: "Hessonite is classical; related garnet listed" },
  { planet: "Ketu", gem: "tourmaline", name: "Cat’s-eye is classical; tourmaline as a related species" },
];

export default function VedicPage() {
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/astrology", label: "Meaning" },
            { label: "Vedic" },
          ]}
        />
        <h1 className="mt-10 font-display text-4xl sm:text-6xl">Navaratna</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-dark">
          Nine gems, nine grahas. A classical system with a long life in the subcontinent. Kalpa describes it. We do not prescribe it, and we do not sell medical or financial outcomes.
        </p>
        <ul className="mt-14 divide-y divide-ink/10">
          {grahas.map((row) => {
            const stone = getSpecies(row.gem);
            return (
              <li key={row.planet} className="grid gap-2 py-6 sm:grid-cols-12">
                <p className="caption sm:col-span-3">{row.planet}</p>
                <div className="sm:col-span-9">
                  {stone ? (
                    <Link href={`/gemstones/${stone.slug}`} className="font-display text-2xl">
                      {stone.name}
                    </Link>
                  ) : (
                    <p className="font-display text-2xl">{row.gem}</p>
                  )}
                  <p className="mt-1 text-sm text-stone-dark">{row.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </PageFrame>
  );
}
