import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getAllSpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import type { Zodiac } from "@/lib/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zodiac gemstones",
  description: "Traditional zodiac associations for gemstones, presented as culture.",
};

const signs: { id: Zodiac; label: string }[] = [
  { id: "aries", label: "Aries" },
  { id: "taurus", label: "Taurus" },
  { id: "gemini", label: "Gemini" },
  { id: "cancer", label: "Cancer" },
  { id: "leo", label: "Leo" },
  { id: "virgo", label: "Virgo" },
  { id: "libra", label: "Libra" },
  { id: "scorpio", label: "Scorpio" },
  { id: "sagittarius", label: "Sagittarius" },
  { id: "capricorn", label: "Capricorn" },
  { id: "aquarius", label: "Aquarius" },
  { id: "pisces", label: "Pisces" },
];

export default function ZodiacPage() {
  const stones = getAllSpecies();
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/astrology", label: "Meaning" },
            { label: "Zodiac" },
          ]}
        />
        <h1 className="mt-10 font-display text-4xl sm:text-6xl">Zodiac gemstones</h1>
        <p className="mt-5 max-w-xl text-lg text-stone-dark">
          Traditionally associated — not astronomically assigned.
        </p>
        <ul className="mt-14 space-y-10">
          {signs.map((sign) => {
            const matches = stones.filter((s) => s.meaning.zodiac.includes(sign.id));
            return (
              <li key={sign.id} className="border-t border-ink/10 pt-6">
                <h2 className="font-display text-3xl">{sign.label}</h2>
                <p className="mt-3 text-sm">
                  {matches.map((s, i) => (
                    <span key={s.id}>
                      {i > 0 ? " · " : ""}
                      <Link href={`/gemstones/${s.slug}`} className="hover:text-stone-dark">
                        {s.name}
                      </Link>
                    </span>
                  ))}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </PageFrame>
  );
}
