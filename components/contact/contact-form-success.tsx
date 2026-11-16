import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ContactFormSuccess() {
  return (
    <Alert>
      <CheckCircle2 aria-hidden="true" />
      <AlertTitle>Message sent</AlertTitle>
      <AlertDescription>
        Thanks for reaching out. I&apos;ll get back to you soon.
      </AlertDescription>
    </Alert>
  );
}
