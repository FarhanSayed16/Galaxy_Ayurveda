export interface Category {
  slug: string;
  name: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  featured?: boolean;
  subcategories: { name: string; slug: string }[];
  concerns: { name: string; slug: string }[];
}

export const categories: Category[] = [
  {
    slug: "skincare",
    name: "Pure Ayurvedic Skincare",
    shortTitle: "Skincare",
    subtitle: "Sacred Kumkumadi, saffron elixirs & botanical face polishes",
    description:
      "Handcrafted herbal face oils, cleansers, and natural balms infused with Kashmiri Saffron, Sandalwood, and Rose to nourish your skin gently.",
    image:
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    featured: true,
    subcategories: [
      { name: "Facial Elixirs & Oils", slug: "facial-oils" },
      { name: "Herbal Face Cleansers", slug: "face-cleansers" },
      { name: "Ayurvedic Night Balms", slug: "night-balms" },
      { name: "Natural Ubtan & Packs", slug: "ubtans" },
      { name: "Pure Floral Mists", slug: "floral-mists" },
    ],
    concerns: [
      { name: "Pigmentation & Dark Spots", slug: "pigmentation" },
      { name: "Dullness & Radiant Glow", slug: "glow" },
      { name: "Anti-Ageing & Fine Lines", slug: "anti-ageing" },
      { name: "Acne & Blemish Control", slug: "acne-control" },
    ],
  },
  {
    slug: "haircare",
    name: "Herbal Haircare & Scalp Therapies",
    shortTitle: "Haircare",
    subtitle: "Bhringraj, Neelibhringadi & amla infused scalp elixirs",
    description:
      "Time-honored Kshirabala and Bhringraj oils prepared using the traditional taila paka vidhi to strengthen roots and prevent premature graying.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    featured: true,
    subcategories: [
      { name: "Scalp Revitalizing Oils", slug: "scalp-oils" },
      { name: "Ayurvedic Hair Cleansers", slug: "hair-cleansers" },
      { name: "Herbal Hair Conditioners", slug: "hair-conditioners" },
      { name: "Organic Henna & Indigo", slug: "organic-hair-color" },
      { name: "Hair Masks & Lepas", slug: "hair-masks" },
    ],
    concerns: [
      { name: "Hair Loss & Thinning", slug: "hair-loss" },
      { name: "Dandruff & Flaky Scalp", slug: "dandruff" },
      { name: "Premature Graying", slug: "premature-graying" },
      { name: "Dry & Frizzy Strands", slug: "dryness-damage" },
    ],
  },
  {
    slug: "churna",
    name: "Traditional Ayurvedic Churna (Powders)",
    shortTitle: "Churna",
    subtitle: "Micro-pulverized 100% pure single & compound herbs",
    description:
      "Pure single-origin herbs like Ashwagandha, Triphala, Shatavari, and Yashtimadhu pulverized according to Ayurvedic Pharmacopoeia standards.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    subcategories: [
      { name: "Single Herb Powders", slug: "single-herb" },
      { name: "Classical Compound Churnas", slug: "compound-churna" },
      { name: "Digestive Powders", slug: "digestive-churna" },
      { name: "Vitality Formulations", slug: "vitality-churna" },
    ],
    concerns: [
      { name: "Digestion & Constipation", slug: "digestion" },
      { name: "Vigor & Stamina", slug: "stamina" },
      { name: "Sleep & Calm Mind", slug: "calm-mind" },
      { name: "Daily Detoxification", slug: "detox" },
    ],
  },
  {
    slug: "oils",
    name: "Therapeutic Medicated Oils (Tailam)",
    shortTitle: "Oils",
    subtitle: "Cold-pressed herbal infusions cooked slowly over decoctions",
    description:
      "Pain relief oils, baby massage oils, and abhyanga oils made using pure sesame and coconut oils simmered with potent medicinal decoctions.",
    image:
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=800&q=80",
    featured: true,
    subcategories: [
      { name: "Joint & Pain Relief Oils", slug: "pain-relief-oils" },
      { name: "Full Body Massage Oils", slug: "abhyanga-oils" },
      { name: "Nasal Therapy (Nasya Oils)", slug: "nasya-oils" },
      { name: "Traditional Baby Oils", slug: "baby-oils" },
    ],
    concerns: [
      { name: "Joint & Back Pain Relief", slug: "joint-pain" },
      { name: "Sinus & Migraine Relief", slug: "sinus-relief" },
      { name: "Deep Relaxation", slug: "relaxation" },
    ],
  },
  {
    slug: "tablets",
    name: "Ayurvedic Tablets & Vati (Ghanvati)",
    shortTitle: "Tablets & Vati",
    subtitle: "Concentrated aqueous herbal extracts compressed into tablets",
    description:
      "Pure Ghanvati and classical Rasayanas pressed without synthetic glues or binding chemicals, delivering rapid bioavailability.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      { name: "Classical Guggulu Formulations", slug: "guggulu" },
      { name: "Pure Herb Ghanvati", slug: "ghanvati" },
      { name: "Ayurvedic Bhasma & Rasayan", slug: "rasayana" },
    ],
    concerns: [
      { name: "Cholesterol & Metabolism", slug: "metabolism" },
      { name: "Immunity & White Blood Cell Count", slug: "immunity" },
      { name: "Blood Sugar Balance", slug: "sugar-balance" },
    ],
  },
  {
    slug: "syrups",
    name: "Herbal Syrups & Asava Arishta",
    shortTitle: "Syrups & Tonics",
    subtitle: "Naturally self-fermented classical Ayurvedic wines & tonics",
    description:
      "Ancient bio-fermented tonics (Drakshasava, Ashwagandharishta) and soothing cough syrups made with organic honey, vasaka, and kantakari.",
    image:
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      { name: "Asava & Arishta Fermentations", slug: "asava-arishta" },
      { name: "Respiratory Syrups", slug: "cough-syrups" },
      { name: "Digestive Tonics", slug: "digestive-tonics" },
      { name: "Women's Health Tonics", slug: "womens-tonics" },
    ],
    concerns: [
      { name: "Chronic Cough & Congestion", slug: "cough-relief" },
      { name: "General Debility & Fatigue", slug: "fatigue" },
      { name: "Hormonal Balance", slug: "hormonal-balance" },
    ],
  },
  {
    slug: "unani",
    name: "Authentic Unani Tibb Formulations",
    shortTitle: "Unani Medicines",
    subtitle: "Classical Majun, Khamira, Sharbat & Hab preparations",
    description:
      "Prepared under traditional Greco-Arabic Unani principles (Mizaj temperament balance), utilizing herbal distillates, silver foil, and natural resins.",
    image:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage",
    featured: true,
    subcategories: [
      { name: "Classical Majun & Khamira", slug: "majun-khamira" },
      { name: "Sharbat (Herbal Cordials)", slug: "unani-sharbat" },
      { name: "Hab & Qurs (Unani Tablets)", slug: "hab-qurs" },
      { name: "Unani Arq (Herbal Distillates)", slug: "arq-distillates" },
    ],
    concerns: [
      { name: "Heart & Memory Vitality", slug: "heart-memory" },
      { name: "Liver Health & Digestion", slug: "liver-health" },
      { name: "Nerve Tonic & Stamina", slug: "nerve-tonic" },
    ],
  },
  {
    slug: "immunity",
    name: "Immunity & Daily Wellness",
    shortTitle: "Immunity",
    subtitle: "Chyawanprash, Giloy satva & Ojas building formulations",
    description:
      "Authentic Amla-rich Chyawanprash cooked with 48 rare herbs, alongside Giloy satva and turmeric infusions to fortify your family's immune shield.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    badge: "Essential",
    featured: true,
    subcategories: [
      { name: "Classical Chyawanprash", slug: "chyawanprash" },
      { name: "Giloy & Tulsi Extracts", slug: "giloy-tulsi" },
      { name: "Ayush Kwath & Herbal Teas", slug: "kwath-teas" },
    ],
    concerns: [
      { name: "Seasonal Cold & Infections", slug: "seasonal-infections" },
      { name: "Daily Vitality & Ojas", slug: "daily-vitality" },
    ],
  },
];

