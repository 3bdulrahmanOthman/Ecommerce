import { ProductsTable } from "@/components/dashboard/products/products-table";
import { DataTableSkeleton } from "@/components/data-table";
import PageHeader from "@/components/page-header";
import { Shell } from "@/components/shell";
import React, { Suspense } from "react";

export default function Products() {
  return (
    <Shell variant={"sidebar"}>
      <PageHeader
        title={"Products"}
        description="Manage your product catalog and inventory."
      />
      <Suspense fallback={<DataTableSkeleton columnCount={5} />}>
        <ProductsTable />
      </Suspense>
    </Shell>
  );
}
