"use client";

import type { Row } from "@tanstack/react-table";
import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable, DataTableToolbar } from "@/components/data-table";
import { Icons } from "@/components/icons";
import { CategoryProps, SubcategoryProps } from "@/types";
import { exportTableToCSV } from "@/lib/export";
import { CategoriesColumns } from "./categories-table-columns";
import SubcategoriesTable from "./sub-categories-table";

interface CategoryTableProps {
  categories: CategoryProps[];
  subcategories: SubcategoryProps[];
  pageCount?: number;
  onPaginationChange?: (pagination: { pageIndex: number; pageSize: number }) => void;
}

export const CategoryTable = React.memo(({ categories, subcategories, pageCount, onPaginationChange }: CategoryTableProps) => {
  const getRowCanExpand = (row: Row<CategoryProps>) => subcategories.some((sub) => sub.categoryId === row.original.id);

  const renderSubComponent = ({ row }: { row: Row<CategoryProps> }) => {
    const categorySubcategories = subcategories.filter((sub) => sub.categoryId === row.original.id);
    return categorySubcategories.map((subcategory) => <SubcategoriesTable key={subcategory.id} subcategory={subcategory} />);
  };

  return (
    <DataTable
      columns={CategoriesColumns}
      data={categories}
      pageCount={pageCount}
      onPaginationChange={onPaginationChange}
      getRowCanExpand={getRowCanExpand}
      renderSubComponent={renderSubComponent}
      toolbar={(table) => (
        <DataTableToolbar table={table} searchColumn={["name", "description"]}>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              exportTableToCSV(table, {
                filename: "categories",
                excludeColumns: ["select", "actions"],
              })
            }
          >
            <Icons.download className="mr-2" />
            Export
          </Button>
        </DataTableToolbar>
      )}
    />
  );
});

CategoryTable.displayName = "CategoryTable";
