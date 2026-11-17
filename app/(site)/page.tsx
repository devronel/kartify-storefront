import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { NewArrivals } from "@/components/home/NewArrivals";
import { ValueProps } from "@/components/home/ValueProps";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClosingCta } from "@/components/home/ClosingCta";
import { apiServer } from "@/lib/api-server";
import { FeatureCategory } from "@/types/category";

export const metadata: Metadata = {
  title: { absolute: "Kartify - Demo online store" },
  description: "A demo store built to show how a real online shop works.",
  openGraph: {
    title: "Kartify - Demo online store",
    description: "A demo store built to show how a real online shop works.",
  },
};

export default async function HomePage() {

  let featureCategories: FeatureCategory[] = []

  try {
    const featureCategoryResponse = await apiServer("/api/products/featured/categories")
    featureCategories = featureCategoryResponse.data
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedCategories featuredCategories={featureCategories} />
      <NewArrivals />
      {/* TODO(logic): swap in <NewArrivalsSkeleton /> while products load */}
      <ValueProps />
      <HowItWorks />
      <ClosingCta />
    </main>
  );
}
