import { Badge } from "@/components/ui/badge";

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Java",
  "Spring Boot",
  "MySQL",
  "Flyway",
  "PayMongo",
  "Mailtrap",
];

export function BuiltWith() {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">Built with</h2>

      <ul className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item}>
            <Badge variant="secondary">{item}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
