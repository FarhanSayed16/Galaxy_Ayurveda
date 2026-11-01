import { siteConfig } from "@/data/siteConfig";
import { Product } from "@/data/products";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Pharmacy", "Store"],
    name: siteConfig.name,
    alternateName: "Galaxy Herbals & Ayurvedic Dispensary",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "21:00",
      },
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images && product.images.length > 0 ? product.images : [product.image],
    description: product.shortDescription,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.isAvailable
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
