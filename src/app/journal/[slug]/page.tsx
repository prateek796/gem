import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { journal } from "@/content/journal";
import { getSpecies } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const bodies: Record<string, string[]> = {
  "how-to-identify-a-real-gemstone": [
    "The short answer is unsatisfying, and therefore honest: most of what the internet calls ‘tests’ are theatre. Scratching glass does not prove diamond. A cold stone is not sapphire. Ultraviolet lights in a shop doorway are not laboratories.",
    "What you can see, with care: whether a stone is glassily too clean for its species; whether an emerald’s jardin looks printed; whether a ruby’s colour sits in the surface like a coat. What you cannot see: origin, heating, filling. Those belong on a report, or in a sentence from a dealer who will still be there next year.",
    "Kalpa’s practice is description. Weight, cut, origin as known, treatment as known. If we do not know, we do not decorate the gap. A genuine stone is not a stone with a story attached. It is a stone whose facts survive a second look.",
  ],
  "natural-versus-synthetic-gemstones": [
    "Laboratory-grown corundum is corundum. The chemistry is not a costume. What it lacks is geology: the accident of chromium in marble, the billions of years, the particular silk. We sell both only when labelled, and we price the difference.",
    "The ethical argument is not automatic. A laboratory still uses energy. A mine still uses people. Disclosure is the first duty; romance is optional.",
  ],
  "what-gemstone-certification-means": [
    "A laboratory report is a description issued by an institution with a method. It is not a blessing, a warranty, or a personality. GIA, GRS, Gübelin, SSEF — each has a voice. None of them will make a dull stone interesting.",
    "We attach a file when we have one. We do not generate a crest to sit under a product image. If a client needs a report before placing a stone, we say so in daylight.",
  ],
  "kashmir-sapphire": [
    "Kashmir named a colour so completely that the trade still tries to borrow it. Velvet — silk that softens saturation without killing it — is an optical fact. The Himalayan locality is a geographic one. We will not confuse them on a label.",
    "The mines of the late nineteenth century were brief. Stones from that chapter are now a closed set. Everything else is a rhyme. Some rhymes are beautiful. They still have their own passports.",
  ],
  "vedic-astrology-gemstones": [
    "Navaratna maps nine gems to nine grahas. Ruby to the Sun, pearl to the Moon, emerald to Mercury, diamond to Venus, sapphire to Saturn, and so on. It is a dense cultural system with a long life in the subcontinent.",
    "Kalpa will describe it. We will not prescribe it. No stone here is sold as a medical device, a financial instrument, or a scientifically proven influence on fate. If the system matters to you, we can speak in its vocabulary — as tradition.",
  ],
  "understanding-carat": [
    "A carat is 0.2 grams. It is not millimetres, and it is not beauty. A well-cut 1.5-carat ruby can outwear a lifeless 3. Deep pavilions hide weight. Spread crowns look larger and sometimes worse.",
    "We print the carat because the trade runs on it. We select as if it were the least interesting number on the page.",
  ],
  "burmese-ruby": [
    "Mogok’s marble hosts corundum coloured by chromium. The same element fluoresces: a red that appears to keep its own lamp. That is geology, not poetry — though poetry has followed it for centuries.",
    "Unheated Burmese ruby of fine colour is scarce in a way that does not need a countdown clock. We name the tract when we have reason to. We do not sprinkle ‘Burma’ on Mozambique for atmosphere.",
  ],
  "gemstone-treatments-explained": [
    "Heat on sapphire and ruby is old and, when disclosed, ordinary. Oil in emerald is customary; fracture filling with heavy glass is a different, more serious sentence. Dye, coating, lead-glass in ruby: we would rather not have the conversation, because we would rather not have the stone.",
    "The standard is speech. If a treatment is present, it is named. If we cannot see it, we do not swear it absent. ‘None disclosed’ is not ‘none exist’.",
  ],
};

export function generateStaticParams() {
  return journal.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = journal.find((item) => item.slug === slug);
  return essay ? { title: essay.seo.title, description: essay.seo.description } : {};
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const essay = journal.find((item) => item.slug === slug);
  if (!essay) notFound();
  const paras = bodies[essay.slug] ?? [essay.dek];

  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/journal", label: "Journal" },
            { label: essay.title },
          ]}
        />
        <p className="caption mt-10">{essay.category} · {essay.readMinutes} min</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          {essay.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl italic text-stone-dark">{essay.dek}</p>
        <article className="prose-kalpa mt-12 max-w-2xl">
          {paras.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </article>
        {essay.relatedSpecies.length ? (
          <div className="mt-16 border-t border-ink/10 pt-8">
            <p className="caption">Related species</p>
            <ul className="mt-4 flex flex-wrap gap-4">
              {essay.relatedSpecies.map((id) => {
                const stone = getSpecies(id);
                if (!stone) return null;
                return (
                  <li key={id}>
                    <Link href={`/gemstones/${stone.slug}`} className="font-display text-xl">
                      {stone.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </Container>
    </PageFrame>
  );
}
