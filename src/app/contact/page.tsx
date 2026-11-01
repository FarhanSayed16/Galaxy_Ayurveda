import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Truck,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Dispensary Location",
  description:
    "Visit the Galaxy Ayurveda dispensary, connect with our herbalists on WhatsApp, or call our customer helpline for authentic Ayurvedic and Unani medicines.",
};

const faqs = [
  {
    q: "How does ordering on WhatsApp work?",
    a: "Simply browse our catalog and click 'Order on WhatsApp' on any product. A pre-formatted message with the product name and price will open in WhatsApp. Confirm your delivery address, choose your payment mode (COD or UPI), and we will dispatch your package within 24 hours.",
  },
  {
    q: "What payment methods are supported?",
    a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm), direct bank transfers (NEFT/IMPS), and Cash on Delivery (COD) across India.",
  },
  {
    q: "How long does home delivery take?",
    a: "Deliveries within Mumbai and neighboring suburbs are fulfilled within 24–48 hours. Pan-India orders are dispatched via priority express couriers and typically arrive within 2–5 business days.",
  },
  {
    q: "Are your formulations authentic and licensed?",
    a: "Yes, 100%. Galaxy Ayurveda is a licensed dispensary holding valid AYUSH registration, state drug manufacturing & retail licenses, and FSSAI certification for all herbal churnas and tonics.",
  },
  {
    q: "Can I receive guidance on which herb suits my Dosha?",
    a: "Absolutely! Our herbalist is available daily on WhatsApp for complimentary consultations to guide you on dosage, timing (kala), and dietary lifestyle tips.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      {/* Breadcrumb Trail */}
      <div className="bg-[#FAF6F0] border-b border-[#e8dfcd]">
        <Breadcrumbs items={[{ label: "Contact & Dispensary Location" }]} />
      </div>

      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#112d22] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-gold-light">
            We Are Here To Assist Your Healing Journey
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Visit Our Dispensary & Reach Our Vaidyas
          </h1>
          <p className="text-sm text-[#cfdec4] max-w-xl mx-auto">
            Whether you need dosage advice, custom herbal blends, or want to place
            an order directly, we welcome your inquiries.
          </p>
        </div>
      </section>

      {/* Main Grid: Channels & Interactive Form */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact Methods */}
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-dark block mb-1">
                Dispensary Channels
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest">
                Direct Means of Communication
              </h2>
              <div className="w-14 h-0.5 bg-gold mt-2 mb-4" />
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <div className="bg-white p-5 rounded-lg border border-[#e8dfcd] flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-sm text-charcoal">
                    WhatsApp Order & Consultation Desk
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Fastest way to order, share prescription, or ask questions.
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                  >
                    <span>Chat on WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                    &rarr;
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-5 rounded-lg border border-[#e8dfcd] flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-sm text-charcoal">
                    Dispensary Helpline
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Speak directly with our store staff for stock verification.
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold-dark"
                  >
                    <span>Call Store: {siteConfig.contact.phoneDisplay}</span>
                    &rarr;
                  </a>
                </div>
              </div>

              {/* Physical Location Card */}
              <div className="bg-white p-5 rounded-lg border border-[#e8dfcd] flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-sm text-charcoal">
                    Dispensary Address
                  </h4>
                  <p className="text-xs text-charcoal-light mt-0.5 leading-relaxed">
                    {siteConfig.contact.address}, {siteConfig.contact.area},<br />
                    {siteConfig.contact.city}, {siteConfig.contact.state} —{" "}
                    {siteConfig.contact.pincode}
                  </p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-white p-5 rounded-lg border border-[#e8dfcd] flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-forest" />
                </div>
                <div className="flex-1 text-xs">
                  <h4 className="font-serif font-bold text-sm text-charcoal">
                    Operating Hours
                  </h4>
                  <p className="text-charcoal-light mt-1">
                    <strong>Dispensary Counter:</strong>{" "}
                    {siteConfig.contact.businessHours}
                  </p>
                  <p className="text-charcoal-light mt-0.5">
                    <strong>Vaidya Consultation:</strong>{" "}
                    {siteConfig.contact.consultationHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Interactive Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-12 bg-[#FAF6F0] border-y border-[#e8dfcd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-forest block mb-1">
              Store Location
            </span>
            <h3 className="font-serif text-2xl font-normal text-forest">
              Find Our Dispensary on Google Maps
            </h3>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden border border-[#e8dfcd] shadow-md bg-stone-100">
            <iframe
              title="Galaxy Ayurveda Store Location"
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-gold-dark block mb-1">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl font-normal text-forest">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-2" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg border border-[#e8dfcd] shadow-2xs"
            >
              <h4 className="font-serif font-bold text-sm sm:text-base text-forest flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-light mt-2 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
