import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-[#FDF8F0] border-b border-[#e8dfcd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-1.5 text-gold-dark text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Direct From Dispensary
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-forest tracking-tight">
              Featured & Bestselling Formulations
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-2.5 mb-2" />
            <p className="text-sm text-charcoal-light max-w-xl">
              Authentic single powders, medicated oils, and revitalizing elixirs
              verified for purity and packaged fresh upon order.
            </p>
          </div>

          <Link
            href="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest hover:text-gold-dark transition-colors pb-1 border-b border-forest hover:border-gold-dark"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-col Desktop / 2-col Mobile Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

