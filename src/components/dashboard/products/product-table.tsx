"use client";

import { Button } from "@/components/ui/button";
import { DataTable, DataTableToolbar } from "@/components/data-table";
import { exportTableToCSV } from "@/lib/export";
import { Icons } from "@/components/icons";
import { ProductColumns } from "./product-table-columns";
import { ProductProps } from "@/types";

export const ProductsTable = ({
  products,
}: {
  products: ProductProps[];
}) => {
  return (
    <DataTable
      columns={ProductColumns}
      data={products}
      toolbar={(table) => (
        <DataTableToolbar
          table={table}
          searchColumn={["name"]}
          filterOptions={
            products && [
              {
                id: "status",
                title: "Status",
                options: Array.from(new Set(products.map((p) => p.status))).map(
                  (status) => ({
                    label: status.replace("_", " "),
                    value: status,
                  })
                ),
              },
              {
                id: "categoryId",
                title: "Category",
                options: Array.from(
                  new Set(products.map((p) => p.categoryId))
                ).map((category) => ({
                  label: category,
                  value: category,
                })),
              },
            ]
          }
        >
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
};

ProductsTable.displayName = "ProductsTable";
