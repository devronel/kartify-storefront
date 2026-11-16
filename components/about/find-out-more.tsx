import { Code, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FindOutMore() {
  return (
    <section>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold text-foreground">Find out more</h2>

          {/* TODO(logic): replace the sample hrefs and "Your Name" with real details */}
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <Code className="size-4" aria-hidden="true" />
                Source code on GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <Globe className="size-4" aria-hidden="true" />
                Portfolio
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
