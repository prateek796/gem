import { GemPlate } from "@/components/editorial/gem-plate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { getProductById, getSpecies, treatmentLabel } from "@/lib/catalog";
import { formatCarat } from "@/lib/format";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function OrderPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id) ?? getProductById(id.replace(/^ord-/, ""));
  const stone = product ? getSpecies(product.gemstoneId) : undefined;
  if (!product || !stone) notFound();

  return (
    <PageFrame>
      <div className="bg-ink py-20 text-ivory">
        <Container>
          <p className="caption text-ivory/50">Your stone journey</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl">{product.name}</h1>
          <p className="mt-4 text-ivory/60">A specimen placed with the house.</p>
        </Container>
      </div>
      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <GemPlate
          palette={stone.palette}
          cut={product.specs.cut}
          name={`order-${product.slug}`}
          size="lg"
        />
        <div>
          <p className="caption">Status</p>
          <p className="mt-2 font-display text-2xl">Reserved with the atelier</p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="caption">Weight</dt>
              <dd className="mt-1">{formatCarat(product.specs.weightCarat)}</dd>
            </div>
            <div>
              <dt className="caption">Treatment</dt>
              <dd className="mt-1">{treatmentLabel(product.specs.treatment)}</dd>
            </div>
            <div>
              <dt className="caption">Meaning</dt>
              <dd className="mt-1 leading-relaxed text-stone-dark">{product.meaning.symbolism}</dd>
            </div>
          </dl>
          <p className="mt-8 text-sm leading-relaxed text-stone-dark">
            Care: avoid ultrasonics if the species is emerald, opal, pearl or tanzanite. A card in the box repeats this.
          </p>
          <div className="mt-8">
            <Button href="/care" variant="ghost">
              Care notes
            </Button>
          </div>
        </div>
      </Container>
    </PageFrame>
  );
}
