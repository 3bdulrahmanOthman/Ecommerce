"use client";

import { Button } from "@/components/ui/button";
import { DataTable, DataTableToolbar } from "@/components/data-table";
import { exportTableToCSV } from "@/lib/export";
import { Icons } from "@/components/icons";
import { ProductColumns } from "./product-table-columns";
import { ProductProps } from "@/types";
import { Status } from "@/lib/status";
import { memo, useMemo } from "react";

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
  }
);

ProductsTable.displayName = "ProductsTable";
