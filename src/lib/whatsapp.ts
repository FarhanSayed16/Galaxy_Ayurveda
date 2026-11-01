import { siteConfig } from "@/data/siteConfig";

export interface WhatsAppProductPayload {
  name: string;
  price: number;
  mrp?: number;
  weight?: string;
  slug?: string;
}

/**
 * Generates direct WhatsApp click-to-order link with pre-filled product details
 */
export function generateWhatsAppOrderLink(product: WhatsAppProductPayload): string {
  const discountText =
    product.mrp && product.mrp > product.price
      ? ` (MRP: ₹${product.mrp} - Special Offer!)`
      : "";

  const weightText = product.weight ? `\n⚖️ Pack Size: ${product.weight}` : "";
  const productUrl = product.slug ? `\n🔗 Link: ${siteConfig.url}/products/${product.slug}` : "";

  const message = [
    `*Order Request — Galaxy Ayurveda* 🌿`,
    `----------------------------------------`,
    `Hello! I would like to order the following herbal product:`,
    ``,
    `📦 *Product:* ${product.name}`,
    `💰 *Price:* ₹${product.price}${discountText}`,
    weightText,
    productUrl,
    ``,
    `----------------------------------------`,
    `Please confirm product availability, delivery charges, and payment details (UPI/Cash on Delivery).`,
    `My delivery address and pincode are: `,
  ]
    .filter((line) => line !== undefined)
    .join("\n");

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates direct WhatsApp consultation link for herbalist inquiry
 */
export function generateWhatsAppConsultationLink(concern?: string): string {
  const topic = concern ? ` regarding *${concern}*` : "";
  const message = [
    `*Herbalist Consultation — Galaxy Ayurveda* 🌿`,
    `----------------------------------------`,
    `Hello Doctor / Herbalist!`,
    `I am looking for Ayurvedic / Unani advice${topic}.`,
    ``,
    `Could you please recommend the most effective natural formulation for my wellness goal?`,
    `Thank you!`,
  ].join("\n");

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates generic WhatsApp enquiry link
 */
export function generateWhatsAppEnquiryLink(): string {
  const message = [
    `*Enquiry — Galaxy Ayurveda* 🌿`,
    `Hello! I am browsing the Galaxy Ayurveda website and have a few questions about your herbal formulations and home delivery.`,
    `Could you please assist me?`,
  ].join("\n");

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

