import { Code, Globe, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <div>
      <Card className="h-full">
        <CardContent>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Other ways to reach me
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:hello@kartify.example"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <Mail className="size-4" aria-hidden="true" />
                hello@kartify.example
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devronel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <Code className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://ronelflorida-code.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <Globe className="size-4" aria-hidden="true" />
                Portfolio
              </a>
            </li>
          </ul>

          <p className="text-sm text-muted-foreground">
            This is a learning project, so replies can take a few days.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
