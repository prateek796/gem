import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import { journal } from "@/content/journal";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Essays on gemmology, origin, and the cultural life of stones.",
};

const cats = ["learn", "stories", "astrology"] as const;

export default function JournalIndexPage() {
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Journal" }]} />
        <h1 className="mt-10 font-display text-4xl sm:text-6xl">The Journal</h1>
        <p className="mt-5 max-w-xl text-lg text-stone-dark">
          A house that can explain itself. Learn, stories, meaning — without costume-jewellery science.
        </p>
        {cats.map((cat) => {
          const items = journal.filter((j) => j.category === cat);
          return (
            <section key={cat} className="mt-16">
              <p className="caption">{cat}</p>
              <ul className="mt-6 divide-y divide-ink/10">
                {items.map((essay) => (
                  <li key={essay.slug} className="py-6">
                    <Link href={`/journal/${essay.slug}`} className="group grid gap-2 sm:grid-cols-12">
                      <h2 className="font-display text-2xl group-hover:text-ink-mid sm:col-span-7">
                        {essay.title}
                      </h2>
                      <p className="text-sm text-stone-dark sm:col-span-5">{essay.dek}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </PageFrame>
  );
}
