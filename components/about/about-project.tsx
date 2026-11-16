import { Store } from "lucide-react";

export function AboutProject() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          About this project
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Kartify is a demo online store. It's built the way a real store would be: a storefront for shoppers, an admin area for managing
          products, and a backend that handles carts, orders, and payments. Nothing here is for
          sale, and no real orders are shipped.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="flex aspect-video items-center justify-center rounded-xl bg-muted"
      >
        <Store className="size-12 text-muted-foreground" />
      </div>
    </section>
  );
}
