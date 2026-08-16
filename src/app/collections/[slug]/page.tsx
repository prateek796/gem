import { ProductCard } from "@/components/commerce/product-card";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getAllProducts, getArchiveProducts, getSpecies } from "@/lib/catalog";
import type { BirthMonth, Product } from "@/lib/types";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const collections = [
  {
    slug: "the-archive",
    name: "The Archive",
    dek: "Specimens held for rarity, locality or an unusual kind of light.",
    pick: (all: Product[]) => getArchiveProducts().length ? getArchiveProducts() : all.filter((p) => p.featured),
  },
  {
    slug: "birthstones",
    name: "Birthstones",
    dek: "The modern calendar of stones — a convention, not a commandment.",
    pick: (all: Product[]) => all,
  },
  {
    slug: "navaratna",
    name: "Navaratna",
    dek: "Nine gems of a classical planetary system, presented as culture.",
    pick: (all: Product[]) =>
      all.filter((p) =>
        ["ruby", "pearl", "emerald", "diamond", "sapphire", "citrine", "garnet"].includes(
          p.gemstoneId,
        ),
      ),
  },
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const col = collections.find((item) => item.slug === slug);
  return col ? { title: col.name, description: col.dek } : {};
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const col = collections.find((item) => item.slug === slug);
  if (!col) notFound();
  const stones = col.pick(getAllProducts()).filter((p) => p.availability !== "sold");

  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/collections", label: "Collections" },
            { label: col.name },
          ]}
        />
        <h1 className="mt-10 font-display text-4xl sm:text-6xl">{col.name}</h1>
        <p className="mt-5 max-w-xl text-lg text-stone-dark">{col.dek}</p>
        {slug === "birthstones" ? <BirthGrid /> : null}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stones.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </PageFrame>
  );
}

function BirthGrid() {
  const months: { month: BirthMonth; label: string; gem: string }[] = [
    { month: "january", label: "January", gem: "garnet" },
    { month: "february", label: "February", gem: "amethyst" },
    { month: "march", label: "March", gem: "aquamarine" },
    { month: "april", label: "April", gem: "diamond" },
    { month: "may", label: "May", gem: "emerald" },
    { month: "june", label: "June", gem: "pearl" },
    { month: "july", label: "July", gem: "ruby" },
    { month: "august", label: "August", gem: "peridot" },
    { month: "september", label: "September", gem: "sapphire" },
    { month: "october", label: "October", gem: "opal" },
    { month: "november", label: "November", gem: "topaz" },
    { month: "december", label: "December", gem: "tanzanite" },
  ];

  return (
    <ul className="mt-12 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-4 lg:grid-cols-6">
      {months.map((item) => {
        const stone = getSpecies(item.gem);
        return (
          <li key={item.month} className="bg-ivory p-5">
            <p className="caption">{item.label}</p>
            {stone ? (
              <Link href={`/gemstones/${stone.slug}`} className="mt-2 block font-display text-xl">
                {stone.name}
              </Link>
            ) : (
              <p className="mt-2 font-display text-xl text-stone-dark">{item.gem}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

