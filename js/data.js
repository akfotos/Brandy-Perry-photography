// Brandy Perry Photography — static site data

const unsplash = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const projects = [
  {
    slug: "obsidian-hours",
    title: "Obsidian Hours",
    year: 2025,
    category: "editorial",
    location: "Reykjavík, Iceland",
    client: "NOIR Quarterly",
    summary:
      "A six-frame editorial shot in the last forty minutes of Arctic dusk, where the sky stops being a light source and becomes a backdrop.",
    heroImage: unsplash("1506905925346-21bda4d32df4", 1600),
    heroAlt: "Dark mountain range under a heavy overcast sky at dusk",
  },
  {
    slug: "glasshouse-anatomy",
    title: "Glasshouse Anatomy",
    year: 2025,
    category: "conceptual",
    location: "Rotterdam, Netherlands",
    client: "Self-initiated",
    summary:
      "Bodies and botanicals shot through eleven layers of salvaged industrial glass, building a study on how much distortion a form survives.",
    heroImage: unsplash("1509114397022-ed747cca3f65", 1600),
    heroAlt: "Abstract refracted light through textured glass",
  },
  {
    slug: "the-weight-of-rooms",
    title: "The Weight of Rooms",
    year: 2024,
    category: "editorial",
    location: "Turin, Italy",
    client: "Atelier Vestra",
    summary:
      "An interiors-meets-portraiture campaign photographed exclusively with light that was already in the building.",
    heroImage: unsplash("1533090161767-e6ffed986c88", 1600),
    heroAlt: "Empty room with a single window casting a hard shadow",
  },
  {
    slug: "signal-decay",
    title: "Signal Decay",
    year: 2024,
    category: "abstract",
    location: "Studio 4B, Berlin",
    client: "Ostgut Editions",
    summary:
      "Long-exposure captures of CRT phosphor decay, photographed at shutter speeds slow enough to record the death of a single scan line.",
    heroImage: unsplash("1462331940025-496dfbfc7564", 1600),
    heroAlt: "Abstract streaks of light on a black field",
  },
  {
    slug: "salt-index",
    title: "Salt Index",
    year: 2023,
    category: "abstract",
    location: "Salar de Uyuni, Bolivia",
    client: "Terrain Archive",
    summary:
      "An aerial typology of salt-flat polygons, flown at 120 metres and printed to make the horizon impossible to locate.",
    heroImage: unsplash("1469474968028-56623f02e42e", 1600),
    heroAlt: "Vast pale landscape reduced to abstract texture",
  },
  {
    slug: "inheritance",
    title: "Inheritance",
    year: 2023,
    category: "conceptual",
    location: "Porto, Portugal",
    client: "Self-initiated",
    summary:
      "Three generations photographed in the same chair, same light, eleven months apart — a study in what a family portrait records when you remove every other variable.",
    heroImage: unsplash("1507003211169-0a1dd7228f2d", 1600),
    heroAlt: "Moody low-key portrait of a face half in shadow",
  },
];

const projectCategories = [
  { value: "all", label: "All work" },
  { value: "editorial", label: "Editorial" },
  { value: "conceptual", label: "Conceptual" },
  { value: "abstract", label: "Abstract" },
];

const prints = [
  {
    id: "obsidian-ridge",
    title: "Obsidian Ridge",
    sourceProjectTitle: "Obsidian Hours",
    image: unsplash("1506905925346-21bda4d32df4"),
    alt: "Dark mountain ridge under heavy cloud",
    basePrice: 320,
    edition: { kind: "limited", runSize: 25, sold: 18 },
  },
  {
    id: "cold-summit",
    title: "Cold Summit",
    sourceProjectTitle: "Obsidian Hours",
    image: unsplash("1519681393784-d120267933ba"),
    alt: "Snow-covered peak under a low cold sun",
    basePrice: 280,
    edition: { kind: "open" },
  },
  {
    id: "still-water",
    title: "Still Water",
    sourceProjectTitle: "Obsidian Hours",
    image: unsplash("1493246507139-91e8fad9978e"),
    alt: "Mirror-still lake reflecting a dark mountain",
    basePrice: 340,
    edition: { kind: "limited", runSize: 15, sold: 11 },
  },
  {
    id: "refraction-vi",
    title: "Refraction VI",
    sourceProjectTitle: "Glasshouse Anatomy",
    image: unsplash("1550684376-efcbd6e3f031"),
    alt: "Abstract refracted light in cold blue and grey",
    basePrice: 380,
    edition: { kind: "limited", runSize: 10, sold: 4 },
  },
  {
    id: "pane-eleven",
    title: "Pane Eleven",
    sourceProjectTitle: "Glasshouse Anatomy",
    image: unsplash("1462332420958-a05d1e002413"),
    alt: "Distorted silhouette behind frosted glass",
    basePrice: 360,
    edition: { kind: "open" },
  },
  {
    id: "noon-plaster",
    title: "Noon Plaster",
    sourceProjectTitle: "The Weight of Rooms",
    image: unsplash("1449034446853-66c86144b0ad"),
    alt: "Hard sunlight falling across an empty plaster wall",
    basePrice: 290,
    edition: { kind: "open" },
  },
  {
    id: "scanline-decay",
    title: "Scanline Decay",
    sourceProjectTitle: "Signal Decay",
    image: unsplash("1451187580459-43490279c0fa"),
    alt: "Glowing abstract light trails on a black field",
    basePrice: 420,
    edition: { kind: "limited", runSize: 8, sold: 7 },
  },
  {
    id: "salt-index-04",
    title: "Salt Index 04",
    sourceProjectTitle: "Salt Index",
    image: unsplash("1439066615861-d1af74d74000"),
    alt: "Aerial abstract of cracked salt-flat polygons",
    basePrice: 450,
    edition: { kind: "limited", runSize: 20, sold: 6 },
  },
];

const papers = [
  {
    id: "matte",
    label: "Archival Matte",
    description:
      "310gsm cotton rag. Deep, non-reflective blacks. The default for shadow-heavy work.",
  },
  {
    id: "metallic",
    label: "Metallic Gloss",
    description:
      "255gsm pearl substrate. Specular highlights lift; best under directional gallery light.",
  },
  {
    id: "hahnemuhle",
    label: "Fine Art Hahnemühle",
    description:
      "Photo Rag Baryta 315gsm. Museum standard, 100+ year lightfastness, embossed and numbered.",
  },
];

const manifesto =
  "I do not chase moments. I build the conditions in which a moment becomes unavoidable, then I wait for it with the shutter already cocked. Most of my work happens before the camera is switched on — scouting a wall that holds light for thirty minutes a day, welding a rig out of salvaged greenhouse glass, taping a tripod to a studio floor so the same chair can be photographed eleven months apart. The picture is the receipt.";

const artisticStatement =
  "A photograph is a decision about what to exclude. Everything else — the gear, the lighting, the retouch — is administration.";

const stats = [
  { value: "15", label: "Years in practice" },
  { value: "9", label: "Commissions a year" },
  { value: "6", label: "Solo exhibitions" },
  { value: "100%", label: "Editions printed in-house" },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    projects,
    projectCategories,
    prints,
    papers,
    manifesto,
    artisticStatement,
    stats,
  };
}
