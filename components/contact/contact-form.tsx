import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <Card>
      <CardContent>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Send a message</h2>
        <p className="text-sm text-muted-foreground">
          <span aria-hidden="true" className="text-destructive">*</span> Required
        </p>

        {/* TODO(logic): show ContactFormSuccess here after a successful send */}
        {/* TODO(logic): show ContactFormError here when the request fails */}

        {/* TODO(logic): submit the message to the backend */}
        <form className="mt-2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="full-name">
              Full name <span aria-hidden="true" className="text-destructive">*</span>
            </Label>
            <Input id="full-name" name="fullName" autoComplete="name" required />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">
              Email <span aria-hidden="true" className="text-destructive">*</span>
            </Label>
            <Input id="email" name="email" type="email" autoComplete="email" required />
            {/* TODO(logic): validate the email and show a field error */}
            {/* Field error example:
              <Input id="email" name="email" type="email" aria-invalid="true" aria-describedby="email-error" />
              <p id="email-error" className="text-sm text-destructive">Please enter a valid email address.</p>
            */}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="topic">Topic</Label>
            <Select name="topic" defaultValue="general">
              <SelectTrigger id="topic" className="w-full">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General question</SelectItem>
                <SelectItem value="feedback">Feedback on the project</SelectItem>
                <SelectItem value="bug">Report a bug</SelectItem>
                <SelectItem value="other">Something else</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="order-number">Order number (optional)</Label>
            <Input
              id="order-number"
              name="orderNumber"
              placeholder="ORD-2026-8D20A2B6647C"
              aria-describedby="order-number-help"
            />
            <p id="order-number-help" className="text-sm text-muted-foreground">
              Only if your message is about a test order.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">
              Message <span aria-hidden="true" className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              required
              aria-describedby="message-help"
            />
            <p id="message-help" className="text-sm text-muted-foreground">
              Please don't include real payment details.
            </p>
          </div>

          {/* TODO(logic): disable the button and show "Sending..." while the form submits */}
          <Button type="submit" className="w-full md:w-auto">
            Send message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
