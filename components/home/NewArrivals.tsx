import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NewArrival = {
  name: string;
  slug: string;
  category: string;
  price: string;
  badge?: "New" | "Sold out";
  soldOut?: boolean;
};

const products: NewArrival[] = [
  { name: "Classic Cotton Tee", slug: "classic-cotton-tee", category: "Clothing", price: "₱499.00", badge: "New" },
  { name: "Everyday Canvas Tote", slug: "everyday-canvas-tote", category: "Bags", price: "₱349.00", badge: "New" },
  { name: "Minimal Sling Bag", slug: "minimal-sling-bag", category: "Bags", price: "From ₱899.00", badge: "New" },
  { name: "Ceramic Coffee Mug", slug: "ceramic-coffee-mug", category: "Home & Living", price: "₱249.00", badge: "New" },
  { name: "Relaxed Hoodie", slug: "relaxed-hoodie", category: "Clothing", price: "From ₱1,299.00" },
  { name: "Leather Card Holder", slug: "leather-card-holder", category: "Accessories", price: "₱599.00" },
  { name: "Linen Throw Pillow", slug: "linen-throw-pillow", category: "Home & Living", price: "₱749.00" },
  { name: "Classic Cap", slug: "classic-cap", category: "Accessories", price: "₱399.00", badge: "Sold out", soldOut: true },
];

export function NewArrivals() {
  return (
    <section aria-labelledby="new-arrivals-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="new-arrivals-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              New arrivals
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Fresh additions to the store.
            </p>
          </div>

          <Link
            href="/shop"
            className={buttonVariants({ variant: "link", className: "w-fit self-start px-0 sm:self-auto" })}
          >
            View all
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </div>

        {/* TODO(logic): fetch the latest products (public endpoint, newest first, limit 8) */}
        {/* TODO(logic): replace this static card with the shared ProductCard */}
        {/* TODO(logic): hide the section when there are no products or the request fails */}
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => {
            const headingId = `new-arrival-${product.slug}`;

            return (
              <li key={product.slug}>
                <article className="group relative flex h-full flex-col gap-2">
                  <div className="relative">
                    <div
                      className={cn(
                        "flex aspect-square items-center justify-center rounded-lg bg-muted transition-shadow group-hover:shadow-md",
                        product.soldOut && "opacity-60"
                      )}
                    >
                      {/* TODO(logic): use the real product image with the default fallback */}
                      <Package className="size-10 text-muted-foreground" aria-hidden="true" />
                    </div>

                    {/* TODO(logic): show the sold-out badge from stock */}
                    {product.badge && (
                      <Badge
                        variant={product.soldOut ? "secondary" : "default"}
                        className="absolute top-2 left-2"
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <h3
                    id={headingId}
                    className="line-clamp-2 text-sm font-medium text-foreground group-hover:underline"
                  >
                    {product.name}
                  </h3>
                  {/* TODO(logic): show "From" only when the product has variants */}
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      product.soldOut ? "text-muted-foreground" : "text-foreground"
                    )}
                  >
                    {product.price}
                  </p>

                  {/* TODO(logic): use the real product detail route */}
                  <Link
                    href={`/shop/${product.slug}`}
                    aria-labelledby={headingId}
                    className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
