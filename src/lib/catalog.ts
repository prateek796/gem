import { products } from "@/content/products";
import { species, speciesById, speciesBySlug } from "@/content/species";
import type { Product, Species } from "@/lib/types";

export function getAllSpecies(): Species[] {
  return species;
}

export function getSpecies(slugOrId: string): Species | undefined {
  return speciesBySlug[slugOrId] ?? speciesById[slugOrId];
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((item) => item.id === id);
}

export function getProductsBySpecies(gemstoneId: string): Product[] {
  return products.filter((item) => item.gemstoneId === gemstoneId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((item) => item.featured);
}

export function getArchiveProducts(): Product[] {
  return products.filter((item) => item.archive);
}

export function getStoneOfKalpa(): Product | undefined {
  return products.find((item) => item.stoneOfKalpa);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const same = products.filter(
    (item) =>
      item.id !== product.id &&
      item.availability !== "sold" &&
      item.gemstoneId === product.gemstoneId,
  );
  const band = products.filter((item) => {
    if (item.id === product.id || item.availability === "sold") return false;
    const ratio = item.priceInr / product.priceInr;
    return ratio > 0.45 && ratio < 2.2;
  });
  const speciesMeta = getSpecies(product.gemstoneId);
  const relatedSpecies = new Set(speciesMeta?.relatedSpecies ?? []);
  const family = products.filter(
    (item) =>
      item.id !== product.id &&
      item.availability !== "sold" &&
      relatedSpecies.has(item.gemstoneId),
  );

  const seen = new Set<string>();
  const out: Product[] = [];
  for (const item of [...same, ...family, ...band]) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    out.push(item);
    if (out.length >= limit) break;
  }
  return out;
}

export function treatmentLabel(value: Product["specs"]["treatment"]): string {
  switch (value) {
    case "none":
      return "None disclosed";
    case "heat":
      return "Heat";
    case "oil":
      return "Oil";
    case "other":
      return "Other";
    default:
      return "Unknown";
  }
}

export function originTypeLabel(value: Product["specs"]["originType"]): string {
  return value === "lab-grown" ? "Laboratory-grown" : "Natural";
}

export function availabilityLabel(value: Product["availability"]): string {
  switch (value) {
    case "available":
      return "Available";
    case "reserved":
      return "Reserved";
    case "sold":
      return "Placed";
  }
}
