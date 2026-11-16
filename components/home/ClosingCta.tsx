import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section aria-labelledby="closing-cta-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border bg-muted/40 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2
              id="closing-cta-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Ready to start shopping?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Browse the collection and place a test order in a few minutes.
            </p>

            {/* TODO(logic): remove the test mode note if the store stops being a demo */}
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="size-4 shrink-0" aria-hidden="true" />
              This store runs in test mode. No real payments are taken.
            </p>
          </div>

          {/* TODO(logic): confirm the "Shop now" href against the real product listing route */}
          <Link
            href="/shop"
            className={buttonVariants({ size: "lg", className: "w-full md:w-auto" })}
          >
            Shop now
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
