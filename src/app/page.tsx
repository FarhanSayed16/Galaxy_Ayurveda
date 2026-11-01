import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-cream">
      <div className="max-w-xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
          100% Pure Herbal & Unani Wellness
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-forest font-bold">
          {siteConfig.name}
        </h1>
        <p className="text-charcoal-light text-base md:text-lg">
          {siteConfig.tagline}
        </p>
        <p className="text-sm text-charcoal-muted">
          Phase 0.1 Setup Complete. Bootstrapping layout and design system...
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/products"
            className="px-6 py-2.5 bg-forest text-white rounded-md hover:bg-forest-dark transition-colors font-medium text-sm"
          >
            Explore Catalog
          </Link>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-forest text-forest rounded-md hover:bg-forest hover:text-white transition-colors font-medium text-sm"
          >
            WhatsApp Support
          </a>
        </div>
      </div>
    </main>
  );
}
