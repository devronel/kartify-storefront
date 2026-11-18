import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { NewArrivals } from "@/components/home/NewArrivals";
import { ValueProps } from "@/components/home/ValueProps";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClosingCta } from "@/components/home/ClosingCta";
import { apiServer } from "@/lib/api-server";
import { FeatureCategory } from "@/types/category";
import { PublicProduct } from "@/types/product";
import { Paginate } from "@/types/paginate";
import CustomPagination from "@/components/shared/pagination";
import KartifyPagination from "@/components/shared/kartify-pagination";

export const metadata: Metadata = {
  title: { absolute: "Kartify - Demo online store" },
  description: "A demo store built to show how a real online shop works.",
  openGraph: {
    title: "Kartify - Demo online store",
    description: "A demo store built to show how a real online shop works.",
  },
};

type Props = {
  searchParams: Promise<{
    page?: number
  }>;
}

export default async function HomePage({ searchParams }: Props) {

  const queryParams = new URLSearchParams();
  const params = await searchParams;

  queryParams.set("pageSize", "8")

  if(params){
    if(params.page){
      queryParams.set("page", String(params.page))
    }
  }


  const [featureCategoryResponse, newArrivalResponse] = await Promise.all([
    apiServer("api/products/featured/categories").catch(error => {
      console.error("Failed to fetch categories", error)
      return null
    }),
    apiServer(`/api/products/new-arrival?${queryParams.toString()}`).catch(error => {
      console.error("Failed to fetch new arrival product", error)
    })
  ]);

  const featureCategories: FeatureCategory[] = featureCategoryResponse?.data ?? []
  const newArrival: Paginate<PublicProduct> = newArrivalResponse?.data ?? null

  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Featured Categories */}
      {
        featureCategories.length > 0 && <FeaturedCategories featuredCategories={featureCategories} /> 
      }

      {/* New Arrival */}
      {
        newArrival && 
          newArrival.payload.length > 0 && 
          <NewArrivals product={newArrival} page={params.page ?? 1} />
      }

      <ValueProps />
      <HowItWorks />
      <ClosingCta />
    </main>
  );
}
