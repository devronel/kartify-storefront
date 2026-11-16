import { MapPin, PackageSearch, ShieldCheck } from "lucide-react";

export function ValueProps() {
  return (
    <section aria-labelledby="value-props-heading" className="border-y bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2
          id="value-props-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Shopping made easy
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          The basics, done properly.
        </p>

        {/* TODO(logic): confirm each claim matches a finished feature before publishing */}
        <ul className="mt-8 grid gap-6 md:grid-cols-3 lg:gap-8">
          <li>
            <div className="flex size-12 items-center justify-center rounded-full border bg-background">
              <ShieldCheck className="size-6 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              Secure online payment
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Pay on a secure hosted payment page. We never handle your payment details.
            </p>
          </li>

          <li>
            <div className="flex size-12 items-center justify-center rounded-full border bg-background">
              <PackageSearch className="size-6 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Track your order</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Check your order status and follow each step from payment to delivery.
            </p>
          </li>

          <li>
            <div className="flex size-12 items-center justify-center rounded-full border bg-background">
              <MapPin className="size-6 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              Saved delivery addresses
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Keep Philippine addresses on file, down to the barangay, and check out faster.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
