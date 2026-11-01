"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!siteConfig.announcement.isActive || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#232323] text-[#FAF6F0] text-xs py-2 px-4 transition-all duration-300 relative border-b border-[#333333]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center text-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 bg-gold/20 text-gold-light px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider">
            <Sparkles className="w-3 h-3 text-gold" />
            {siteConfig.announcement.badge}
          </span>
          <p className="font-medium tracking-wide">
            {siteConfig.announcement.text}
          </p>
          {siteConfig.announcement.link && (
            <Link
              href={siteConfig.announcement.link}
              className="hidden md:inline underline underline-offset-4 text-gold-light hover:text-white transition-colors ml-1 font-semibold"
            >
              Shop Collection &rarr;
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-stone-400 hover:text-white transition-colors p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-400"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
