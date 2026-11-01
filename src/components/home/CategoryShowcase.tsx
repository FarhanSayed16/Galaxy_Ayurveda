import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export function CategoryShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#e8dfcd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-gold-dark block mb-2">
            Time-Honored Pharmacopoeia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-forest tracking-tight">
            Shop by Classical Category
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
            Every formulation is prepared adhering to classical texts — Charaka
            Samhita, Sharangadhara Samhita, and Greco-Arabic Unani Tibb.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative flex flex-col bg-white rounded-lg border border-[#e8dfcd] overflow-hidden hover:border-forest hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge if present */}
                {cat.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#8a3324] text-white text-[9px] font-bold tracking-wider uppercase rounded shadow-xs">
                    {cat.badge}
                  </span>
                )}

                {/* Category name overlay on image */}
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <h3 className="font-serif text-base sm:text-lg font-medium leading-tight drop-shadow-xs">
                    {cat.shortTitle}
                  </h3>
                </div>
              </div>

              {/* Bottom Card details */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                  {cat.subtitle}
                </p>

                <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold-dark transition-colors">
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

