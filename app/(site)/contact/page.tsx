import { Metadata } from "next";
import { TestModeNotice } from "@/components/about/test-mode-notice";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

const description = "Questions or feedback about the Kartify demo store? Send a message or find the project on GitHub.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Kartify",
    description,
    url: "/contact",
    siteName: "Kartify",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Kartify",
    description,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-8 sm:space-y-10">
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Contact
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Questions about Kartify, or feedback on the project? Send a message.
            </p>
          </section>

          <TestModeNotice />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
