import Link from "next/link";
import { ArrowRight, Backpack, House, Shirt, Watch } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Clothing",
    slug: "clothing",
    description: "Tees, tops and everyday wear",
    href: "/shop?category=clothing",
    icon: Shirt,
  },
  {
    name: "Bags",
    slug: "bags",
    description: "Carry your essentials",
    href: "/shop?category=bags",
    icon: Backpack,
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Small details that matter",
    href: "/shop?category=accessories",
    icon: Watch,
  },
  {
    name: "Home & Living",
    slug: "home-living",
    description: "Make your space yours",
    href: "/shop?category=home-living",
    icon: House,
  },
];

export function FeaturedCategories() {
  return (
    <section aria-labelledby="shop-by-category-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="shop-by-category-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Shop by category
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Find what you need, faster.
            </p>
          </div>

          <Link
            href="/shop"
            className={buttonVariants({ variant: "link", className: "w-fit self-start px-0 sm:self-auto" })}
          >
            View all products
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </div>

        {/* TODO(logic): fetch real top-level categories with their listing hrefs */}
        {/* TODO(logic): choose how many categories to feature */}
        {/* TODO(logic): render nothing when there are no categories */}
        {/* TODO(logic): confirm the category query parameter on the listing route */}
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const headingId = `featured-category-${category.slug}`;

            return (
              <li key={category.slug}>
                <Card className="group relative h-full transition-all hover:shadow-md hover:ring-foreground/20 has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50">
                  <CardContent className="flex-1 gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                      <Icon className="size-6 text-muted-foreground" aria-hidden="true" />
                    </div>

                    <h3 id={headingId} className="text-base font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>

                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                      Shop now
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>

                    <Link
                      href={category.href}
                      aria-labelledby={headingId}
                      className="absolute inset-0 rounded-xl focus-visible:outline-none"
                    />
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
