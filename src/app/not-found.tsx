import Link from "next/link";
import { Leaf, ArrowRight, MessageCircle, Home } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-[#FDF8F0]">
      <div className="max-w-md mx-auto space-y-5">
        <div className="w-16 h-16 rounded-full bg-forest text-gold flex items-center justify-center mx-auto shadow-md">
          <Leaf className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-gold-dark block">
          404 — Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-forest">
          Formulation Not Found
        </h1>

        <div className="w-16 h-0.5 bg-gold mx-auto" />

        <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
          The herbal page or remedy you are seeking may have been renamed or has
          returned to nature. Let us guide you back to our classical collections.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-forest text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-forest-dark transition-colors shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-forest text-forest rounded text-xs font-semibold uppercase tracking-wider hover:bg-forest hover:text-white transition-colors"
          >
            <span>Browse Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#25D366] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#20b858] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

