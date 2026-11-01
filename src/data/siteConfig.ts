export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  establishedYear: number;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string; // digits only with country code, e.g. 919876543210
    whatsappDisplay: string;
    email: string;
    address: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    businessHours: string;
    consultationHours: string;
    googleMapsEmbedUrl: string;
  };
  announcement: {
    isActive: boolean;
    text: string;
    badge: string;
    link?: string;
  };
  business: {
    fssaiLicense: string;
    ayushLicense: string;
    drugLicense: string;
    gstNumber: string;
  };
  social: {
    instagram: string;
    facebook: string;
    whatsappCommunity: string;
    youtube?: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Galaxy Ayurveda",
  shortName: "Galaxy Ayurveda",
  tagline: "Authentic Herbal, Ayurvedic & Unani Wellness",
  description:
    "Galaxy Ayurveda is your trusted dispensary for authentic 100% herbal, traditional Ayurvedic formulations and certified Unani medicines. Pure herbs, time-honored remedies, and direct herbalist consultations.",
  url: "https://galaxyayurveda.com",
  establishedYear: 2018,
  contact: {
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "care@galaxyayurveda.com",
    address: "Galaxy Herbals & Ayurvedic Dispensary, Main Market Road",
    area: "Opp. City Central Hospital",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
    businessHours: "Monday – Saturday: 9:30 AM – 9:00 PM",
    consultationHours: "Daily: 10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8090547494485!2d72.825833!3d18.932222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzU2LjAiTiA3MsKwNDknMzMuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  },
  announcement: {
    isActive: true,
    text: "🌿 Flat 15% OFF on Ayurvedic Winter Wellness Combos • Free Delivery on orders above ₹499",
    badge: "Special Offer",
    link: "/products",
  },
  business: {
    fssaiLicense: "FSSAI: 21523000000000",
    ayushLicense: "AYUSH Reg: MH/AYU/2018/042",
    drugLicense: "DL No: MH-MZ1-482910",
    gstNumber: "27AAAAA0000A1Z5",
  },
  social: {
    instagram: "https://instagram.com/galaxyayurveda",
    facebook: "https://facebook.com/galaxyayurveda",
    whatsappCommunity: "https://chat.whatsapp.com/galaxyayurveda",
  },
  seo: {
    defaultTitle: "Galaxy Ayurveda | 100% Herbal, Ayurvedic & Unani Formulations",
    titleTemplate: "%s | Galaxy Ayurveda",
    description:
      "Order authentic herbal medicines, classical Ayurvedic churnas, cold-pressed therapeutic oils, and Unani formulations with fast delivery and WhatsApp order convenience.",
    keywords: [
      "Galaxy Ayurveda",
      "Ayurvedic medicine online",
      "Unani medicine store",
      "herbal churnas",
      "therapeutic hair oils",
      "kumkumadi tailam",
      "ashwagandha powder",
      "ayurvedic remedies",
      "100% herbal shop",
    ],
    ogImage: "/images/brand/og-image.jpg",
  },
};

