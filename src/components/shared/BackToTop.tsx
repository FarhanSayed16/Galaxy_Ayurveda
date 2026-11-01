"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-white/90 backdrop-blur-xs border border-border/80 text-forest rounded-full shadow-md flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest/40 active:scale-95 animate-in fade-in"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
