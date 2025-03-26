import { ProductsTable } from "@/components/dashboard/products/product-table";
import { DataTableSkeleton } from "@/components/data-table";
import PageHeader from "@/components/page-header";
import { Shell } from "@/components/shell";
import { apiRequest } from "@/lib/api";
import { CategoryProps, ProductProps } from "@/types";
import React, { Suspense, use} from "react";

export default function Products() {
  const { data: productsData } = use(apiRequest<{ data: ProductProps[] }>({ resource: "products", cache: "force-cache", revalidate: 60 }));
  const { data: categoriesData } = use(apiRequest<{ data: CategoryProps[] }>({ resource: "categories", cache: "force-cache", revalidate: 300 }));

  const enrichedProducts = productsData.map((product) => {
    const category = categoriesData.find((c: CategoryProps) => c.id === product.categoryId);
    product.categoryId = category ? category.name : "Unknown";
    return product;
  });

  return (
    <Shell variant="sidebar">
      <PageHeader
        title="Products"
        description="Manage your product catalog and inventory."
      />
      <Suspense fallback={<DataTableSkeleton columnCount={6} />}>
        <ProductsTable products={enrichedProducts} />
      </Suspense>
    </Shell>
  );
}
