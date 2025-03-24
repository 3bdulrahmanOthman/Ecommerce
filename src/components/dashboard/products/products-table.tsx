"use client"
import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader, DataTableToolbar } from "@/components/data-table"
import { exportTableToCSV } from "@/lib/export"
import { Icons } from "@/components/icons"

export type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "in-stock" | "low-stock" | "out-of-stock"
}

export const products: Product[] = [
  {
    id: "PROD-1",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 45,
    status: "in-stock",
  },
  {
    id: "PROD-2",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 20,
    status: "in-stock",
  },
  {
    id: "PROD-3",
    name: "Running Shoes",
    category: "Footwear",
    price: 89.99,
    stock: 5,
    status: "low-stock",
  },
  {
    id: "PROD-4",
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 129.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-5",
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 35,
    status: "in-stock",
  },
]
export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant={status === "in-stock" ? "outline" : status === "low-stock" ? "secondary" : "destructive"}>
          {status}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>Edit product</DropdownMenuItem>
            <DropdownMenuItem>Delete product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function ProductsTable() {
  return (
    <DataTable
      columns={columns}
      data={products}
      toolbar={(table) => (
        <DataTableToolbar
          table={table}
          searchColumn={["name"]}
          filterOptions={[
            {
              id: "status",
              title: "Status",
              options: [
                { label: "In Stock", value: "in-stock" },
                { label: "Low Stock", value: "low-stock" },
                { label: "Out of Stock", value: "out-of-stock" },
              ],
            },
            {
              id: "category",
              title: "Category",
              options: [
                { label: "Electronics", value: "Electronics" },
                { label: "Footwear", value: "Footwear" },
                { label: "Home Appliances", value: "Home Appliances" },
                { label: "Fitness", value: "Fitness" },
              ],
            },
          ]}
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
  )
}

