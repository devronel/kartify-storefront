import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PublicProduct } from "@/types/product";
import { moneyFormat } from "@/lib/helper";
import { Paginate } from "@/types/paginate";
import KartifyPagination from "../shared/kartify-pagination";

type NewArrivalProps = {
  product: Paginate<PublicProduct>,
  page: number
}

export function NewArrivals({ product, page }: NewArrivalProps) {
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

        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {
            product.payload.map((product) => {
              const headingId = `new-arrival-${product.slug}`;

              return (
                <li key={product.slug}>
                  <article className="group relative flex h-full flex-col gap-2">
                    <div className="relative">
                      <div
                        className="flex aspect-square items-center justify-center rounded-lg bg-muted transition-shadow group-hover:shadow-md">
                        <img src={product.primaryImage} alt={product.name} />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <h3 id={headingId} className="line-clamp-2 text-sm font-medium text-foreground group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-foreground">
                      { moneyFormat.format(product.price)}
                    </p>

                    <Link
                      href={`/shop/${product.slug}`}
                      aria-labelledby={headingId}
                      className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </article>
                </li>
              );
            })
          }
        </ul>

        {
          product.totalItems > product.pageSize && (
            <div className="mt-10 flex items-center justify-end">
              <KartifyPagination 
                currentPage={page}
                totalPages={product.totalPages}
                visiblePages={3}
                hasPrevious={product.hasPrevious}
                hasNext={product.hasNext}
              />
            </div>
          )
        }
        
      </div>
    </section>
  );
}
