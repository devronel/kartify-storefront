import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedCategoriesSkeleton() {
  return (
    <section aria-busy="true">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Skeleton className="h-8 w-48" />
            <Skeleton className="mt-3 h-4 w-40" />
          </div>
          <Skeleton className="h-5 w-32" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardContent className="flex-1 gap-3">
                <Skeleton className="size-12 rounded-full" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
