import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { getAllSpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meaning",
  description:
    "Zodiac, birthstones and Vedic associations — presented as traditional belief and cultural history.",
};

export default function AstrologyPage() {
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Meaning" }]} />
        <h1 className="mt-10 max-w-3xl font-display text-4xl sm:text-6xl">
          The meaning behind the stone.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-dark">
          Cultures have given colour a job for a very long time. We keep the language of tradition — “associated with”, “in Vedic astrology”, “historically believed” — and we refuse the language of the clinic and the trading floor.
        </p>
        <ul className="mt-16 grid gap-px bg-ink/10 lg:grid-cols-3">
          {[
            { href: "/astrology/zodiac-gemstones", t: "Zodiac", d: "Stones traditionally associated with each sign." },
            { href: "/astrology/birthstones", t: "Birth months", d: "A popular calendar, told without costume." },
            { href: "/astrology/vedic", t: "Vedic", d: "Navaratna — nine gems, nine grahas." },
          ].map((item) => (
            <li key={item.href} className="bg-ivory p-10">
              <Link href={item.href}>
                <h2 className="font-display text-3xl">{item.t}</h2>
                <p className="mt-3 text-sm text-stone-dark">{item.d}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-20">
          <p className="caption">Species</p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {getAllSpecies().map((stone) => (
              <li key={stone.id} className="border-t border-ink/10 pt-4">
                <Link href={`/gemstones/${stone.slug}`} className="font-display text-2xl">
                  {stone.name}
                </Link>
                <p className="mt-2 text-sm text-stone-dark">{stone.meaning.symbolism}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <Button href="/discover" variant="ghost">
            Find a stone that resonates
          </Button>
        </div>
      </Container>
    </PageFrame>
  );
}
