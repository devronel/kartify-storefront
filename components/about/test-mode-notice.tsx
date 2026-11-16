import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function TestModeNotice() {
  return (
    <Alert>
      <Info aria-hidden="true" />
      <AlertTitle>This store runs in test mode</AlertTitle>
      <AlertDescription>
        Payments are simulated and no money is charged. Please don't enter real personal or payment information.
      </AlertDescription>
    </Alert>
  );
}
