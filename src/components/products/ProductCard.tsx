"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { generateWhatsAppOrderLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const discount = calculateDiscount(product.price, product.mrp);

  return (
    <div className="group relative flex flex-col bg-white border border-[#e8dfcd] rounded-lg overflow-hidden hover:border-forest/60 hover:shadow-lg transition-all duration-300">
      {/* Top Meta Header: Badge + Rating (Kama Ayurveda Style) */}
      <div className="p-3.5 pb-0 flex items-center justify-between text-[11px] font-sans">
        {product.badge ? (
          <span className="font-semibold uppercase tracking-widest text-[#94382b] text-[10px]">
            {product.badge}
          </span>
        ) : (
          <span className="font-semibold uppercase tracking-widest text-gold-dark text-[10px]">
            100% HERBAL
          </span>
        )}

        <div className="flex items-center gap-1 text-charcoal">
          <span className="font-semibold text-xs">{product.rating.toFixed(1)}</span>
          <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
          <span className="text-charcoal-muted text-[10px]">
            ({product.reviewCount})
          </span>
        </div>
      </div>

      {/* Product Image Area with Hover Zoom */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square w-full bg-[#FAF7F2]/60 overflow-hidden mt-1 p-5 flex items-center justify-center cursor-pointer"
      >
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Weight badge pill */}
        <span className="absolute bottom-2.5 left-3 px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[10px] font-medium text-charcoal-muted rounded border border-border/70 shadow-2xs">
          {product.weight}
        </span>
      </Link>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/products/${product.slug}`} className="block group/title">
            <h3 className="font-serif text-base sm:text-lg font-medium text-charcoal group-hover/title:text-forest line-clamp-1 transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-charcoal-light line-clamp-2 mt-1.5 leading-relaxed min-h-[34px]">
            {product.botanicalSubtitle}
          </p>
        </div>

        {/* Pricing & Wishlist Row */}
        <div className="pt-3 mt-2 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-base sm:text-lg font-bold text-forest">
              {formatPrice(product.price)}
            </span>
            {product.mrp > product.price && (
              <>
                <span className="text-xs text-charcoal-muted line-through">
                  {formatPrice(product.mrp)}
                </span>
                {discount > 0 && (
                  <span className="text-[10px] font-bold text-[#94382b] bg-[#faf0ee] px-1.5 py-0.2 rounded">
                    {discount}% OFF
                  </span>
                )}
              </>
            )}
          </div>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-1 text-charcoal-muted hover:text-red-600 transition-colors"
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? "fill-red-600 text-red-600" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Bottom CTA Action Button (Refined Kama Ayurveda aesthetic) */}
      <div className="p-3 pt-0">
        <a
          href={generateWhatsAppOrderLink({
            name: product.name,
            price: product.price,
            mrp: product.mrp,
            weight: product.weight,
            slug: product.slug,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-forest text-forest hover:text-white border border-forest/50 hover:border-forest rounded font-semibold text-xs tracking-[0.12em] uppercase transition-all duration-200 group/btn shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-forest group-hover/btn:text-gold fill-current transition-colors" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
