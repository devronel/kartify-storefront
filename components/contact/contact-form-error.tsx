import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ContactFormError() {
  return (
    <Alert variant="destructive">
      <AlertTitle>We couldn&apos;t send your message</AlertTitle>
      <AlertDescription>Please check your connection and try again.</AlertDescription>
    </Alert>
  );
}
