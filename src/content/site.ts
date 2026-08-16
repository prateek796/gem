export const site = {
  name: "Kalpa",
  legalName: "Kalpa Gemstone House",
  tagline: "Formed in time. Found in meaning.",
  description:
    "A private gemstone house. Specimens selected for colour, origin, character and the stories cultures have placed upon them.",
  url: "https://kalpa.house",
  email: "atelier@kalpa.house",
  city: "India",
  whatsappEnv: "NEXT_PUBLIC_WHATSAPP_NUMBER",
};

export const nav = {
  primary: [
    { href: "/gemstones", label: "The Archive", mega: "archive" as const },
    { href: "/collections", label: "Collections", mega: "collections" as const },
    { href: "/astrology", label: "Meaning", mega: "meaning" as const },
    { href: "/journal", label: "Journal" },
    { href: "/discover", label: "Discover" },
  ],
  utility: [
    { href: "/consult", label: "Consult" },
    { href: "/about", label: "The House" },
  ],
};

export const footer = {
  shop: [
    { href: "/gemstones", label: "The Archive" },
    { href: "/collections/the-archive", label: "Rare specimens" },
    { href: "/collections/birthstones", label: "Birthstones" },
    { href: "/collections/navaratna", label: "Navaratna" },
    { href: "/wishlist", label: "Wishlist" },
  ],
  learn: [
    { href: "/library", label: "Gemstone library" },
    { href: "/journal", label: "Journal" },
    { href: "/astrology", label: "Astrology & meaning" },
    { href: "/astrology/zodiac-gemstones", label: "Zodiac stones" },
    { href: "/compare", label: "Compare stones" },
  ],
  house: [
    { href: "/about", label: "About Kalpa" },
    { href: "/consult", label: "Speak with us" },
    { href: "/packaging", label: "From our hands to yours" },
    { href: "/care", label: "Care" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/shipping", label: "Shipping" },
    { href: "/returns", label: "Returns" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};
