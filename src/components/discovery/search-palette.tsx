"use client";

import { Modal } from "@/components/ui/drawer";
import { getAllProducts, getAllSpecies } from "@/lib/catalog";
import { journal } from "@/content/journal";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export function SearchPalette() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (q.length < 1) return { products: getAllProducts().slice(0, 4), species: getAllSpecies().slice(0, 4), articles: journal.slice(0, 2) };
    return {
      products: getAllProducts().filter((p) =>
        `${p.name} ${p.specs.origin} ${p.specs.color} ${p.gemstoneId}`.toLowerCase().includes(q),
      ).slice(0, 6),
      species: getAllSpecies().filter((s) =>
        `${s.name} ${s.excerpt} ${s.colours.join(" ")}`.toLowerCase().includes(q),
      ).slice(0, 5),
      articles: journal.filter((a) =>
        `${a.title} ${a.dek} ${a.category}`.toLowerCase().includes(q),
      ).slice(0, 4),
    };
  }, [q]);

  return (
    <Modal open={searchOpen} onClose={() => setSearchOpen(false)} title="Search">
      <p className="caption mb-4">Search the house</p>
      <input
        autoFocus
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ruby, October, blue gemstone…"
        className="w-full border-b border-ink/20 bg-transparent py-3 font-display text-2xl outline-none placeholder:text-stone"
      />
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="caption mb-3">Specimens</p>
          <ul className="space-y-3">
            {results.products.map((product) => {
              const stone = getAllSpecies().find((s) => s.id === product.gemstoneId);
              if (!stone) return null;
              return (
                <li key={product.id}>
                  <Link
                    href={`/gemstones/${stone.slug}/${product.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex justify-between gap-4 text-sm hover:text-stone-dark"
                  >
                    <span>{product.name}</span>
                    <span className="text-stone-dark">{formatPrice(product.priceInr)}</span>
                  </Link>
                </li>
              );
            })}
            {results.products.length === 0 ? (
              <li className="text-sm text-stone-dark">No specimens match.</li>
            ) : null}
          </ul>
        </div>
        <div>
          <p className="caption mb-3">Library & journal</p>
          <ul className="space-y-3">
            {results.species.map((stone) => (
              <li key={stone.id}>
                <Link
                  href={`/gemstones/${stone.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="text-sm hover:text-stone-dark"
                >
                  {stone.name}
                </Link>
              </li>
            ))}
            {results.articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/journal/${article.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="text-sm hover:text-stone-dark"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
