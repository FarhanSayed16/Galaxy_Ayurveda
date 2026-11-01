export interface Product {
  id: string;
  slug: string;
  name: string;
  botanicalSubtitle: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  dosage: string;
  price: number;
  mrp: number;
  category: string;
  concerns: string[];
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  weight: string;
  isFeatured: boolean;
  isAvailable: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "ga-001",
    slug: "kumkumadi-youth-revitalising-facial-oil",
    name: "Kumkumadi Youth-Revitalising Miraculous Beauty Oil",
    botanicalSubtitle: "The Botanical Alternative To Retinol For Youthful, Radiant Skin",
    shortDescription:
      "Classical Ayurvedic formulation with pure Kashmiri Saffron, Sandalwood, and 26 precious herbs that visibly illuminates skin tone and reverses early signs of ageing.",
    description: `
      <p>Kumkumadi Miraculous Beauty Ayurvedic Night Serum is a legendary formulation crafted strictly in adherence to the classical Ayurvedic text <em>Ashtanga Hridaya</em>.</p>
      <p>Infused with grade-1 Kashmiri Mongra saffron, lotus extracts, and Indian redwood, this precious facial nectar deeply revitalizes dull skin cells, smoothens fine lines, diminishes dark spots, and restores a timeless golden radiance overnight.</p>
      <p>100% pure herbal formulation without mineral oils, silicones, synthetic fragrances, or preservatives.</p>
    `,
    benefits: [
      "Visibly brightens and evens out pigmentation and dark circles",
      "Boosts collagen synthesis naturally, smoothing fine expression lines",
      "Hydrates parched skin cells and enhances natural barrier repair",
      "Gives a luminous, lit-from-within Ayurvedic bridal glow",
    ],
    ingredients: [
      "Pure Kashmiri Mongra Saffron (Crocus sativus)",
      "Red Sandalwood (Pterocarpus santalinus)",
      "Indian Madder / Manjistha (Rubia cordifolia)",
      "Sacred Blue Lotus (Nymphaea stellata)",
      "Cold-Pressed Pure Sesame Oil (Sesamum indicum)",
      "Licorice Root / Yashtimadhu (Glycyrrhiza glabra)",
    ],
    dosage:
      "Warm 3–4 drops between clean palms and gently press onto freshly cleansed face and neck in upward circular strokes before bedtime.",
    price: 1895,
    mrp: 2499,
    category: "skincare",
    concerns: ["glow", "anti-ageing", "pigmentation"],
    image:
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "BESTSELLER",
    rating: 5.0,
    reviewCount: 44,
    weight: "30 ml",
    isFeatured: true,
    isAvailable: true,
    tags: ["saffron", "kumkumadi", "glow", "anti-ageing", "facial oil", "luxury"],
  },
  {
    id: "ga-002",
    slug: "bhringraj-invigorating-scalp-hair-oil",
    name: "Bringaras Invigorating Scalp & Hair Therapy Oil",
    botanicalSubtitle: "Stimulates Hair Growth | Rebalances Scalp Health & Stops Hair Fall",
    shortDescription:
      "Intensively nourishing traditional scalp therapy infused with Bhringraj (Keshraj), Amla, and Indigo to stimulate dormant hair follicles and curb excess hair loss.",
    description: `
      <p>Bringaras Intensive Hair Oil is prepared over three full days using the traditional <em>Kshir Pak Vidhi</em>, boiling fresh Bhringraj leaves with nourishing goat's milk and cold-pressed sesame oil.</p>
      <p>It penetrates deeply into hair roots, neutralizes scalp heat (Pitta dosha), eradicates fungal dandruff, and halts premature greying.</p>
    `,
    benefits: [
      "Significantly reduces excessive hair fall within 3 to 4 weeks of regular use",
      "Stimulates active regrowth in thinning patches and improves strand thickness",
      "Cools irritated scalp, prevents stubborn dandruff, and relieves tension",
      "Delays premature graying and enhances deep natural hair color",
    ],
    ingredients: [
      "False Daisy / Bhringraj (Eclipta alba)",
      "Indian Gooseberry / Amla (Phyllanthus emblica)",
      "True Indigo / Neeli (Indigofera tinctoria)",
      "Cardiospermum / Balloon Vine",
      "Pure Sesame Seed Oil & Goat's Milk",
    ],
    dosage:
      "Part hair into sections and massage gently into scalp for 10 minutes. Leave on for at least 30 minutes or overnight before washing with a mild herbal cleanser.",
    price: 615,
    mrp: 850,
    category: "haircare",
    concerns: ["hair-loss", "dandruff", "premature-graying"],
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "NEW & IMPROVED",
    rating: 4.7,
    reviewCount: 60,
    weight: "200 ml",
    isFeatured: true,
    isAvailable: true,
    tags: ["bhringraj", "hair oil", "hair fall", "scalp care", "ayurvedic oil"],
  },
  {
    id: "ga-003",
    slug: "kumkumadi-youth-recovering-night-balm",
    name: "Kumkumadi Youth-Recovering Restorative Night Balm",
    botanicalSubtitle: "Saffron-Infused Cream To Restore And Rejuvenate Your Skin Overnight",
    shortDescription:
      "Ultra-nourishing organic night balm crafted with virgin Kokum butter and concentrated Kumkumadi Tailam to deeply replenish dry skin and fade stubborn pigmentation.",
    description: `
      <p>A silky, whipped night treatment combining classical Kumkumadi herbs with antioxidant-rich cold-pressed kokum butter and almond milk.</p>
      <p>Formulated to work during the skin's peak nocturnal regenerative cycle, this balm delivers deep cellular moisture without leaving a greasy sheen.</p>
    `,
    benefits: [
      "Replenishes intense lipid moisture while you sleep",
      "Softens rough, flaky skin texture and strengthens elasticity",
      "Fades sun spots and pigmentation patches with regular application",
      "Leaves skin supple, plump, and luminous by morning",
    ],
    ingredients: [
      "Kumkumadi Tailam (Classical 26-Herb Decocotion)",
      "Pure Kokum Seed Butter (Garcinia indica)",
      "Sweet Almond Extract (Prunus amygdalus)",
      "Vegetable Squalane from Olive",
      "Pure Damask Rose Hydrosol",
    ],
    dosage:
      "Take a pearl-sized amount, warm between fingertips, and smooth over clean skin on face and neck before sleeping.",
    price: 2295,
    mrp: 2850,
    category: "skincare",
    concerns: ["glow", "anti-ageing", "dryness-damage"],
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "AWARD WINNER",
    rating: 5.0,
    reviewCount: 55,
    weight: "50 g",
    isFeatured: true,
    isAvailable: true,
    tags: ["night balm", "kumkumadi", "saffron cream", "anti-ageing", "dry skin"],
  },
  {
    id: "ga-004",
    slug: "pure-organic-ashwagandha-churna",
    name: "Nagori Ashwagandha Churna (Single Origin Root)",
    botanicalSubtitle: "Supreme Adaptogen For Strength, Vigor & Deep Restorative Sleep",
    shortDescription:
      "100% pure powdered roots of wildcrafted Nagori Ashwagandha. Standardized with naturally high withanolides to reduce cortisol and build lean muscular strength.",
    description: `
      <p>Celebrated as the King of Ayurvedic herbs, Ashwagandha (Withania somnifera) is the ultimate adaptogen for fighting modern stress, chronic fatigue, and hormonal imbalance.</p>
      <p>Our Nagori root variety is harvested at optimal maturity from arid mineral-rich soils, washed in medicinal waters, dried in the shade, and finely ground to 120 mesh for effortless absorption.</p>
    `,
    benefits: [
      "Lowers chronic stress hormones (cortisol) and eases anxious thoughts",
      "Improves deep REM sleep quality without morning grogginess",
      "Increases physical stamina, muscle recovery, and cellular endurance",
      "Promotes hormonal balance and reproductive vitality in both men and women",
    ],
    ingredients: ["100% Pure Nagori Ashwagandha Root Powder (Withania somnifera)"],
    dosage:
      "Mix 1/2 teaspoon (approx 3g) in warm milk or water with a dash of honey or ghee, twice daily after meals or 1 hour before bedtime.",
    price: 249,
    mrp: 350,
    category: "churna",
    concerns: ["calm-mind", "stamina", "daily-vitality"],
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "100% ORGANIC",
    rating: 4.9,
    reviewCount: 112,
    weight: "150 g",
    isFeatured: true,
    isAvailable: true,
    tags: ["ashwagandha", "churna", "stress relief", "stamina", "sleep", "adaptogen"],
  },
  {
    id: "ga-005",
    slug: "classical-triphala-churna",
    name: "Divya Triphala Detox & Digestive Churna",
    botanicalSubtitle: "Traditional 3-Myrobalan Herbal Blend For Gut Cleansing & Colon Health",
    shortDescription:
      "Balanced ratio of Haritaki, Bibhitaki, and Amalaki fruits. Flushes toxins from the gastrointestinal tract, supports healthy bowel regularity, and sharpens eyesight.",
    description: `
      <p>Charaka Samhita states: <em>"One who consumes Triphala daily lives for a hundred years free from decrepitude."</em></p>
      <p>Our Triphala Churna contains exclusively the fruit pulp (rind) with the seeds discarded strictly per classical guidelines, ensuring high bioflavonoid and vitamin C content without astringent bitterness.</p>
    `,
    benefits: [
      "Gently cleanses the colon without irritating abdominal cramps or loose motions",
      "Supports balanced gut microbiome and eliminates chronic bloating",
      "Rich in natural Vitamin C and polyphenols for antioxidant cellular protection",
      "Improves ocular health and supports clear vision",
    ],
    ingredients: [
      "Amla / Indian Gooseberry (Emblica officinalis)",
      "Haritaki / Chebulic Myrobalan (Terminalia chebula)",
      "Bibhitaki / Belliric Myrobalan (Terminalia bellirica)",
    ],
    dosage:
      "Take 1 teaspoon (5g) stirred in a cup of lukewarm water at night before retiring.",
    price: 180,
    mrp: 230,
    category: "churna",
    concerns: ["digestion", "detox", "daily-vitality"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "EVERYDAY ESSENTIAL",
    rating: 4.8,
    reviewCount: 88,
    weight: "200 g",
    isFeatured: false,
    isAvailable: true,
    tags: ["triphala", "digestive", "detox", "gut health", "churna"],
  },
  {
    id: "ga-006",
    slug: "mahanarayan-taila-pain-relief",
    name: "Mahanarayan Tailam Classical Joint & Muscle Oil",
    botanicalSubtitle: "52-Herb Therapeutic Decoction For Arthritis, Sciatica & Stiff Joints",
    shortDescription:
      "Authentic classical oil simmered with Dashamoola, Ashwagandha, and Bala roots. Relieves acute joint inflammation, muscular cramps, and lower back soreness.",
    description: `
      <p>Mahanarayan Taila is the gold-standard remedy in Ayurveda for pacifying aggravated Vata dosha residing in the skeletal joints and nervous system.</p>
      <p>Crafted over multiple boiling cycles with 52 rare herbs, pure camphor, and rock salt, this oil penetrates deep through the dermis to lubricate cartilaginous joints and dissolve stiffness.</p>
    `,
    benefits: [
      "Eases chronic knee, joint, shoulder, and lumbar spine stiffness",
      "Improves range of motion and joint flexibility in senior citizens",
      "Soothes muscle spasms, sports sprains, and neural pain like sciatica",
      "Accelerates post-exercise muscle recovery and blood circulation",
    ],
    ingredients: [
      "Dashamoola (Ten Sacred Roots Blend)",
      "Bala Root (Sida cordifolia)",
      "Ashwagandha (Withania somnifera)",
      "Rasna (Pluchea lanceolata)",
      "Camphor (Cinnamomum camphora)",
      "Pure Black Sesame Oil",
    ],
    dosage:
      "Warm the oil slightly by placing the bottle in hot water. Massage into affected areas with firm, rhythmic strokes for 15 minutes. Follow with a warm fomentation if desired.",
    price: 380,
    mrp: 490,
    category: "oils",
    concerns: ["joint-pain", "relaxation"],
    image:
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "PAIN RELIEF",
    rating: 4.9,
    reviewCount: 76,
    weight: "200 ml",
    isFeatured: true,
    isAvailable: true,
    tags: ["joint pain", "pain relief oil", "arthritis", "mahanarayan", "herbal oil"],
  },
  {
    id: "ga-007",
    slug: "khamira-abresham-hakim-arshad-wala",
    name: "Khamira Abresham Hakim Arshad Wala (Unani)",
    botanicalSubtitle: "Noble Unani Cardio-Protective Confection With Pure Pearl & Silk Cocoon",
    shortDescription:
      "Prestigious Unani elixir formulated with Raw Silk Cocoon, Amber, Pearl, and Saffron. Tonifies the heart, relieves palpitation, and clears mental fog.",
    description: `
      <p>Originally formulated for royal courts by legendary Hakim Arshad, this royal Unani confection (Khamira) acts as an incomparable <em>Muqawwi-e-Qalb</em> (Heart Tonic) and <em>Muqawwi-e-Dimagh</em> (Brain Tonic).</p>
      <p>Prepared through prolonged hand-kneading of silk cocoon decoction until an airy, silvery paste forms, decorated with edible pure silver foil (Warq-e-Nuqra).</p>
    `,
    benefits: [
      "Strengthens cardiac muscles and stabilizes nervous palpitations",
      "Relieves intellectual fatigue, memory lapses, and cerebral weakness",
      "Restores energy and accelerates convalescence after prolonged illness",
      "Enhances natural immunity and respiratory resilience",
    ],
    ingredients: [
      "Raw Silk Cocoon / Abresham Muqarrad (Bombyx mori)",
      "Purified Pearl Powder / Marwareed (Pinctada margaritifera)",
      "Amber / Ambar (Ambergris extract)",
      "Pure Kashmiri Saffron (Crocus sativus)",
      "Silver Leaf / Warq Nuqra",
      "Organic Rose Water Distillate / Arq Gulab",
    ],
    dosage:
      "Consume 3g to 5g (about half a teaspoon) first thing in the morning on an empty stomach with a cup of warm milk or Arq Gaozaban.",
    price: 680,
    mrp: 850,
    category: "unani",
    concerns: ["heart-memory", "nerve-tonic", "daily-vitality"],
    image:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "ROYAL HERITAGE",
    rating: 5.0,
    reviewCount: 39,
    weight: "75 g",
    isFeatured: true,
    isAvailable: true,
    tags: ["unani", "khamira", "heart health", "brain tonic", "memory", "tibb"],
  },
  {
    id: "ga-008",
    slug: "royal-kesar-amla-chyawanprash",
    name: "Shahi Kesar Amla Chyawanprash (Double Strength)",
    botanicalSubtitle: "Classical Immunity Rasayana Cooked With 48 Forest Herbs In Wild Honey",
    shortDescription:
      "Authentic handmade Chyawanprash according to the Sharangadhara Samhita. Infused with fresh forest Amla, A2 Cow Ghee, Saffron, and pure Shilajit.",
    description: `
      <p>Unlike commercial sugar-loaded pastes, Galaxy Ayurveda's Chyawanprash is prepared in small copper vessels using fresh wild amla (never dried powder), slowly simmered in organic A2 Desi Cow Ghee and sweetened exclusively with unrefined raw sugarcane jaggery and forest honey.</p>
      <p>Provides rich natural Vitamin C, enhances Ojas (vital immunity), and builds an impenetrable respiratory shield during seasonal transitions.</p>
    `,
    benefits: [
      "Builds powerful resistance against seasonal flu, sore throat, and allergies",
      "Enriches pulmonary lung capacity and clears bronchial airways",
      "Improves digestion, metabolism, and youthfulness across all age groups",
      "Rich in natural antioxidants that neutralize environmental free radicals",
    ],
    ingredients: [
      "Fresh Wild Amla Pulp (Phyllanthus emblica)",
      "A2 Desi Cow Ghee (Gir Cow)",
      "Grade-1 Kashmiri Saffron (Crocus sativus)",
      "Purified Himalayan Shilajit (Asphaltum punjabianum)",
      "Pippali, Cardamom, Clove, Cinnamon",
      "Wild Himalayan Forest Honey",
    ],
    dosage:
      "Adults: 1 tablespoon twice daily. Children: 1 teaspoon daily. Best consumed with warm milk on an empty stomach.",
    price: 540,
    mrp: 699,
    category: "immunity",
    concerns: ["seasonal-infections", "daily-vitality", "cough-relief"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "SEASONAL FAVORITE",
    rating: 4.9,
    reviewCount: 142,
    weight: "500 g",
    isFeatured: true,
    isAvailable: true,
    tags: ["chyawanprash", "immunity", "kesar", "amla", "rasayana", "ojas"],
  },
  {
    id: "ga-009",
    slug: "brahmi-shankhpushpi-medhya-vati",
    name: "Medhya Rasayana Brahmi & Shankhpushpi Vati",
    botanicalSubtitle: "Focus, Memory Retention & Nervous System Calming Herbal Tablets",
    shortDescription:
      "Concentrated water-extract tablets of Brahmi, Shankhpushpi, and Gotu Kola. Enhances cognitive acuity, calms nervous restlessness, and supports exam memory.",
    description: `
      <p>Medhya herbs are designated in Ayurvedic pharmacopoeia specifically for nurturing the <em>Manovaha Srotas</em> (channels of mental perception and memory).</p>
      <p>These pure herbal extract tablets promote alpha brain waves, helping calm mental chatter while sharpening analytical focus and concentration.</p>
    `,
    benefits: [
      "Enhances memory retention, recall speed, and focus duration",
      "Relieves academic and professional stress and anxiety",
      "Non-habit forming botanical formulation with zero sedative drowsiness",
      "Nourishes neural synapses and promotes peaceful sleep",
    ],
    ingredients: [
      "Waterhyssop / Brahmi Extract (Bacopa monnieri)",
      "Morning Glory / Shankhpushpi Extract (Convolvulus pluricaulis)",
      "Indian Pennywort / Mandukaparni (Centella asiatica)",
      "Ashwagandha (Withania somnifera)",
    ],
    dosage:
      "Take 1 to 2 tablets twice daily with water or warm milk after meals.",
    price: 320,
    mrp: 425,
    category: "tablets",
    concerns: ["calm-mind", "heart-memory"],
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "100% EXTRACT",
    rating: 4.8,
    reviewCount: 51,
    weight: "60 Tablets",
    isFeatured: false,
    isAvailable: true,
    tags: ["brahmi", "memory", "brain health", "focus", "medhya vati", "tablets"],
  },
  {
    id: "ga-010",
    slug: "vasaka-kantakari-herbal-cough-syrup",
    name: "Kas-Har Swas Vasaka & Tulsi Herbal Cough Syrup",
    botanicalSubtitle: "Soothing Bronchial Decongestant With Honey, Kantakari & Pippali",
    shortDescription:
      "Fast-acting, non-drowsy herbal syrup for dry hacking coughs, productive wet phlegm, and throat irritation. Made with pure unprocessed honey and Vasaka juice.",
    description: `
      <p>Kas-Har Swas combines classical liquefying and expectorant herbs that liquefy stubborn mucosal congestion without causing lethargy or dryness in the mouth.</p>
      <p>Safe for adults and children, formulated without alcohol, codeine, or artificial sweeteners.</p>
    `,
    benefits: [
      "Liquefies stubborn mucous phlegm and clears congested bronchial passages",
      "Quickly coats and calms ticklish, irritated throat lining",
      "Non-sedative formula suitable for active working hours and children",
      "Boosts upper respiratory tract defense against dust and smog pollutants",
    ],
    ingredients: [
      "Malabar Nut / Vasaka Juice (Adhatoda vasica)",
      "Wild Kantakari (Solanum xanthocarpum)",
      "Holy Basil / Tulsi (Ocimum sanctum)",
      "Long Pepper / Pippali (Piper longum)",
      "Unprocessed Raw Forest Honey",
    ],
    dosage:
      "Adults: 2 teaspoons (10ml) 3 times daily. Children: 1 teaspoon (5ml) 2-3 times daily in warm water.",
    price: 165,
    mrp: 210,
    category: "syrups",
    concerns: ["cough-relief", "seasonal-infections"],
    image:
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "NON-DROWSY",
    rating: 4.9,
    reviewCount: 67,
    weight: "200 ml",
    isFeatured: false,
    isAvailable: true,
    tags: ["cough syrup", "respiratory", "tulsi", "vasaka", "bronchial care"],
  },
];

