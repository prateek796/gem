import { ProductActions } from "@/components/commerce/product-actions";
import { ProductCard } from "@/components/commerce/product-card";
import { GemPlate } from "@/components/editorial/gem-plate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageFrame } from "@/components/ui/page-frame";
import {
  availabilityLabel,
  getAllProducts,
  getProduct,
  getRelatedProducts,
  getSpecies,
  originTypeLabel,
  treatmentLabel,
} from "@/lib/catalog";
import { formatCarat, formatDimensions, formatPrice } from "@/lib/format";
import { site } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ species: string; slug: string }> };

export function generateStaticParams() {
  return getAllProducts()
    .map((product) => {
      const stone = getSpecies(product.gemstoneId);
      return stone ? { species: stone.slug, slug: product.slug } : null;
    })
    .filter((item) => item !== null);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.seo.title, description: product.seo.description };
}

export default async function ProductPage({ params }: Props) {
  const { species: speciesSlug, slug } = await params;
  const product = getProduct(slug);
  const stone = product ? getSpecies(product.gemstoneId) : undefined;
  if (!product || !stone || stone.slug !== speciesSlug) notFound();

  const related = getRelatedProducts(product);
  const unique = product.quantity === 1 && product.availability === "available";

  const specs = [
    ["Weight", formatCarat(product.specs.weightCarat)],
    ["Dimensions", formatDimensions(product.specs.dimensionsMm)],
    ["Colour", product.specs.color],
    ["Clarity", product.specs.clarity],
    ["Cut", product.specs.cut],
    ["Origin", product.specs.origin],
    ["Treatment", treatmentLabel(product.specs.treatment)],
    ["Nature", originTypeLabel(product.specs.originType)],
    ["Certification", product.specs.certification.file ? product.specs.certification.lab : "On request"],
    ["SKU", product.sku],
  ];

  return (
    <PageFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            sku: product.sku,
            description: product.seo.description,
            brand: { "@type": "Brand", name: site.name },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: product.priceInr,
              availability:
                product.availability === "available"
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              url: `${site.url}/gemstones/${stone.slug}/${product.slug}`,
            },
          }),
        }}
      />
      <Container className="py-10 lg:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/gemstones", label: "Archive" },
            { href: `/gemstones/${stone.slug}`, label: stone.name },
            { label: product.name },
          ]}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <GemPlate
              palette={stone.palette}
              cut={product.specs.cut}
              name={`${product.slug}-pdp`}
              size="lg"
              className="min-h-[32rem] lg:min-h-[38rem]"
              caption={`${stone.name} study · replace with photography`}
            />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {(["face", "pavilion", "profile"] as const).map((angle) => (
                <GemPlate
                  key={angle}
                  palette={stone.palette}
                  cut={product.specs.cut}
                  name={`${product.slug}-${angle}`}
                  size="sm"
                  glow={false}
                  caption={angle}
                  className="h-28 sm:h-36"
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="caption">{stone.name}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-xl tracking-wide">{formatPrice(product.priceInr)}</p>
            <p className="mt-3 text-sm text-stone-dark">
              {availabilityLabel(product.availability)}
              {unique ? " · Only one available" : ""}
              {product.specs.originType === "lab-grown" ? " · Laboratory-grown" : " · Natural"}
            </p>
            {unique ? (
              <p className="mt-6 text-sm leading-relaxed text-stone-dark">
                Natural stones vary. Once this specimen is gone, an identical one may never appear again.
              </p>
            ) : null}
            <div className="mt-8">
              <ProductActions product={product} />
            </div>
            <ul className="mt-10 space-y-2 text-sm text-stone-dark">
              <li>Secure checkout</li>
              <li>Carefully packed, tracked delivery</li>
              <li>
                {product.specs.certification.file
                  ? "Laboratory report included"
                  : "Documentation available on request"}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <section className="border-y border-ink/10 bg-ivory-deep/30">
        <Container className="grid gap-16 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="caption">The stone</p>
            <h2 className="mt-3 font-display text-3xl">A dealer’s dossier</h2>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:col-span-7">
            {specs.map(([k, v]) => (
              <div key={k} className="border-t border-ink/10 pt-4">
                <dt className="caption">{k}</dt>
                <dd className="mt-2 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="grid gap-16 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="caption">Why this stone is special</p>
          <h2 className="mt-3 font-display text-3xl">The character</h2>
        </div>
        <div className="prose-kalpa lg:col-span-7">
          <p>{product.story.visualCharacter}</p>
          <p>{product.story.formation}</p>
          <p>{product.story.rarity}</p>
          <p>{product.story.origin}</p>
          <p>{product.story.historical}</p>
        </div>
      </Container>

      <section className="bg-ink py-16 text-ivory lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="caption text-ivory/50">Its traditional meaning</p>
            <h2 className="mt-3 font-display text-3xl">Cultures have named this colour for a long time.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-ivory/90">
              {product.meaning.symbolism}
            </p>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ivory/65">
              {product.meaning.cultural}
            </p>
            <p className="caption mt-8 text-ivory/45">
              {[
                product.meaning.planet,
                ...product.meaning.zodiac,
                ...product.meaning.birthMonths,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <p className="mt-6 max-w-lg text-sm text-ivory/45">
              Symbolism is presented as traditional belief and cultural history — not as scientific, medical or financial fact.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="border border-ink/10 p-8 lg:p-10">
            <p className="caption">Certificate</p>
            <h2 className="mt-3 font-display text-2xl">
              {product.specs.certification.file ? "Laboratory report" : "Documentation on request"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-dark">
              {product.specs.certification.file
                ? "Open the report attached to this specimen. We do not generate decorative certificates."
                : "No scan is attached to this listing. A laboratory report, where it exists, can be requested before reservation. We will not invent a number or a logo."}
            </p>
          </div>
          <div className="border border-ink/10 p-8 lg:p-10">
            <p className="caption">Client notes</p>
            <EmptyState
              eyebrow="Verified purchase"
              title="Notes appear after a stone is placed"
              body="We do not publish decorative reviews. When a client writes, their name, the specimen and the date will sit here."
            />
          </div>
        </div>
      </Container>

      {related.length ? (
        <section className="border-t border-ink/10 py-16 lg:py-24">
          <Container>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl">You may also recognise</h2>
              <Button href={`/gemstones/${stone.slug}`} variant="quiet">
                More {stone.name.toLowerCase()} →
              </Button>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-ivory/95 p-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-lg leading-tight">{product.name}</p>
            <p className="text-sm">{formatPrice(product.priceInr)}</p>
          </div>
          <Link
            href="#content"
            className="bg-ink px-5 py-3 text-[0.68rem] uppercase tracking-[0.16em] text-ivory"
          >
            {product.availability === "available" ? "Add to tray" : "Enquire"}
          </Link>
        </div>
      </div>
    </PageFrame>
  );
}
