import { getAllProducts, getAllSpecies } from "@/lib/catalog";
import { journal } from "@/content/journal";
import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = [
    "",
    "/gemstones",
    "/collections",
    "/collections/the-archive",
    "/collections/birthstones",
    "/collections/navaratna",
    "/astrology",
    "/astrology/zodiac-gemstones",
    "/astrology/vedic",
    "/journal",
    "/library",
    "/discover",
    "/compare",
    "/consult",
    "/about",
    "/packaging",
    "/care",
    "/faq",
    "/shipping",
    "/returns",
    "/privacy",
    "/terms",
    "/search",
  ];

  const species = getAllSpecies().map((s) => `/gemstones/${s.slug}`);
  const products = getAllProducts().map((p) => {
    const s = getAllSpecies().find((x) => x.id === p.gemstoneId);
    return s ? `/gemstones/${s.slug}/${p.slug}` : "";
  });
  const essays = journal.map((j) => `/journal/${j.slug}`);

  return [...staticPaths, ...species, ...products, ...essays]
    .filter(Boolean)
    .map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.6,
    }));
}
