import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:gap-12 lg:px-8">
        <div>
          <Badge variant="secondary">Demo store - test mode</Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everyday finds, made simple.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse the collection, add to your cart, and check out online. A demo store built to
            show how a real online shop works.
          </p>

          {/* TODO(logic): confirm the "Shop now" href against the real product listing route */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className={buttonVariants({ size: "lg" })}>
              Shop now
            </Link>
            <Link href="/about" className={buttonVariants({ variant: "outline", size: "lg" })}>
              About the project
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="flex aspect-video items-center justify-center rounded-2xl bg-muted md:aspect-[4/3]"
        >
          <ShoppingBag className="size-16 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
