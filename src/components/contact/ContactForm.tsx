"use client";

import { useState } from "react";
import { MessageCircle, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("General Inquiry / Consultation");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      `*Dispensary Inquiry — Galaxy Ayurveda* 🌿`,
      `----------------------------------------`,
      `👤 *Name:* ${name || "Anonymous Customer"}`,
      phone ? `📱 *Phone:* ${phone}` : "",
      `🎯 *Topic / Concern:* ${concern}`,
      ``,
      `💬 *Message:*`,
      message || "Hello! I would like to inquire about your herbal formulations.",
      `----------------------------------------`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(waUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#e8dfcd] shadow-xs">
      <div className="flex items-center gap-2 mb-2 text-gold-dark text-xs font-bold uppercase tracking-widest">
        <Sparkles className="w-3.5 h-3.5 text-gold" />
        Instant WhatsApp Desk
      </div>
      <h3 className="font-serif text-2xl font-normal text-forest mb-2">
        Send an Inquiry to Our Herbalist
      </h3>
      <p className="text-xs text-charcoal-muted mb-6 leading-relaxed">
        Fill out this brief form and click to open WhatsApp with your message pre-formatted. Our dispensary vaidyas usually respond within 15–30 minutes.
      </p>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3 text-emerald-800 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-bold">Opening WhatsApp Chat...</p>
            <p className="text-emerald-700">
              If WhatsApp didn't open automatically, you can message us directly at{" "}
              <strong>{siteConfig.contact.whatsappDisplay}</strong>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block uppercase tracking-wider font-semibold text-charcoal mb-1">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-border/80 rounded focus:outline-none focus:border-forest text-charcoal"
          />
        </div>

        <div>
          <label className="block uppercase tracking-wider font-semibold text-charcoal mb-1">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-border/80 rounded focus:outline-none focus:border-forest text-charcoal"
          />
        </div>

        <div>
          <label className="block uppercase tracking-wider font-semibold text-charcoal mb-1">
            Health Concern / Inquiry Subject
          </label>
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-border/80 rounded focus:outline-none focus:border-forest text-charcoal"
          >
            <option>Hair Loss & Scalp Health</option>
            <option>Glowing Skin & Kumkumadi Query</option>
            <option>Joint & Muscular Pain Relief Oil</option>
            <option>Digestion & Triphala Churna</option>
            <option>Immunity & Chyawanprash</option>
            <option>Unani Tibb Formulations & Khamira</option>
            <option>Product Availability & Home Delivery</option>
            <option>General Inquiry / Consultation</option>
          </select>
        </div>

        <div>
          <label className="block uppercase tracking-wider font-semibold text-charcoal mb-1">
            Your Question / Dosage Requirements *
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your requirements, current symptoms, or which product you would like to order..."
            className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-border/80 rounded focus:outline-none focus:border-forest text-charcoal"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold text-xs tracking-widest uppercase rounded shadow transition-all duration-200 mt-2"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          <span>Send via WhatsApp Chat</span>
        </button>
      </form>
    </div>
  );
}

