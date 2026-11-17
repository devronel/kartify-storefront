import ProductList from "@/components/shop/product-list";

export const metadata = {
  title: "Shop the Best Deals Online",
  description:
    "Discover a wide range of products at unbeatable prices. Shop electronics, fashion, home essentials, and more with fast shipping and secure checkout.",
};

export default function Shop() {

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Shop All Collections</h1>
          <p className="mt-1 text-foreground">Browse Kartify's Store full collection of premium apparel, accessories, and smart tech.</p>
        </div>

        <ProductList />

      </div>
    </div>
  );
}
