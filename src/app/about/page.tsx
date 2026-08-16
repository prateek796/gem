import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The House",
  description:
    "Kalpa is a private gemstone house — named for geological time, practised with restraint.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <div className="bg-ink py-24 text-ivory lg:py-32">
        <Container>
          <p className="caption text-ivory/50">The House</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.12] sm:text-6xl">
            Named for an aeon.
            <span className="mt-2 block italic text-ivory/75">Practised in a lifetime.</span>
          </h1>
        </Container>
      </div>
      <Container className="grid gap-16 py-16 lg:grid-cols-12 lg:py-24">
        <div className="prose-kalpa lg:col-span-7">
          <p>
            A kalpa is a measure of time so long it is almost a joke against a human appointment. Stones are made on that scale. We are not. The name is a reminder: what you are looking at has already lived a longer life than you will.
          </p>
          <p>
            Kalpa is a private house, not a mall jewellery counter. We select specimens — often one of one — for colour, cutting, origin, and a kind of presence that does not require a logo. We tell you what we know. We do not invent what we do not.
          </p>
          <h2 className="mt-12 font-display text-3xl text-ink">Sourcing</h2>
          <p>
            We buy from cutters, dealers and, where possible, from chains we can describe. Locality is named when we have it; when we have only a country, we say so. We will not print “Kashmir” on a Madagascar stone because the velvet is flattering.
          </p>
          <h2 className="mt-12 font-display text-3xl text-ink">Standards</h2>
          <p>
            Treatment is disclosed. Laboratory-grown material is labelled and priced as such. Certificates appear when a file exists. Reviews appear when a client has placed a stone. Scarcity is inventory. Astrology is culture.
          </p>
          <h2 className="mt-12 font-display text-3xl text-ink">People</h2>
          <p>
            A small atelier. Gemmological literacy is the requirement; theatricality is not. If you write, a person answers.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="border border-ink/10 p-8 lg:sticky lg:top-28">
            <p className="caption">Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              That someone might leave not having shopped, but having recognised.
            </p>
            <Button href="/consult" className="mt-8" variant="ghost">
              Speak with the house
            </Button>
          </div>
        </aside>
      </Container>
    </PageFrame>
  );
}

