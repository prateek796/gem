import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections",
  description: "Birthstones, navaratna, and the archive of rarer specimens.",
};

const items = [
  {
    href: "/collections/the-archive",
    name: "The Archive",
    dek: "Stones held for rarity and a particular light.",
  },
  {
    href: "/collections/birthstones",
    name: "Birthstones",
    dek: "Twelve months. A convention with a long popular life.",
  },
  {
    href: "/collections/navaratna",
    name: "Navaratna",
    dek: "Nine gems of a planetary system — as culture, not prescription.",
  },
];

export default function CollectionsPage() {
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Collections" }]} />
        <h1 className="mt-10 font-display text-4xl sm:text-6xl">Collections</h1>
        <p className="mt-5 max-w-xl text-lg text-stone-dark">
          Ways into the cabinet — by calendar, by classical system, or by rarity alone.
        </p>
        <ul className="mt-16 grid gap-px bg-ink/10 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href} className="bg-ivory">
              <Link href={item.href} className="block p-10 transition-colors hover:bg-ivory-deep/40">
                <h2 className="font-display text-3xl">{item.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-dark">{item.dek}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </PageFrame>
  );
}
