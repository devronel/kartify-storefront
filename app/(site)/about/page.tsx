import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutProject } from "@/components/about/about-project";
import { TestModeNotice } from "@/components/about/test-mode-notice";
import { WhatYouCanTry } from "@/components/about/what-you-can-try";
import { BuiltWith } from "@/components/about/built-with";
import { FindOutMore } from "@/components/about/find-out-more";

const description = "Kartify is a full-stack e-commerce demo built to learn how real online stores work: storefront, admin, carts, orders and PayMongo payments in test mode.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kartify",
    description,
    url: "/about",
    siteName: "Kartify",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Kartify",
    description,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-16 sm:space-y-20">
          <AboutHero />

          <div className="space-y-6">
            <AboutProject />
            <TestModeNotice />
          </div>

          <WhatYouCanTry />
          <BuiltWith />
          <FindOutMore />
        </div>
      </div>
    </main>
  );
}
