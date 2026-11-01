import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductDetailView } from "@/components/products/ProductDetailView";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Galaxy Ayurveda`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.slug === product.category);

  // Find related products in the same category or sharing health concerns
  const relatedProducts = products.filter(
    (p) =>
      p.id !== product.id &&
      (p.category === product.category ||
        p.concerns.some((c) => product.concerns.includes(c)))
  );

  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      {/* Breadcrumb Bar (Matching Screenshot 1 & 2) */}
      <div className="bg-[#FAF6F0] border-b border-[#e8dfcd]">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/products" },
            {
              label: category ? category.shortTitle : "Formulations",
              href: category ? `/category/${category.slug}` : "/products",
            },
            { label: product.name },
          ]}
        />
      </div>

      {/* Main Interactive Product Detail View */}
      <ProductDetailView
        product={product}
        relatedProducts={relatedProducts}
      />
    </div>
  );
}

