import { Metadata } from "next";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductCatalogView } from "@/components/products/ProductCatalogView";

export const metadata: Metadata = {
  title: "Shop Authentic Herbal & Unani Products",
  description:
    "Explore our complete dispensary catalog of 100% natural Ayurvedic churnas, medicated hair and joint oils, herbal cough syrups, and Unani tonics. Order easily on WhatsApp.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      {/* Breadcrumb Navigation (Matching Screenshot 1 & 2: HOME > SHOP >>) */}
      <div className="bg-[#FAF6F0] border-b border-[#e8dfcd]">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/products" },
            { label: "All Formulations" },
          ]}
        />
      </div>

      {/* Main Interactive Catalog */}
      <ProductCatalogView
        initialProducts={products}
        pageTitle="Shop Authentic Ayurvedic Products"
        pageDescription="Formulated strictly in adherence to classical Charaka Samhita and Unani Tibb standards. Direct home delivery across India."
      />
    </div>
  );
}
