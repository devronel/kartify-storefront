const steps = [
  {
    number: "1",
    title: "Find what you like",
    description: "Explore the collection and pick your size or color.",
  },
  {
    number: "2",
    title: "Sign in and check out",
    description: "Choose a delivery address, then pay online on a secure page.",
  },
  {
    number: "3",
    title: "Follow your order",
    description: "Open My orders any time to see its latest status.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2
          id="how-it-works-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          How it works
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Three steps, from browsing to your order.
        </p>

        {/* TODO(logic): confirm the three steps still match the real flow, e.g. if guest checkout is added */}
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.number} className="relative flex gap-4 md:flex-col md:gap-0">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-10 -bottom-8 left-5 w-px bg-border md:top-5 md:bottom-auto md:left-10 md:h-px md:w-[calc(100%-0.5rem)]"
                />
              )}

              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-background text-sm font-semibold text-foreground">
                {step.number}
              </div>

              <div className="md:mt-4">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
