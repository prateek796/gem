import { ProductCard } from "@/components/commerce/product-card";
import { GemPlate } from "@/components/editorial/gem-plate";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { journal } from "@/content/journal";
import {
  getAllSpecies,
  getFeaturedProducts,
  getSpecies,
  getStoneOfKalpa,
  treatmentLabel,
} from "@/lib/catalog";
import { formatCarat, formatPrice } from "@/lib/format";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedProducts().filter((p) => p.availability === "available");
  const ofKalpa = getStoneOfKalpa();
  const ofKalpaSpecies = ofKalpa ? getSpecies(ofKalpa.gemstoneId) : undefined;
  const species = getAllSpecies();
  const essays = journal.slice(0, 3);

  return (
    <main>
      <Hero />

      <section className="border-y border-ink/10 py-6">
        <Container>
          <ul className="flex gap-10 overflow-x-auto text-[0.68rem] uppercase tracking-[0.18em] text-stone-dark">
            {species.map((stone) => (
              <li key={stone.id} className="shrink-0">
                <Link href={`/gemstones/${stone.slug}`} className="hover:text-ink">
                  {stone.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="The vitrine"
              title="Selected for colour, origin and a particular kind of presence."
              kicker="These are not repeating SKUs. Each specimen is itself. Once placed, it does not return in identical form."
            />
            <Button href="/gemstones" variant="ghost">
              Enter the Archive
            </Button>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 5).map((product, i) => (
              <ProductCard key={product.id} product={product} featured={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {ofKalpa && ofKalpaSpecies ? (
        <section className="bg-ink py-20 text-ivory lg:py-28">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <GemPlate
                palette={ofKalpaSpecies.palette}
                cut={ofKalpa.specs.cut}
                name={`${ofKalpa.slug}-home`}
                size="lg"
                caption="Stone of the Kalpa"
                className="min-h-[28rem]"
              />
              <div>
                <p className="caption text-ivory/50">Stone of the Kalpa</p>
                <h2 className="mt-4 font-display text-4xl font-normal leading-tight sm:text-5xl">
                  {ofKalpa.name}
                </h2>
                <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ivory/70">
                  {ofKalpa.story.visualCharacter}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <Spec k="Weight" v={formatCarat(ofKalpa.specs.weightCarat)} />
                  <Spec k="Origin" v={ofKalpa.specs.origin} />
                  <Spec k="Treatment" v={treatmentLabel(ofKalpa.specs.treatment)} />
                  <Spec k="Price" v={formatPrice(ofKalpa.priceInr)} />
                </dl>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href={`/gemstones/${ofKalpaSpecies.slug}/${ofKalpa.slug}`}
                    variant="invert"
                  >
                    View this specimen
                  </Button>
                  <Button href="/journal/burmese-ruby" variant="goldline">
                    Read the Mogok essay
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Discover"
                title="The stone is not chosen. It is recognised."
                kicker="A private consultation in six questions — intention, colour, birth, budget. Astrology is treated as culture, not as a diagnosis."
              />
              <div className="mt-8">
                <Button href="/discover">Discover Your Stone</Button>
              </div>
            </div>
            <ol className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:col-span-7">
              {[
                { n: "01", t: "Intention", d: "Love, composure, presence — as meaning, not medicine." },
                { n: "02", t: "Colour", d: "What the eye already returns to." },
                { n: "03", t: "Time", d: "Birth month and sign, if they matter to you." },
                { n: "04", t: "Means", d: "A quiet conversation about budget." },
              ].map((step) => (
                <li key={step.n} className="bg-ivory p-6 lg:p-8">
                  <p className="caption">{step.n}</p>
                  <h3 className="mt-4 font-display text-2xl">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-dark">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-ivory-deep/30 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why trust the house"
            title="Authenticity is a practice, not a badge."
            kicker="We do not invent certificates, reviews or scarcity. What we can show, we show. What we cannot, we say."
          />
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Origin, named",
                d: "Country and, where we know it, the tract. We will not borrow Kashmir or Mogok for atmosphere.",
              },
              {
                t: "Treatment, said",
                d: "Heat, oil, none disclosed. Laboratory-grown is labelled as such, and priced as such.",
              },
              {
                t: "One of one",
                d: "Most stones here are unique specimens. ‘Only one’ is inventory, not a countdown clock.",
              },
              {
                t: "Paper, when we have it",
                d: "A certificate appears only if a file exists. Otherwise: documentation on request.",
              },
            ].map((item) => (
              <li key={item.t}>
                <div className="rule-gold mb-5" />
                <h3 className="font-display text-xl">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-dark">{item.d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The Journal"
              title="A house that can explain itself."
            />
            <Button href="/journal" variant="quiet">
              All essays →
            </Button>
          </div>
          <div className="mt-12 grid gap-px bg-ink/10 lg:grid-cols-3">
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/journal/${essay.slug}`}
                className="bg-ivory p-8 transition-colors hover:bg-ivory-deep/50 lg:p-10"
              >
                <p className="caption">{essay.category}</p>
                <h3 className="mt-4 font-display text-2xl leading-snug">{essay.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-dark">{essay.dek}</p>
                <p className="caption mt-8">{essay.readMinutes} min</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-ivory lg:py-24">
        <Container>
          <SectionHeading
            invert
            eyebrow="Journey of a gem"
            title="Mine. Cut. Described. Placed."
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "I", t: "Earth", d: "Crystal in host rock, or nacre in a mollusc. Time measured in ages, not seasons." },
              { n: "II", t: "Hand", d: "Cutting that serves colour. Proportion over fashion." },
              { n: "III", t: "Word", d: "Weight, origin, treatment, a sentence of character. Nothing invented." },
              { n: "IV", t: "Yours", d: "Packed as an object of meaning. Tracked. Documented on request." },
            ].map((step) => (
              <li key={step.n}>
                <p className="font-display text-4xl text-champagne/80">{step.n}</p>
                <h3 className="mt-4 font-display text-2xl">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">{step.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="caption">From our hands to yours</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              The unboxing is part of the stone.
            </h2>
            <p className="prose-kalpa mt-6 max-w-md">
              Acid-free tissue, a quiet box, a card with the specimen’s facts and the meaning cultures have given it. No plastic glitter. No false wax seals.
            </p>
            <div className="mt-8">
              <Button href="/packaging" variant="ghost">
                The presentation
              </Button>
            </div>
          </div>
          <div className="border border-ink/10 bg-ivory-deep/40 p-10 lg:p-14">
            <p className="font-display text-2xl italic text-ink-mid">
              “I didn’t just find a gemstone. I found something that feels like mine.”
            </p>
            <p className="caption mt-8">The feeling we design for — not a customer quotation we invented.</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-20 text-center lg:py-24">
        <Container>
          <p className="caption">Private client</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Speak with a gemstone expert.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-stone-dark">
            Origin questions, a shortlist, a stone that should not be chosen from a grid. We answer as a house, not a chatbot.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/consult">Request a consultation</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Hero() {
  const ruby = getSpecies("ruby")!;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        <GemPlate
          palette={ruby.palette}
          cut="oval"
          name="hero-ruby"
          size="hero"
          glow
          className="h-full min-h-[100svh] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/80" />
      </div>
      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 lg:pb-24">
        <p className="caption animate-fade text-ivory/55">A private gemstone house</p>
        <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] font-light leading-[1.08] tracking-tight animate-rise sm:text-6xl lg:text-[5.2rem]">
          Some stones take an age to form.
          <span className="mt-2 block italic text-ivory/80">
            The right one takes a moment to recognise.
          </span>
        </h1>
        <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ivory/65 delay-2 animate-fade">
          Beauty, rarity, origin — and the meanings cultures have placed upon them. Not a catalogue. A cabinet.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 delay-3 animate-fade">
          <Button href="/discover" variant="invert">
            Discover Your Stone
          </Button>
          <Button href="/gemstones" variant="goldline">
            Enter the Archive
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="caption text-ivory/40">{k}</dt>
      <dd className="mt-1 text-ivory/90">{v}</dd>
    </div>
  );
}
