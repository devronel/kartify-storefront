import { Check } from "lucide-react";

const features = [
  "Browse products, including variants such as size and color",
  "Add items to a cart with live stock checks",
  "Save Philippine addresses (barangay, city, province, region)",
  "Check out online with QR Ph through PayMongo",
  "Follow an order from waiting for payment to paid",
  "Admin pages for managing products and categories",
];

export function WhatYouCanTry() {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">What you can try</h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
