import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductCatalogView } from "@/components/products/ProductCatalogView";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} — Classical Formulations`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      {/* Breadcrumb Trail */}
      <div className="bg-[#FAF6F0] border-b border-[#e8dfcd]">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/products" },
            { label: category.name },
          ]}
        />
      </div>

      {/* Interactive Catalog focused on this category */}
      <ProductCatalogView
        initialProducts={products}
        initialCategory={category.slug}
        pageTitle={category.name}
        pageDescription={category.description}
      />
    </div>
  );
}
