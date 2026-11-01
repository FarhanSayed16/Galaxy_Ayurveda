import { MessageCircle } from "lucide-react";
import { generateWhatsAppOrderLink, WhatsAppProductPayload } from "@/lib/whatsapp";

interface WhatsAppOrderButtonProps {
  product: WhatsAppProductPayload;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "outline";
}

export function WhatsAppOrderButton({
  product,
  size = "md",
  className = "",
  variant = "primary",
}: WhatsAppOrderButtonProps) {
  const link = generateWhatsAppOrderLink(product);

  const sizeClasses = {
    sm: "py-2 px-3 text-xs gap-1.5",
    md: "py-2.5 px-4 text-xs tracking-wider uppercase gap-2",
    lg: "py-3.5 px-6 text-sm tracking-wider uppercase gap-2.5 font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-[#25D366] hover:bg-[#20b858] text-white shadow-sm hover:shadow",
    outline:
      "bg-[#FAF6F0] hover:bg-[#1B4332] text-forest hover:text-white border border-forest/40 hover:border-forest",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded font-sans font-medium transition-all duration-200 active:scale-[0.99] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle
        className={`${size === "lg" ? "w-5 h-5" : "w-4 h-4"} fill-current`}
      />
      <span>Order on WhatsApp</span>
    </a>
  );
}

