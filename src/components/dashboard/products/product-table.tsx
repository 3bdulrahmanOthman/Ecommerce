"use client";

import { Button } from "@/components/ui/button";
import { DataTable, DataTableToolbar } from "@/components/data-table";
import { exportTableToCSV } from "@/lib/export";
import { ProductColumns } from "./product-table-columns";
import { ProductProps } from "@/types";
import { Status } from "@/lib/status";
import { memo, useMemo } from "react";
import { DialogProvider } from "@/app/context/dialog-context";
import { ProductDialogs } from "./product-table-dialogs";

export const ProductsTable = memo(
  ({ products }: { products: ProductProps[] }) => {
    const productStatusOptions = useMemo(() => {
      const selectedStatuses = Object.values({
        IN_STOCK: Status.IN_STOCK,
        PRE_ORDER: Status.PRE_ORDER,
        DISCONTINUED: Status.DISCONTINUED,
        SUSPENDED: Status.SUSPENDED,
      } as Pick<typeof Status, "IN_STOCK" | "PRE_ORDER" | "DISCONTINUED" | "SUSPENDED">);

      return selectedStatuses.map((status) => ({
        label: status.replace("_", " "),
        value: status,
      }));
    }, []);

    const productCategoryOptions = useMemo(() => {
      return Array.from(new Set(products.map((p) => p.categoryId))).map(
        (category) => ({
          label: category,
          value: category,
        })
      );
    }, [products]);

    return (
      <DialogProvider>
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
                    options: productStatusOptions,
                  },
                  {
                    id: "categoryId",
                    title: "Category",
                    options: productCategoryOptions,
                  },
                ]
              }
            >
              <Button
                variant="outline"
                iconPlacement="left"
                icon={"download"}
                size="sm"
                onClick={() =>
                  exportTableToCSV(table, {
                    filename: "categories",
                    excludeColumns: ["select", "actions"],
                  })
                }
              >
                Export
              </Button>
            </DataTableToolbar>
          )}
        />
        <ProductDialogs/>
      </DialogProvider>
    );
  }
);

ProductsTable.displayName = "ProductsTable";
