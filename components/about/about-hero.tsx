import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About Kartify
      </h1>
      <p className="mt-3 max-w-2xl text-lg font-medium text-foreground sm:text-xl">
        A full-stack e-commerce project, built to learn how real online stores work.
      </p>
      <Link href="/shop" className={buttonVariants({ size: "lg", className: "mt-6" })}>
        Browse the store
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Link>
    </section>
  );
}
