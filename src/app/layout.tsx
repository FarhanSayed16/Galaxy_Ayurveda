import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { CategoryBar } from "@/components/layout/CategoryBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { BackToTop } from "@/components/shared/BackToTop";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDF8F0] text-charcoal font-sans">
        <AnnouncementBar />
        <Navbar />
        <CategoryBar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}
