import { Leaf } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#FDF8F0] text-center">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-forest/20 border-t-forest animate-spin" />
        <Leaf className="w-6 h-6 text-gold absolute" />
      </div>
      <p className="font-serif text-base text-forest font-medium tracking-wide">
        Galaxy Ayurveda
      </p>
      <p className="text-xs text-charcoal-muted mt-1 uppercase tracking-widest">
        Preparing Authentic Formulations...
      </p>
    </div>
  );
}

