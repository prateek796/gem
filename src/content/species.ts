import type { Species } from "@/lib/types";

export const species: Species[] = [
  {
    id: "ruby",
    name: "Ruby",
    slug: "ruby",
    family: "Corundum",
    hardness: "9 Mohs",
    rarity: "Fine unheated stones are scarce",
    typicalOrigins: ["Burma (Myanmar)", "Mozambique", "Thailand"],
    colours: ["red", "pink-red"],
    palette: {
      deep: "#4a0c16",
      mid: "#b31b32",
      light: "#e87884",
      spark: "#ffd6d9",
    },
    defaultCut: "oval",
    excerpt:
      "The red of corundum. Valued for depth of colour, not merely size.",
    formation:
      "Ruby forms when chromium enters corundum as it crystallises in marble or basalt. The same element that colours the stone also gives it its fluorescence — a living red in daylight.",
    history:
      "Across Burma, India and medieval Europe, ruby has been associated with vitality, rank and protection. In Vedic tradition it is linked with the Sun.",
    meaning: {
      zodiac: ["leo", "scorpio", "aries"],
      birthMonths: ["july"],
      planet: "Sun",
      symbolism:
        "Traditionally associated with vitality, passion and nobility across multiple cultures.",
      cultural:
        "In Vedic astrology, ruby (Manikya) is the gem of Surya. Historically believed to confer presence and courage — a cultural reading, not a medical one.",
    },
    relatedSpecies: ["garnet", "spinel", "sapphire"],
    seo: {
      title: "Ruby | Kalpa",
      description:
        "A private selection of rubies — origin, treatment and character, told with the care of a gemmological house.",
    },
  },
  {
    id: "sapphire",
    name: "Sapphire",
    slug: "sapphire",
    family: "Corundum",
    hardness: "9 Mohs",
    rarity: "Kashmir and unheated Ceylon stones are exceptional",
    typicalOrigins: ["Sri Lanka", "Kashmir", "Madagascar", "Australia"],
    colours: ["blue", "pink", "yellow", "colourless"],
    palette: {
      deep: "#0a1a42",
      mid: "#1f4fb0",
      light: "#7ea2e8",
      spark: "#d7e4ff",
    },
    defaultCut: "oval",
    excerpt:
      "Corundum in every colour but red. Blue remains the most sought, when the velvet is right.",
    formation:
      "Iron and titanium colour blue sapphire. The finest stones hold colour in all lights without turning inky or watery.",
    history:
      "Kashmir sapphires of the late nineteenth century set the standard for velvety blue. Royalty and clergy have favoured the stone for centuries.",
    meaning: {
      zodiac: ["virgo", "taurus", "sagittarius"],
      birthMonths: ["september"],
      planet: "Saturn",
      symbolism:
        "Traditionally associated with wisdom, fidelity and a composed mind.",
      cultural:
        "In Vedic astrology, blue sapphire (Neelam) is linked with Shani. Historically believed to demand respect in wearing — treated here as tradition, not prescription.",
    },
    relatedSpecies: ["tanzanite", "aquamarine", "ruby"],
    seo: {
      title: "Sapphire | Kalpa",
      description:
        "Sapphires selected for colour, origin and treatment honesty — from Ceylon blues to uncommon hues.",
    },
  },
  {
    id: "emerald",
    name: "Emerald",
    slug: "emerald",
    family: "Beryl",
    hardness: "7.5–8 Mohs",
    rarity: "Clean, richly coloured crystals are uncommon",
    typicalOrigins: ["Colombia", "Zambia", "Brazil"],
    colours: ["green"],
    palette: {
      deep: "#0c3328",
      mid: "#1b7a52",
      light: "#7dceb0",
      spark: "#d8f6ea",
    },
    defaultCut: "emerald",
    excerpt:
      "Beryl coloured by chromium or vanadium. Inclusions are expected; character is not a flaw.",
    formation:
      "Emerald grows in hydrothermal veins. Its garden of inclusions — the jardin — is a record of that growth, not a defect to be hidden.",
    history:
      "Colombian mines at Muzo and Chivor have defined emerald for five centuries. Cleopatra’s mines in Egypt are older still.",
    meaning: {
      zodiac: ["taurus", "gemini", "cancer"],
      birthMonths: ["may"],
      planet: "Mercury",
      symbolism:
        "Traditionally associated with renewal, insight and the heart’s intelligence.",
      cultural:
        "In Vedic astrology, emerald (Panna) belongs to Budh. Historically believed to favour speech and study.",
    },
    relatedSpecies: ["tourmaline", "aquamarine", "tsavorite"],
    seo: {
      title: "Emerald | Kalpa",
      description:
        "Emeralds chosen for colour and origin, with honest treatment notes and the jardin left visible.",
    },
  },
  {
    id: "diamond",
    name: "Diamond",
    slug: "diamond",
    family: "Carbon",
    hardness: "10 Mohs",
    rarity: "Old cuts with life are increasingly scarce",
    typicalOrigins: ["India (historic)", "Africa", "Russia", "Canada"],
    colours: ["colourless", "yellow", "brown", "fancy"],
    palette: {
      deep: "#6d7380",
      mid: "#c5ccd6",
      light: "#eef2f6",
      spark: "#ffffff",
    },
    defaultCut: "round",
    excerpt:
      "Light, made mineral. We prefer stones with a cut that has a point of view.",
    formation:
      "Diamond crystallises deep in the mantle and reaches the surface in kimberlite. Age is measured in billions of years.",
    history:
      "Before the modern brilliant, Indian and European cutters sought fire over mathematics. Those older cuts remain objects of connoisseurship.",
    meaning: {
      zodiac: ["aries", "leo", "taurus"],
      birthMonths: ["april"],
      planet: "Venus",
      symbolism:
        "Traditionally associated with constancy, clarity and enduring bond.",
      cultural:
        "In Vedic astrology, diamond (Heera) is linked with Shukra. A stone of refinement in many jewellery traditions.",
    },
    relatedSpecies: ["moissanite", "sapphire", "topaz"],
    seo: {
      title: "Diamond | Kalpa",
      description:
        "Diamonds selected for cut character and light — including older cuts with a distinct fire.",
    },
  },
  {
    id: "amethyst",
    name: "Amethyst",
    slug: "amethyst",
    family: "Quartz",
    hardness: "7 Mohs",
    rarity: "Deep Siberian colour is less common than pale material",
    typicalOrigins: ["Brazil", "Uruguay", "Zambia"],
    colours: ["purple", "violet"],
    palette: {
      deep: "#2c1450",
      mid: "#6d3cb0",
      light: "#c4a2ea",
      spark: "#f0e4ff",
    },
    defaultCut: "oval",
    excerpt:
      "Quartz in violet. The best stones hold a royal depth without turning grey.",
    formation:
      "Amethyst colours when iron in quartz is irradiated in the earth. Zoning often remains as a fingerprint.",
    history:
      "The name comes from the Greek for ‘not intoxicated’. Bishops and royalty favoured it as a stone of temperance.",
    meaning: {
      zodiac: ["pisces", "aquarius", "sagittarius"],
      birthMonths: ["february"],
      planet: "Jupiter",
      symbolism:
        "Traditionally associated with calm, clarity and sober judgement.",
      cultural:
        "Worn in ecclesiastical jewellery for centuries. In several traditions, a stone of evening and interior life.",
    },
    relatedSpecies: ["citrine", "sapphire", "tanzanite"],
    seo: {
      title: "Amethyst | Kalpa",
      description:
        "Amethysts chosen for depth of violet and clean cutting — a quieter purple than costume jewellery allows.",
    },
  },
  {
    id: "citrine",
    name: "Citrine",
    slug: "citrine",
    family: "Quartz",
    hardness: "7 Mohs",
    rarity: "Natural citrine is less abundant than heated amethyst",
    typicalOrigins: ["Brazil", "Madagascar"],
    colours: ["yellow", "golden", "orange"],
    palette: {
      deep: "#7a4a0c",
      mid: "#d9a126",
      light: "#f3d789",
      spark: "#fff4d2",
    },
    defaultCut: "oval",
    excerpt:
      "A honeyed quartz. We distinguish natural colour from heated amethyst, always.",
    formation:
      "Natural citrine is quartz coloured by iron in a warmer palette. Much market material is heated amethyst — disclosed here when known.",
    history:
      "Named from the French citron. A daylight stone in European jewellery of the nineteenth century.",
    meaning: {
      zodiac: ["sagittarius", "leo", "gemini"],
      birthMonths: ["november"],
      planet: "Jupiter",
      symbolism:
        "Traditionally associated with warmth, generosity and a clear appetite for life.",
      cultural:
        "Often linked with prosperity in contemporary crystal culture. We present that as folklore, not finance.",
    },
    relatedSpecies: ["amethyst", "topaz", "diamond"],
    seo: {
      title: "Citrine | Kalpa",
      description:
        "Citrine with honest colour origin — natural honey versus heated material, clearly told.",
    },
  },
  {
    id: "opal",
    name: "Opal",
    slug: "opal",
    family: "Hydrated silica",
    hardness: "5.5–6.5 Mohs",
    rarity: "Broad play-of-colour on a dark body is uncommon",
    typicalOrigins: ["Australia", "Ethiopia"],
    colours: ["play-of-colour", "white", "black", "fire"],
    palette: {
      deep: "#3d4d5c",
      mid: "#9bb8c9",
      light: "#e4d5e8",
      spark: "#f7efe0",
    },
    defaultCut: "cabochon",
    excerpt:
      "A stone that holds weather. Colour here is diffraction, not pigment.",
    formation:
      "Opal is silica gel that settled in cavities and slowly lost water. Play-of-colour comes from stacked silica spheres bending light.",
    history:
      "Australian fields transformed opal from a fragile curiosity into a connoisseur’s gem. Ethiopia added a new, more translucent chapter.",
    meaning: {
      zodiac: ["pisces", "cancer", "libra"],
      birthMonths: ["october"],
      planet: "Neptune",
      symbolism:
        "Traditionally associated with imagination, changeable feeling and luck — and, in older Europe, with superstition.",
      cultural:
        "October’s modern birthstone. We treat its ‘luck’ as story, not promise.",
    },
    relatedSpecies: ["moonstone", "pearl", "tourmaline"],
    seo: {
      title: "Opal | Kalpa",
      description:
        "Opals selected for play-of-colour and body tone, with care notes for a hydrated stone.",
    },
  },
  {
    id: "pearl",
    name: "Pearl",
    slug: "pearl",
    family: "Organic nacre",
    hardness: "2.5–4.5 Mohs",
    rarity: "Fine South Sea and natural pearls are limited by biology",
    typicalOrigins: ["South Sea", "Akoya", "Freshwater"],
    colours: ["cream", "white", "gold", "grey"],
    palette: {
      deep: "#b9a48c",
      mid: "#e6d7c6",
      light: "#f7f1e8",
      spark: "#ffffff",
    },
    defaultCut: "cabochon",
    excerpt:
      "Not cut from the earth, but grown. Lustre is the entire argument.",
    formation:
      "Nacre is laid in microscopic layers around an irritant. Orient — the inner rainbow — is a trick of those layers.",
    history:
      "Before culturing, pearls were accidents of the sea and priced as such. The twentieth century made them intimate, not only imperial.",
    meaning: {
      zodiac: ["cancer", "pisces", "gemini"],
      birthMonths: ["june"],
      planet: "Moon",
      symbolism:
        "Traditionally associated with purity, lunar calm and tears turned to light.",
      cultural:
        "In Vedic thought, pearl (Moti) is the gem of Chandra. A stone of night and inwardness in many coastal cultures.",
    },
    relatedSpecies: ["moonstone", "opal", "diamond"],
    seo: {
      title: "Pearl | Kalpa",
      description:
        "Pearls chosen for lustre and skin — cultured, with origin and size told plainly.",
    },
  },
  {
    id: "garnet",
    name: "Garnet",
    slug: "garnet",
    family: "Garnet group",
    hardness: "6.5–7.5 Mohs",
    rarity: "Fine tsavorite and colour-change stones are scarce",
    typicalOrigins: ["India", "East Africa", "Sri Lanka"],
    colours: ["red", "green", "orange", "colour-change"],
    palette: {
      deep: "#3d0c14",
      mid: "#8f1f2e",
      light: "#d46a6a",
      spark: "#ffd2d2",
    },
    defaultCut: "oval",
    excerpt:
      "A family, not a single red. Some members rival emerald; some shift in the lamp.",
    formation:
      "Garnets crystallise in metamorphic rock. Chemistry — not a single recipe — decides whether the stone is pyrope, almandine, tsavorite or spessartine.",
    history:
      "Bohemian pyrope flooded Victorian jewellery. East African finds in the last fifty years rewrote what ‘garnet’ could look like.",
    meaning: {
      zodiac: ["capricorn", "aquarius", "aries"],
      birthMonths: ["january"],
      planet: "Mars",
      symbolism:
        "Traditionally associated with grounding, loyalty and a banked fire.",
      cultural:
        "January’s birthstone in modern lists. Travellers once carried garnet as a stone of safe return — folklore we repeat as folklore.",
    },
    relatedSpecies: ["ruby", "tourmaline", "emerald"],
    seo: {
      title: "Garnet | Kalpa",
      description:
        "Garnets beyond the expected red — including finer green and colour-rich specimens.",
    },
  },
  {
    id: "moonstone",
    name: "Moonstone",
    slug: "moonstone",
    family: "Feldspar",
    hardness: "6–6.5 Mohs",
    rarity: "A sharp blue adularescence on a clean body is uncommon",
    typicalOrigins: ["Sri Lanka", "India", "Madagascar"],
    colours: ["white", "peach", "grey", "blue sheen"],
    palette: {
      deep: "#7d8aa0",
      mid: "#c5d0de",
      light: "#eef3f8",
      spark: "#ffffff",
    },
    defaultCut: "cabochon",
    excerpt:
      "A sheen that moves as you do. The stone is the light, not the body.",
    formation:
      "Intergrown feldspar layers scatter light — adularescence. The finest stones show a floating blue, like moonlight on still water.",
    history:
      "Art Nouveau jewellers loved moonstone for its interior life. Ceylon has long supplied the classical blue sheen.",
    meaning: {
      zodiac: ["cancer", "libra", "pisces"],
      birthMonths: ["june"],
      planet: "Moon",
      symbolism:
        "Traditionally associated with intuition, cycles and a quiet inner weather.",
      cultural:
        "Linked with lunar deities in several cultures. We offer that as poetry and history, not as a claim on the body.",
    },
    relatedSpecies: ["pearl", "opal", "aquamarine"],
    seo: {
      title: "Moonstone | Kalpa",
      description:
        "Moonstones selected for adularescence — the moving sheen that makes the species itself.",
    },
  },
  {
    id: "tourmaline",
    name: "Tourmaline",
    slug: "tourmaline",
    family: "Tourmaline group",
    hardness: "7–7.5 Mohs",
    rarity: "Cuprian ‘Paraíba’ colours are among the rarest",
    typicalOrigins: ["Brazil", "Africa", "Afghanistan"],
    colours: ["green", "pink", "blue", "parti"],
    palette: {
      deep: "#123d34",
      mid: "#2e8f74",
      light: "#8ed9c4",
      spark: "#e5fff6",
    },
    defaultCut: "oval",
    excerpt:
      "A species of many tempers. One crystal may hold more than one colour.",
    formation:
      "Tourmaline grows in pegmatites as long striated prisms. Copper, manganese, iron and lithium write the palette.",
    history:
      "Dutch merchants brought ‘Brazilian emerald’ that was tourmaline. Paraíba’s neon blues in the 1980s reset desire entirely.",
    meaning: {
      zodiac: ["libra", "scorpio", "virgo"],
      birthMonths: ["october"],
      planet: "Venus",
      symbolism:
        "Traditionally associated with artists’ nerve, protection in travel, and a many-coloured self.",
      cultural:
        "October shares tourmaline with opal in modern birthstone lists. Parti-colour stones have long been read as union of temperaments.",
    },
    relatedSpecies: ["emerald", "aquamarine", "garnet"],
    seo: {
      title: "Tourmaline | Kalpa",
      description:
        "Tourmalines chosen for colour character — from garden greens to cuprian blues.",
    },
  },
  {
    id: "aquamarine",
    name: "Aquamarine",
    slug: "aquamarine",
    family: "Beryl",
    hardness: "7.5–8 Mohs",
    rarity: "Saturated, untreated blue of size is limited",
    typicalOrigins: ["Brazil", "Madagascar", "Pakistan", "Mozambique"],
    colours: ["blue", "blue-green"],
    palette: {
      deep: "#164a58",
      mid: "#3aa7b8",
      light: "#9fe0ea",
      spark: "#e7fbff",
    },
    defaultCut: "emerald",
    excerpt:
      "Beryl the colour of deep water in shade. Clarity is typical; saturation is the work.",
    formation:
      "Iron colours aquamarine as beryl grows in pegmatites. Many stones are heated to remove a greenish veil — we say so when they are.",
    history:
      "Named for seawater by the Romans. A sailor’s stone in Mediterranean folklore; a dress jewel in the last century.",
    meaning: {
      zodiac: ["pisces", "aquarius", "gemini"],
      birthMonths: ["march"],
      planet: "Neptune",
      symbolism:
        "Traditionally associated with composure, honest speech and a cooled mind.",
      cultural:
        "March’s modern birthstone (with bloodstone). Historically believed to calm the sea — a metaphor we leave as metaphor.",
    },
    relatedSpecies: ["emerald", "topaz", "sapphire"],
    seo: {
      title: "Aquamarine | Kalpa",
      description:
        "Aquamarines selected for a true sea-blue, with treatment disclosed.",
    },
  },
  {
    id: "topaz",
    name: "Topaz",
    slug: "topaz",
    family: "Topaz",
    hardness: "8 Mohs",
    rarity: "Imperial and naturally blue stones are the true rarities",
    typicalOrigins: ["Brazil", "Pakistan", "Russia"],
    colours: ["colourless", "blue", "imperial", "sherry"],
    palette: {
      deep: "#8a3a12",
      mid: "#d9852a",
      light: "#f0c48a",
      spark: "#ffe9c8",
    },
    defaultCut: "oval",
    excerpt:
      "A hard silicate. Imperial peach is the connoisseur’s topaz; Swiss blue is a different conversation.",
    formation:
      "Topaz grows in pegmatites and rhyolites. Natural colour is usually pale; irradiation and heat create much of the sky-blue market.",
    history:
      "The name likely from the Red Sea island Topazios (now Zabargad) — which actually produced peridot. Imperial topaz from Brazil corrected the record in jewellery cases.",
    meaning: {
      zodiac: ["sagittarius", "scorpio", "leo"],
      birthMonths: ["november"],
      planet: "Jupiter",
      symbolism:
        "Traditionally associated with affection, a clear will, and daylight courage.",
      cultural:
        "November’s birthstone. Imperial shades were once reserved in Brazilian courts — a history of colour, not a health claim.",
    },
    relatedSpecies: ["citrine", "diamond", "aquamarine"],
    seo: {
      title: "Topaz | Kalpa",
      description:
        "Topaz with colour origin stated — imperial and sherry tones preferred over treated sky blue.",
    },
  },
  {
    id: "tanzanite",
    name: "Tanzanite",
    slug: "tanzanite",
    family: "Zoisite",
    hardness: "6.5–7 Mohs",
    rarity: "A single known source; fine saturated stones are limited",
    typicalOrigins: ["Tanzania (Merelani)"],
    colours: ["violet-blue", "blue", "violet"],
    palette: {
      deep: "#24144a",
      mid: "#5b3db8",
      light: "#b7a3e6",
      spark: "#ece4ff",
    },
    defaultCut: "oval",
    excerpt:
      "Zoisite, found in one range of hills. Trichroic: blue, violet, burgundy in the turning.",
    formation:
      "Vanadium colours zoisite at Merelani. Most tanzanite is heated to emphasise blue-violet — the usual, and disclosed, practice.",
    history:
      "Brought to the trade in 1967. Tiffany named it. A young gem, geologically and commercially, with a closed geography.",
    meaning: {
      zodiac: ["sagittarius", "pisces", "aquarius"],
      birthMonths: ["december"],
      planet: "Saturn",
      symbolism:
        "Traditionally associated with insight, transformation and a modern kind of rarity.",
      cultural:
        "December’s contemporary birthstone (with turquoise and zircon). Its youth means less ancient lore — we do not invent any.",
    },
    relatedSpecies: ["sapphire", "amethyst", "iolite"],
    seo: {
      title: "Tanzanite | Kalpa",
      description:
        "Tanzanite from a single known source — colour, heating and trichroism explained with care.",
    },
  },
];

export const speciesBySlug = Object.fromEntries(
  species.map((item) => [item.slug, item]),
) as Record<string, Species>;

export const speciesById = Object.fromEntries(
  species.map((item) => [item.id, item]),
) as Record<string, Species>;
