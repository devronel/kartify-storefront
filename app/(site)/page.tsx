import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { NewArrivals } from "@/components/home/NewArrivals";
import { ValueProps } from "@/components/home/ValueProps";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClosingCta } from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: { absolute: "Kartify - Demo online store" },
  description: "A demo store built to show how a real online shop works.",
  openGraph: {
    title: "Kartify - Demo online store",
    description: "A demo store built to show how a real online shop works.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedCategories />
      {/* TODO(logic): swap in <FeaturedCategoriesSkeleton /> while categories load */}
      <NewArrivals />
      {/* TODO(logic): swap in <NewArrivalsSkeleton /> while products load */}
      <ValueProps />
      <HowItWorks />
      <ClosingCta />
    </main>
  );
}
