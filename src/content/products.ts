import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "mogok-ruby-214",
    sku: "KLP-RB-214",
    slug: "mogok-ruby-214",
    name: "Mogok Ruby",
    gemstoneId: "ruby",
    priceInr: 480000,
    availability: "available",
    quantity: 1,
    featured: true,
    stoneOfKalpa: true,
    archive: true,
    images: [],
    specs: {
      weightCarat: 2.14,
      dimensionsMm: { l: 8.2, w: 6.4, d: 4.1 },
      color: "Vivid red with a warm undertone",
      clarity: "Slight silk; eye-clean in daylight",
      cut: "oval",
      origin: "Mogok, Burma (Myanmar)",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A closed, velvety red that does not shout. In daylight the stone lifts; under a lamp it remains composed. Fine silk scatters light rather than interrupting it.",
      formation:
        "Chromium in marble-hosted corundum. Mogok’s geology is famous for this particular fluorescence — a red that seems lit from within.",
      rarity:
        "Unheated Burmese ruby of this colour and size is not a repeating commodity. Once this specimen is gone, an identical one may never appear again.",
      origin:
        "The Mogok Stone Tract has supplied the world’s idea of ruby for centuries. We name the tract, not a romance.",
      historical:
        "Pigeon-blood is a dealer’s phrase with a long, imprecise life. We describe this stone by what it does in the light.",
    },
    meaning: {
      zodiac: ["leo", "aries"],
      birthMonths: ["july"],
      planet: "Sun",
      symbolism:
        "Traditionally associated with vitality, passion and nobility.",
      cultural:
        "In Vedic astrology, ruby is the gem of Surya. Offered here as cultural symbolism, not as a promise of outcome.",
    },
    seo: {
      title: "Mogok Ruby, 2.14 ct | Kalpa",
      description:
        "An unheated Burmese ruby of 2.14 carats — selected for colour, silk and composure.",
    },
  },
  {
    id: "ceylon-sapphire-412",
    sku: "KLP-SP-412",
    slug: "ceylon-sapphire-412",
    name: "Ceylon Sapphire",
    gemstoneId: "sapphire",
    priceInr: 165000,
    availability: "available",
    quantity: 1,
    featured: true,
    images: [],
    specs: {
      weightCarat: 4.12,
      dimensionsMm: { l: 10.1, w: 8.0, d: 5.2 },
      color: "Cornflower blue, even in the pavilion",
      clarity: "Minor silk; lively",
      cut: "cushion",
      origin: "Sri Lanka",
      treatment: "heat",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A daylight blue with a hint of violet at the girdle. The cushion cut keeps the colour from windowing.",
      formation:
        "Iron and titanium in corundum, grown in Sri Lanka’s alluvial fields after the host rock weathered away.",
      rarity:
        "Heated Ceylon sapphire is known; this saturation at four carats, with an even face-up colour, is still a considered find.",
      origin:
        "Island material, historically called Ceylon in the trade. The name is kept as a geographic chapter, not a marketing glaze.",
      historical:
        "Sri Lankan sapphires have dressed European and South Asian jewellery for centuries. Heat is an old, accepted language of the species.",
    },
    meaning: {
      zodiac: ["virgo", "taurus"],
      birthMonths: ["september"],
      planet: "Saturn",
      symbolism: "Traditionally associated with fidelity and a composed mind.",
      cultural:
        "In Vedic astrology, blue sapphire is linked with Shani — a tradition of caution and respect, not a medical claim.",
    },
    seo: {
      title: "Ceylon Sapphire, 4.12 ct | Kalpa",
      description:
        "A heated Sri Lankan sapphire of 4.12 carats with even cornflower colour.",
    },
  },
  {
    id: "colombian-emerald-186",
    sku: "KLP-EM-186",
    slug: "colombian-emerald-186",
    name: "Colombian Emerald",
    gemstoneId: "emerald",
    priceInr: 340000,
    availability: "available",
    quantity: 1,
    featured: true,
    archive: true,
    images: [],
    specs: {
      weightCarat: 1.86,
      dimensionsMm: { l: 8.0, w: 6.1, d: 4.4 },
      color: "Vivid bluish green",
      clarity: "Classic jardin, stable",
      cut: "emerald",
      origin: "Colombia",
      treatment: "oil",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A garden that does not cloud the face. The colour is the point: bluish, not grassy, and alive in mixed light.",
      formation:
        "Hydrothermal beryl coloured by chromium. The inclusions are the growth diary.",
      rarity:
        "Colombian colour of this pitch, in a well-proportioned emerald cut, is not endlessly available.",
      origin:
        "Named to the country. Mine tracts are not claimed without paperwork we do not hold.",
      historical:
        "Spanish colonial inventories treated Muzo and Chivor emeralds as currency. The jardin has always been part of the contract.",
    },
    meaning: {
      zodiac: ["taurus", "gemini"],
      birthMonths: ["may"],
      planet: "Mercury",
      symbolism: "Traditionally associated with renewal and insight.",
      cultural:
        "In Vedic astrology, emerald belongs to Budh. Historically believed to favour speech and study.",
    },
    seo: {
      title: "Colombian Emerald, 1.86 ct | Kalpa",
      description:
        "A Colombian emerald of 1.86 carats with vivid bluish green and an honest jardin.",
    },
  },
  {
    id: "old-european-diamond-101",
    sku: "KLP-DM-101",
    slug: "old-european-diamond-101",
    name: "Old European Diamond",
    gemstoneId: "diamond",
    priceInr: 210000,
    availability: "available",
    quantity: 1,
    featured: true,
    archive: true,
    images: [],
    specs: {
      weightCarat: 1.01,
      dimensionsMm: { l: 6.4, w: 6.35, d: 4.1 },
      color: "J, warm",
      clarity: "VS2",
      cut: "round",
      origin: "Unknown historic source",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A high crown, a small table, a fire that winks rather than floods. This is not a modern brilliant, and that is the reason to want it.",
      formation:
        "Mantle carbon, brought up in kimberlite, cut in a European workshop when light was gas and candle.",
      rarity:
        "Old European cuts of a carat with life are finite. They are not being made this way again.",
      origin:
        "The mine is unrecorded. The cutting chapter is the origin that matters here.",
      historical:
        "Before Tolkowsky’s mathematics, cutters chased fire. This stone belongs to that argument.",
    },
    meaning: {
      zodiac: ["aries", "taurus"],
      birthMonths: ["april"],
      planet: "Venus",
      symbolism: "Traditionally associated with constancy and enduring bond.",
      cultural:
        "In Vedic astrology, diamond is linked with Shukra — a reading of refinement, not a financial forecast.",
    },
    seo: {
      title: "Old European Diamond, 1.01 ct | Kalpa",
      description:
        "A 1.01-carat old European-cut diamond selected for fire and character.",
    },
  },
  {
    id: "mozambique-ruby-152",
    sku: "KLP-RB-152",
    slug: "mozambique-ruby-152",
    name: "Mozambique Ruby",
    gemstoneId: "ruby",
    priceInr: 72000,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 1.52,
      dimensionsMm: { l: 7.1, w: 5.6, d: 3.8 },
      color: "Medium red, slightly pink",
      clarity: "Included, transparent",
      cut: "oval",
      origin: "Mozambique",
      treatment: "heat",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A more open red than the Mogok stone — daylight-friendly, with a pink edge that keeps it from going brown.",
      formation:
        "Basalt-related corundum from East Africa, now a principal source of ruby.",
      rarity:
        "Heated Mozambique ruby is available; this particular face-up colour at 1.5 carats is still a single specimen.",
      origin:
        "Mozambique has rewritten the ruby market in two decades. We state heating without apology.",
      historical:
        "A contemporary chapter in ruby, not a lesser one — provided colour and cutting hold.",
    },
    meaning: {
      zodiac: ["leo", "scorpio"],
      birthMonths: ["july"],
      planet: "Sun",
      symbolism: "Traditionally associated with vitality and presence.",
      cultural:
        "Ruby’s solar associations travel with the species, not only with Burma.",
    },
    seo: {
      title: "Mozambique Ruby, 1.52 ct | Kalpa",
      description: "A heated Mozambique ruby of 1.52 carats in a medium, wearable red.",
    },
  },
  {
    id: "kashmir-character-sapphire-302",
    sku: "KLP-SP-302",
    slug: "kashmir-character-sapphire-302",
    name: "Velvety Blue Sapphire",
    gemstoneId: "sapphire",
    priceInr: 1280000,
    availability: "available",
    quantity: 1,
    archive: true,
    images: [],
    specs: {
      weightCarat: 3.02,
      dimensionsMm: { l: 9.2, w: 7.4, d: 4.8 },
      color: "Velvety blue with soft saturation",
      clarity: "Fine silk, no window",
      cut: "oval",
      origin: "Madagascar",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Silk that velvets the blue without killing it. Not a neon; a cloth. The kind of colour people remember incorrectly, which is a compliment.",
      formation:
        "Metamorphic corundum. Microscopic rutile scatters light — the optical cause of ‘velvet’.",
      rarity:
        "Unheated stones with this quiet saturation at three carats are not a catalogue item.",
      origin:
        "Madagascar, not Kashmir. We will not borrow a legendary locality. The character is analogous; the passport is not.",
      historical:
        "Kashmir set the taste. Other soils sometimes rhyme with it. Honesty is the house style.",
    },
    meaning: {
      zodiac: ["virgo", "sagittarius"],
      birthMonths: ["september"],
      planet: "Saturn",
      symbolism: "Traditionally associated with wisdom and composure.",
      cultural:
        "In Vedic astrology, Neelam is treated with particular seriousness. We repeat the tradition, not a guarantee.",
    },
    seo: {
      title: "Velvety Blue Sapphire, 3.02 ct | Kalpa",
      description:
        "An unheated Madagascar sapphire of 3.02 carats with a velvety blue character.",
    },
  },
  {
    id: "zambian-emerald-240",
    sku: "KLP-EM-240",
    slug: "zambian-emerald-240",
    name: "Zambian Emerald",
    gemstoneId: "emerald",
    priceInr: 95000,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 2.4,
      dimensionsMm: { l: 8.8, w: 6.6, d: 4.9 },
      color: "Slightly bluish green, saturated",
      clarity: "Included, translucent to transparent",
      cut: "emerald",
      origin: "Zambia",
      treatment: "oil",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Darker than the Colombian, with a cool edge. A serious green that reads well in a ring.",
      formation:
        "Zambian emerald often carries iron, which deepens tone. The crystal habit still prefers the octagonal cut.",
      rarity:
        "A single 2.4-carat crystal, oiled as is customary, not cloned.",
      origin: "Kafubu region material as understood in the trade.",
      historical:
        "Zambia became a major emerald source in the later twentieth century — a modern classic, not an understudy.",
    },
    meaning: {
      zodiac: ["taurus", "cancer"],
      birthMonths: ["may"],
      planet: "Mercury",
      symbolism: "Traditionally associated with renewal and perception.",
      cultural: "Emerald’s Mercurial chapter in Vedic lists.",
    },
    seo: {
      title: "Zambian Emerald, 2.40 ct | Kalpa",
      description: "A 2.40-carat Zambian emerald with a cool, saturated green.",
    },
  },
  {
    id: "lab-sapphire-200",
    sku: "KLP-SP-LAB-200",
    slug: "lab-sapphire-200",
    name: "Laboratory Sapphire",
    gemstoneId: "sapphire",
    priceInr: 18500,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 2.0,
      dimensionsMm: { l: 8.0, w: 6.2, d: 4.0 },
      color: "Classic blue",
      clarity: "Eye-clean",
      cut: "oval",
      origin: "Laboratory-grown",
      treatment: "none",
      originType: "lab-grown",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Even colour, high clarity, a modern blue. Beautiful on its own terms — and labelled as what it is.",
      formation:
        "Grown by flux or melt methods that copy corundum’s chemistry, not its geology.",
      rarity:
        "The crystal is unique as a cut stone; the material is not geologically rare. We price accordingly.",
      origin: "Laboratory. No mine story is invented.",
      historical:
        "Verneuil’s flame fusion is more than a century old. Laboratory corundum is a chapter of gemmology, not a counterfeit — when disclosed.",
    },
    meaning: {
      zodiac: ["virgo", "taurus"],
      birthMonths: ["september"],
      planet: "Saturn",
      symbolism:
        "The traditional associations of sapphire travel with the species; origin is a separate fact.",
      cultural:
        "Some astrological traditions prefer natural stones. We do not adjudicate; we disclose.",
    },
    seo: {
      title: "Laboratory Sapphire, 2.00 ct | Kalpa",
      description:
        "A 2.00-carat laboratory-grown sapphire, disclosed and priced as such.",
    },
  },
  {
    id: "uruguayan-amethyst-1240",
    sku: "KLP-AM-1240",
    slug: "uruguayan-amethyst-1240",
    name: "Uruguayan Amethyst",
    gemstoneId: "amethyst",
    priceInr: 14800,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 12.4,
      dimensionsMm: { l: 16.2, w: 12.1, d: 8.4 },
      color: "Deep violet with red flash",
      clarity: "Eye-clean",
      cut: "cushion",
      origin: "Uruguay",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A closed purple that flashes crimson when turned. Not pale, not black — the difficult middle.",
      formation: "Iron-coloured quartz from volcanic geodes.",
      rarity: "Deep Uruguayan colour in a large, clean cushion is a find.",
      origin: "Artigas region as understood in the trade.",
      historical:
        "Sometimes called ‘Siberian’ in the market when the colour is this deep. We use the actual country.",
    },
    meaning: {
      zodiac: ["pisces", "aquarius"],
      birthMonths: ["february"],
      planet: "Jupiter",
      symbolism: "Traditionally associated with calm and sober judgement.",
      cultural: "A bishop’s stone in European ecclesiastical jewellery.",
    },
    seo: {
      title: "Uruguayan Amethyst, 12.4 ct | Kalpa",
      description: "A 12.4-carat Uruguayan amethyst of deep violet with red flash.",
    },
  },
  {
    id: "natural-citrine-820",
    sku: "KLP-CT-820",
    slug: "natural-citrine-820",
    name: "Natural Citrine",
    gemstoneId: "citrine",
    priceInr: 9200,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 8.2,
      dimensionsMm: { l: 14.0, w: 10.2, d: 7.1 },
      color: "Honey, not Madeira",
      clarity: "Eye-clean",
      cut: "oval",
      origin: "Brazil",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A tea-gold that stays gentle. No burnt orange, no glassy lemon of heated amethyst.",
      formation: "Quartz coloured by iron in a warm natural palette.",
      rarity:
        "Natural citrine is less common than its heated cousin. This specimen is selected for that distinction.",
      origin: "Brazilian pegmatite.",
      historical:
        "We would rather a quieter natural colour than a loud treated one.",
    },
    meaning: {
      zodiac: ["sagittarius", "leo"],
      birthMonths: ["november"],
      planet: "Jupiter",
      symbolism: "Traditionally associated with warmth and generosity.",
      cultural:
        "Contemporary crystal culture links citrine with prosperity. Folklore, not finance.",
    },
    seo: {
      title: "Natural Citrine, 8.20 ct | Kalpa",
      description: "An 8.20-carat natural citrine in a honey colour, untreated.",
    },
  },
  {
    id: "ethiopian-opal-560",
    sku: "KLP-OP-560",
    slug: "ethiopian-opal-560",
    name: "Ethiopian Opal",
    gemstoneId: "opal",
    priceInr: 28000,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 5.6,
      dimensionsMm: { l: 14.4, w: 10.8, d: 6.2 },
      color: "White body with broad flash",
      clarity: "Translucent",
      cut: "cabochon",
      origin: "Ethiopia",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Sheets of green and orange that move as a weather system, not as specks.",
      formation:
        "Hydrophane opal from volcanic host rock. It can take water — a care fact, not a defect.",
      rarity: "Broad pattern on a stable cabochon of this size is selective.",
      origin: "Welo as commonly described in the trade.",
      historical:
        "Ethiopian opal is a twenty-first-century chapter. We do not pretend it is Lightning Ridge.",
    },
    meaning: {
      zodiac: ["pisces", "libra"],
      birthMonths: ["october"],
      planet: "Neptune",
      symbolism: "Traditionally associated with imagination and changeable feeling.",
      cultural: "October’s modern birthstone, shared with tourmaline.",
    },
    seo: {
      title: "Ethiopian Opal, 5.60 ct | Kalpa",
      description: "A 5.60-carat Ethiopian opal cabochon with broad play-of-colour.",
    },
  },
  {
    id: "south-sea-pearl-11",
    sku: "KLP-PL-11",
    slug: "south-sea-pearl-11",
    name: "South Sea Pearl",
    gemstoneId: "pearl",
    priceInr: 42000,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 8.1,
      dimensionsMm: { l: 11.2, w: 11.0, d: 10.8 },
      color: "Warm cream with silver orient",
      clarity: "Light spotting, high lustre",
      cut: "cabochon",
      origin: "South Sea (cultured)",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A skin that takes light like satin. Slightly baroque — more interesting than a drawn circle.",
      formation: "Nacre over a bead, grown in Pinctada maxima.",
      rarity: "Eleven millimetres with this lustre is a considered pearl, not a strand filler.",
      origin: "South Sea culture. The mollusc is the geography.",
      historical:
        "Cultured, and said so. The luxury is the nacre, not a fiction of the wild.",
    },
    meaning: {
      zodiac: ["cancer", "pisces"],
      birthMonths: ["june"],
      planet: "Moon",
      symbolism: "Traditionally associated with lunar calm and inward light.",
      cultural: "In Vedic thought, pearl is the gem of Chandra.",
    },
    seo: {
      title: "South Sea Pearl, 11 mm | Kalpa",
      description: "A cultured South Sea pearl of about 11 mm with warm cream lustre.",
    },
  },
  {
    id: "tsavorite-garnet-310",
    sku: "KLP-GN-310",
    slug: "tsavorite-garnet-310",
    name: "Tsavorite Garnet",
    gemstoneId: "garnet",
    priceInr: 36000,
    availability: "available",
    quantity: 1,
    featured: true,
    images: [],
    specs: {
      weightCarat: 3.1,
      dimensionsMm: { l: 9.0, w: 7.2, d: 5.0 },
      color: "Vivid green, slightly yellowish",
      clarity: "Eye-clean",
      cut: "oval",
      origin: "East Africa",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A neon the earth actually makes. Brighter than most emerald, without the jardin.",
      formation: "Grossular garnet coloured by vanadium and chromium.",
      rarity: "Tsavorite above three carats, clean, is not ordinary garnet.",
      origin: "Kenya / Tanzania borderlands as understood in the trade.",
      historical:
        "Named in the 1970s. A young classic — proof that garnet is a family, not a January cliché.",
    },
    meaning: {
      zodiac: ["capricorn", "aquarius"],
      birthMonths: ["january"],
      planet: "Mars",
      symbolism: "Traditionally associated with loyalty and a banked fire — here, in green.",
      cultural: "January’s birthstone in a less expected colour.",
    },
    seo: {
      title: "Tsavorite Garnet, 3.10 ct | Kalpa",
      description: "A 3.10-carat tsavorite garnet of vivid, untreated green.",
    },
  },
  {
    id: "blue-moonstone-680",
    sku: "KLP-MS-680",
    slug: "blue-moonstone-680",
    name: "Blue Moonstone",
    gemstoneId: "moonstone",
    priceInr: 11400,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 6.8,
      dimensionsMm: { l: 14.8, w: 11.2, d: 7.0 },
      color: "Colourless body, floating blue sheen",
      clarity: "Minor inclusions",
      cut: "cabochon",
      origin: "Sri Lanka",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "The blue sits on the stone like a second weather. Turn it, and it relocates.",
      formation: "Feldspar intergrowths scattering light — adularescence.",
      rarity: "A sharp blue on a large cabochon is the point of the species.",
      origin: "Ceylon material, historically preferred for this sheen.",
      historical: "An Art Nouveau favourite, for obvious optical reasons.",
    },
    meaning: {
      zodiac: ["cancer", "pisces"],
      birthMonths: ["june"],
      planet: "Moon",
      symbolism: "Traditionally associated with intuition and cycles.",
      cultural: "Lunar folklore is abundant. We keep it as folklore.",
    },
    seo: {
      title: "Blue Moonstone, 6.80 ct | Kalpa",
      description: "A 6.80-carat Ceylon moonstone with a floating blue adularescence.",
    },
  },
  {
    id: "cuprian-tourmaline-120",
    sku: "KLP-TR-120",
    slug: "cuprian-tourmaline-120",
    name: "Cuprian Tourmaline",
    gemstoneId: "tourmaline",
    priceInr: 240000,
    availability: "available",
    quantity: 1,
    archive: true,
    images: [],
    specs: {
      weightCarat: 1.2,
      dimensionsMm: { l: 7.4, w: 5.6, d: 3.9 },
      color: "Neon blue-green",
      clarity: "Slightly included",
      cut: "oval",
      origin: "Mozambique",
      treatment: "heat",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Electric without vulgarity — a blue-green that seems lit. Small, because the colour is the size.",
      formation: "Copper in tourmaline. Heat is commonly used to refine the hue.",
      rarity:
        "Cuprian tourmaline of this neon is among the more closely held colours in the modern market.",
      origin:
        "Mozambique, not Paraíba. The chemistry rhymes; the locality is stated.",
      historical:
        "Paraíba named the desire. Other deposits now speak a related dialect.",
    },
    meaning: {
      zodiac: ["libra", "scorpio"],
      birthMonths: ["october"],
      planet: "Venus",
      symbolism: "Traditionally associated with artists’ nerve and vivid selfhood.",
      cultural: "October’s tourmaline, in its most contemporary accent.",
    },
    seo: {
      title: "Cuprian Tourmaline, 1.20 ct | Kalpa",
      description:
        "A 1.20-carat cuprian tourmaline from Mozambique with neon blue-green colour.",
    },
  },
  {
    id: "madagascar-aquamarine-750",
    sku: "KLP-AQ-750",
    slug: "madagascar-aquamarine-750",
    name: "Madagascar Aquamarine",
    gemstoneId: "aquamarine",
    priceInr: 22000,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 7.5,
      dimensionsMm: { l: 14.6, w: 10.4, d: 7.2 },
      color: "Light sea-blue",
      clarity: "Eye-clean",
      cut: "emerald",
      origin: "Madagascar",
      treatment: "heat",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Water in shade, not a postcard tropic. The emerald cut lengthens the colour.",
      formation: "Iron in beryl. Heating removed a greenish veil.",
      rarity: "A clean 7.5-carat crystal with wearable colour is a generous stone.",
      origin: "Madagascan pegmatite.",
      historical: "A sailor’s stone by Roman naming, a dress jewel by modern habit.",
    },
    meaning: {
      zodiac: ["pisces", "aquarius"],
      birthMonths: ["march"],
      planet: "Neptune",
      symbolism: "Traditionally associated with composure and honest speech.",
      cultural: "March’s modern birthstone, with bloodstone.",
    },
    seo: {
      title: "Madagascar Aquamarine, 7.50 ct | Kalpa",
      description: "A 7.50-carat heated Madagascar aquamarine in a light sea-blue.",
    },
  },
  {
    id: "imperial-topaz-340",
    sku: "KLP-TP-340",
    slug: "imperial-topaz-340",
    name: "Imperial Topaz",
    gemstoneId: "topaz",
    priceInr: 54000,
    availability: "available",
    quantity: 1,
    featured: true,
    images: [],
    specs: {
      weightCarat: 3.4,
      dimensionsMm: { l: 10.2, w: 7.1, d: 5.0 },
      color: "Sherry-peach with pink flash",
      clarity: "Eye-clean",
      cut: "oval",
      origin: "Brazil",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A sunset held still. Peach that turns pink at the edges — imperial, not Swiss blue.",
      formation: "Naturally coloured topaz from Ouro Preto’s historic field.",
      rarity: "Imperial colour is the true rarity in topaz; sky blue is a different material conversation.",
      origin: "Minas Gerais, Brazil.",
      historical:
        "Once associated with Brazilian courts. We sell the colour, not the court.",
    },
    meaning: {
      zodiac: ["sagittarius", "leo"],
      birthMonths: ["november"],
      planet: "Jupiter",
      symbolism: "Traditionally associated with affection and daylight courage.",
      cultural: "November’s birthstone in its most distinguished hue.",
    },
    seo: {
      title: "Imperial Topaz, 3.40 ct | Kalpa",
      description: "A 3.40-carat untreated imperial topaz in sherry-peach.",
    },
  },
  {
    id: "merelani-tanzanite-480",
    sku: "KLP-TZ-480",
    slug: "merelani-tanzanite-480",
    name: "Merelani Tanzanite",
    gemstoneId: "tanzanite",
    priceInr: 68000,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 4.8,
      dimensionsMm: { l: 11.0, w: 8.4, d: 5.6 },
      color: "Violet-blue, strong trichroism",
      clarity: "Eye-clean",
      cut: "oval",
      origin: "Merelani, Tanzania",
      treatment: "heat",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Blue in one turn, violet in the next. The oval is oriented to keep both.",
      formation: "Vanadium in zoisite, heated as is customary to emphasise blue-violet.",
      rarity: "A single known source. Fine colour at nearly five carats is not infinite.",
      origin: "Merelani Hills — the only commercial locality.",
      historical: "Named by Tiffany in 1967. A young gem with a closed map.",
    },
    meaning: {
      zodiac: ["sagittarius", "pisces"],
      birthMonths: ["december"],
      planet: "Saturn",
      symbolism: "Traditionally associated with insight and a modern rarity.",
      cultural: "December’s contemporary birthstone. We invent no ancient lore.",
    },
    seo: {
      title: "Merelani Tanzanite, 4.80 ct | Kalpa",
      description: "A 4.80-carat heated tanzanite from Merelani with strong trichroism.",
    },
  },
  {
    id: "pink-sapphire-090",
    sku: "KLP-SP-090",
    slug: "pink-sapphire-090",
    name: "Padparadscha-leaning Sapphire",
    gemstoneId: "sapphire",
    priceInr: 195000,
    availability: "reserved",
    quantity: 1,
    archive: true,
    images: [],
    specs: {
      weightCarat: 0.9,
      dimensionsMm: { l: 6.2, w: 5.4, d: 3.4 },
      color: "Pink-orange, lotus-adjacent",
      clarity: "Eye-clean",
      cut: "cushion",
      origin: "Sri Lanka",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "Neither pink nor orange — the difficult third. Small, because that colour rarely comes large without a quarrel.",
      formation: "Corundum with a trace chemistry that sits between ruby and yellow sapphire.",
      rarity: "True padparadscha is argued over. We describe this as lotus-adjacent, not as a courtroom.",
      origin: "Sri Lanka, the classical home of the colour.",
      historical:
        "The name comes from the Sanskrit/Sinhala lotus. Dealers have stretched it. We will not.",
    },
    meaning: {
      zodiac: ["taurus", "libra"],
      birthMonths: ["september"],
      planet: "Saturn",
      symbolism: "Traditionally associated with rare affection and a composed heart.",
      cultural: "A connoisseur’s sapphire more than a list birthstone.",
    },
    seo: {
      title: "Pink-orange Sapphire, 0.90 ct | Kalpa",
      description:
        "An unheated 0.90-carat Ceylon sapphire leaning toward lotus colour. Currently reserved.",
    },
  },
  {
    id: "almandine-garnet-620",
    sku: "KLP-GN-620",
    slug: "almandine-garnet-620",
    name: "Almandine Garnet",
    gemstoneId: "garnet",
    priceInr: 8400,
    availability: "available",
    quantity: 1,
    images: [],
    specs: {
      weightCarat: 6.2,
      dimensionsMm: { l: 12.0, w: 10.0, d: 6.8 },
      color: "Deep wine red",
      clarity: "Slightly included",
      cut: "round",
      origin: "India",
      treatment: "none",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter:
        "A closed wine that does not try to be ruby. In the sun it opens; in the room it remains a dark fruit.",
      formation: "Iron-rich garnet from metamorphic schist.",
      rarity: "The species is known; this crystal is still one.",
      origin: "Indian material, long used in both jewellery and historic trade.",
      historical: "January’s familiar red — presented without costume-jewellery gloss.",
    },
    meaning: {
      zodiac: ["capricorn", "aquarius"],
      birthMonths: ["january"],
      planet: "Mars",
      symbolism: "Traditionally associated with grounding and loyalty.",
      cultural: "Travellers’ folklore of safe return — told as folklore.",
    },
    seo: {
      title: "Almandine Garnet, 6.20 ct | Kalpa",
      description: "A 6.20-carat Indian almandine garnet in a deep wine red.",
    },
  },
  {
    id: "pear-ruby-sold-088",
    sku: "KLP-RB-088",
    slug: "pear-ruby-088",
    name: "Pear Ruby",
    gemstoneId: "ruby",
    priceInr: 54000,
    availability: "sold",
    quantity: 0,
    images: [],
    specs: {
      weightCarat: 0.88,
      dimensionsMm: { l: 6.8, w: 4.6, d: 2.9 },
      color: "Pink-red",
      clarity: "Included",
      cut: "pear",
      origin: "Thailand",
      treatment: "heat",
      originType: "natural",
      certification: { lab: "none" },
    },
    story: {
      visualCharacter: "A small pear with a lively bow-tie that did not kill the colour.",
      formation: "Basalt-related ruby, heated.",
      rarity: "This specimen has left the house.",
      origin: "Thailand.",
      historical: "Kept in the archive as a record of a stone that found its person.",
    },
    meaning: {
      zodiac: ["leo"],
      birthMonths: ["july"],
      planet: "Sun",
      symbolism: "Traditionally associated with vitality.",
      cultural: "Ruby’s solar chapter.",
    },
    seo: {
      title: "Pear Ruby, 0.88 ct | Kalpa",
      description: "A heated Thai pear ruby of 0.88 carats — now placed.",
    },
  },
];
