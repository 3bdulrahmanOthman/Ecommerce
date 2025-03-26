import { CategoryTable } from "@/components/dashboard/categories/categories-table";
import { DataTableSkeleton } from "@/components/data-table";
import PageHeader from "@/components/page-header";
import { Shell } from "@/components/shell";
import { apiRequest } from "@/lib/api";
import { CategoryProps, SubcategoryProps } from "@/types";
import { Suspense, use } from "react";

export default function Products() {
  const { data: categoriesData } = use(apiRequest<{ data: CategoryProps[] }>({ resource: "categories", cache: "force-cache", revalidate: 300 }));
  const { data: subcategoriesData } = use(apiRequest<{ data: SubcategoryProps[] }>({ resource: "subcategories", cache: "force-cache", revalidate: 300 }));

  return (
    <Shell variant={"sidebar"}>
      <PageHeader
        title="Categories"
        description="Manage your product categories and subcategories."
      />
      <Suspense fallback={<DataTableSkeleton columnCount={5} />}>
        <CategoryTable categories={categoriesData} subcategories={subcategoriesData} />
      </Suspense>
    </Shell>
  );
}
