export type Availability = "available" | "reserved" | "sold";
export type OriginType = "natural" | "lab-grown";
export type Treatment = "none" | "heat" | "oil" | "other" | "unknown";
export type CertificationLab =
  | "GIA"
  | "IGI"
  | "GRS"
  | "SSEF"
  | "Gübelin"
  | "none";

export type Cut =
  | "round"
  | "oval"
  | "cushion"
  | "emerald"
  | "pear"
  | "cabochon"
  | "marquise"
  | "princess";

export type Zodiac =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type BirthMonth =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

export type GemPalette = {
  deep: string;
  mid: string;
  light: string;
  spark: string;
};

export type Species = {
  id: string;
  name: string;
  slug: string;
  family: string;
  hardness: string;
  rarity: string;
  typicalOrigins: string[];
  colours: string[];
  palette: GemPalette;
  defaultCut: Cut;
  excerpt: string;
  formation: string;
  history: string;
  meaning: {
    zodiac: Zodiac[];
    birthMonths: BirthMonth[];
    planet?: string;
    symbolism: string;
    cultural: string;
  };
  relatedSpecies: string[];
  seo: { title: string; description: string };
};

export type Product = {
  id: string;
  sku: string;
  slug: string;
  name: string;
  gemstoneId: string;
  priceInr: number;
  availability: Availability;
  quantity: number;
  featured?: boolean;
  stoneOfKalpa?: boolean;
  archive?: boolean;
  images: string[];
  specs: {
    weightCarat: number;
    dimensionsMm: { l: number; w: number; d: number };
    color: string;
    clarity: string;
    cut: Cut;
    origin: string;
    treatment: Treatment;
    originType: OriginType;
    certification: {
      lab: CertificationLab;
      number?: string;
      file?: string;
    };
  };
  story: {
    visualCharacter: string;
    formation: string;
    rarity: string;
    origin: string;
    historical: string;
  };
  meaning: {
    zodiac: Zodiac[];
    birthMonths: BirthMonth[];
    planet?: string;
    symbolism: string;
    cultural: string;
  };
  seo: { title: string; description: string };
};

export type JournalArticle = {
  slug: string;
  title: string;
  dek: string;
  category: "learn" | "astrology" | "stories";
  date: string;
  readMinutes: number;
  relatedSpecies: string[];
  body: string;
  seo: { title: string; description: string };
};

export type Collection = {
  slug: string;
  name: string;
  dek: string;
  productIds?: string[];
  gemstoneIds?: string[];
};
