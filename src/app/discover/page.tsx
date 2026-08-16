"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { GemPlate } from "@/components/editorial/gem-plate";
import { getAllSpecies, getProductsBySpecies } from "@/lib/catalog";
import { journal } from "@/content/journal";
import { formatPrice } from "@/lib/format";
import type { BirthMonth, Species, Zodiac } from "@/lib/types";
import Link from "next/link";
import { useMemo, useState } from "react";

type Answers = {
  intent: string;
  quality: string;
  colour: string;
  month: string;
  zodiac: string;
  budget: string;
};

const steps = [
  {
    key: "intent" as const,
    n: "01",
    title: "What brings you here?",
    dek: "There is no wrong door. Only a clearer one.",
    options: [
      { id: "meaning", label: "A stone with meaning" },
      { id: "beauty", label: "Something beautiful, first" },
      { id: "gift", label: "A gift that should feel chosen" },
      { id: "collection", label: "A specimen for a collection" },
    ],
  },
  {
    key: "quality" as const,
    n: "02",
    title: "What qualities resonate?",
    dek: "Read as poetry, not as a prescription.",
    options: [
      { id: "love", label: "Love" },
      { id: "confidence", label: "Presence" },
      { id: "prosperity", label: "Prosperity (as folklore)" },
      { id: "protection", label: "Protection (as folklore)" },
      { id: "calm", label: "Calm" },
      { id: "focus", label: "Focus" },
      { id: "creativity", label: "Creativity" },
      { id: "spirit", label: "Spiritual connection" },
    ],
  },
  {
    key: "colour" as const,
    n: "03",
    title: "Which colours attract you?",
    dek: "The eye usually knows before the mind does.",
    options: [
      { id: "red", label: "Red" },
      { id: "blue", label: "Blue" },
      { id: "green", label: "Green" },
      { id: "purple", label: "Violet" },
      { id: "yellow", label: "Gold" },
      { id: "white", label: "Light / colourless" },
    ],
  },
  {
    key: "month" as const,
    n: "04",
    title: "Birth month?",
    dek: "Optional. A calendar convention, widely loved.",
    options: [
      { id: "skip", label: "Skip" },
      { id: "january", label: "January" },
      { id: "february", label: "February" },
      { id: "march", label: "March" },
      { id: "april", label: "April" },
      { id: "may", label: "May" },
      { id: "june", label: "June" },
      { id: "july", label: "July" },
      { id: "august", label: "August" },
      { id: "september", label: "September" },
      { id: "october", label: "October" },
      { id: "november", label: "November" },
      { id: "december", label: "December" },
    ],
  },
  {
    key: "zodiac" as const,
    n: "05",
    title: "Zodiac sign?",
    dek: "Optional. Traditional association, not astronomy.",
    options: [
      { id: "skip", label: "Skip" },
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
    ],
  },
  {
    key: "budget" as const,
    n: "06",
    title: "A comfortable range?",
    dek: "We will not push past it.",
    options: [
      { id: "20", label: "Under ₹20,000" },
      { id: "80", label: "₹20,000 – 80,000" },
      { id: "250", label: "₹80,000 – 2,50,000" },
      { id: "250plus", label: "Above ₹2,50,000" },
      { id: "open", label: "Open" },
    ],
  },
];

const colourMap: Record<string, string[]> = {
  red: ["ruby", "garnet"],
  blue: ["sapphire", "tanzanite", "aquamarine"],
  green: ["emerald", "tourmaline", "garnet"],
  purple: ["amethyst", "tanzanite"],
  yellow: ["citrine", "topaz", "diamond"],
  white: ["diamond", "pearl", "moonstone", "opal"],
};

function scoreSpecies(stone: Species, answers: Answers): number {
  let score = 0;
  if (answers.colour && colourMap[answers.colour]?.includes(stone.id)) score += 5;
  if (answers.month && answers.month !== "skip") {
    if (stone.meaning.birthMonths.includes(answers.month as BirthMonth)) score += 4;
  }
  if (answers.zodiac && answers.zodiac !== "skip") {
    if (stone.meaning.zodiac.includes(answers.zodiac as Zodiac)) score += 3;
  }
  if (answers.quality === "love" && ["ruby", "diamond", "pearl", "rose"].includes(stone.id)) score += 2;
  if (answers.quality === "calm" && ["amethyst", "aquamarine", "moonstone"].includes(stone.id)) score += 2;
  if (answers.quality === "confidence" && ["ruby", "garnet", "diamond"].includes(stone.id)) score += 2;
  if (answers.quality === "focus" && ["sapphire", "emerald"].includes(stone.id)) score += 2;
  if (answers.quality === "creativity" && ["opal", "tourmaline", "citrine"].includes(stone.id)) score += 2;
  if (answers.quality === "spirit" && ["moonstone", "amethyst", "tanzanite"].includes(stone.id)) score += 2;
  if (answers.quality === "prosperity" && ["citrine", "emerald", "pearl"].includes(stone.id)) score += 2;
  if (answers.quality === "protection" && ["garnet", "tourmaline", "sapphire"].includes(stone.id)) score += 2;
  return score;
}

function budgetMax(id: string): number {
  if (id === "20") return 20000;
  if (id === "80") return 80000;
  if (id === "250") return 250000;
  return Infinity;
}

export default function DiscoverPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    intent: "",
    quality: "",
    colour: "",
    month: "",
    zodiac: "",
    budget: "",
  });
  const current = steps[step];
  const done = step >= steps.length;

  const profile = useMemo(() => {
    const ranked = [...getAllSpecies()]
      .map((stone) => ({ stone, score: scoreSpecies(stone, answers) }))
      .sort((a, b) => b.score - a.score);
    const primary = ranked[0]?.stone;
    const alts = ranked.slice(1, 3).map((r) => r.stone);
    const max = budgetMax(answers.budget);
    const products = primary
      ? getProductsBySpecies(primary.id).filter(
          (p) => p.availability === "available" && p.priceInr <= max,
        )
      : [];
    const essay = journal.find((j) => j.relatedSpecies.includes(primary?.id ?? ""));
    return { primary, alts, products, essay };
  }, [answers]);

  function choose(id: string) {
    if (!current) return;
    setAnswers((a) => ({ ...a, [current.key]: id }));
    setStep((s) => s + 1);
  }

  return (
    <PageFrame>
      <div className="bg-ink py-20 text-ivory lg:py-28">
        <Container>
          <p className="caption text-ivory/50">A private consultation</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight sm:text-6xl">
            Discover your stone.
          </h1>
          <p className="mt-6 max-w-lg text-ivory/65">
            Six questions. A profile, not a parlour trick. Traditional associations are offered as culture.
          </p>
        </Container>
      </div>

      <Container className="py-16 lg:py-20">
        {!done ? (
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between">
              <p className="caption">
                {current.n} / 06
              </p>
              {step > 0 ? (
                <button type="button" className="caption" onClick={() => setStep((s) => s - 1)}>
                  Back
                </button>
              ) : null}
            </div>
            <div className="mt-4 h-px bg-ink/10">
              <div
                className="h-px bg-champagne transition-[width] duration-500"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
            <h2 className="mt-10 font-display text-3xl sm:text-4xl">{current.title}</h2>
            <p className="mt-3 text-stone-dark">{current.dek}</p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {current.options.map((option) => (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => choose(option.id)}
                    className="w-full border border-ink/10 px-5 py-4 text-left transition-colors hover:border-ink/40 hover:bg-ivory-deep/40"
                  >
                    <span className="font-display text-xl">{option.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Results profile={profile} onReset={() => { setStep(0); setAnswers({ intent: "", quality: "", colour: "", month: "", zodiac: "", budget: "" }); }} />
        )}
      </Container>
    </PageFrame>
  );
}

type Profile = {
  primary?: Species;
  alts: Species[];
  products: ReturnType<typeof getProductsBySpecies>;
  essay?: (typeof journal)[number];
};

function Results({
  profile,
  onReset,
}: {
  profile: Profile;
  onReset: () => void;
}) {
  const { primary, alts, products, essay } = profile;

  if (!primary) return null;

  return (
    <div>
      <p className="caption">Your stone profile</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
        Based on your selections, {primary.name} may be worth exploring.
      </h2>
      <p className="mt-5 max-w-xl text-stone-dark">
        {primary.meaning.symbolism} We present this as traditional association — not as a proven outcome.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <GemPlate
          palette={primary.palette}
          cut={primary.defaultCut}
          name={`quiz-${primary.slug}`}
          size="lg"
          caption={primary.name}
        />
        <div>
          <p className="font-display text-2xl">Why it matches</p>
          <p className="mt-4 leading-relaxed text-stone-dark">{primary.excerpt}</p>
          <p className="mt-4 text-sm leading-relaxed text-stone-dark">{primary.meaning.cultural}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/gemstones/${primary.slug}`}>Explore {primary.name}</Button>
            <Button variant="ghost" onClick={onReset}>
              Begin again
            </Button>
          </div>
        </div>
      </div>
      {alts.length ? (
        <div className="mt-16">
          <p className="caption">Also consider</p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {alts.map((stone) => (
              <li key={stone.id}>
                <Link href={`/gemstones/${stone.slug}`} className="font-display text-2xl hover:text-ink-mid">
                  {stone.name}
                </Link>
                <p className="mt-2 text-sm text-stone-dark">{stone.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {products.length ? (
        <div className="mt-16">
          <p className="caption">Specimens in range</p>
          <ul className="mt-6 divide-y divide-ink/10">
            {products.slice(0, 3).map((p) => (
              <li key={p.id} className="flex items-center justify-between py-4">
                <Link href={`/gemstones/${primary.slug}/${p.slug}`} className="font-display text-xl">
                  {p.name}
                </Link>
                <span className="text-sm">{formatPrice(p.priceInr)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-12 max-w-lg text-sm text-stone-dark">
          Nothing in this budget is listed for {primary.name} just now. A consultation can look further.
        </p>
      )}
      {essay ? (
        <Link href={`/journal/${essay.slug}`} className="mt-12 block border border-ink/10 p-8 hover:bg-ivory-deep/30">
          <p className="caption">To read</p>
          <p className="mt-3 font-display text-2xl">{essay.title}</p>
          <p className="mt-2 text-sm text-stone-dark">{essay.dek}</p>
        </Link>
      ) : null}
    </div>
  );
}
