"use client";
import { CategoryTable } from "@/components/dashboard/categories/categories-table";
import { DataTableSkeleton } from "@/components/data-table";
import PageHeader from "@/components/page-header";
import { Shell } from "@/components/shell";
import { Suspense } from "react";

// import dynamic from "next/dynamic";
// const CategoryTable = dynamic(() => import('@/components/dashboard/categories/categories-table'));

export default function Products() {
  return (
    <Shell variant={"sidebar"}>
      <PageHeader
        title="Categories"
        description="Manage your product categories and subcategories."
      />
      <Suspense fallback={<DataTableSkeleton columnCount={5} />}>
        <CategoryTable />
      </Suspense>
    </Shell>
  );
}
