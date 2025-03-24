"use client";
import type { ColumnDef, Row } from "@tanstack/react-table";
import React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DataTable,
  DataTableColumnHeader,
  DataTableToolbar,
} from "@/components/data-table";
import { TableCell, TableRow } from "@/components/ui/table";
import { Icons } from "@/components/icons";
import { CategoryProps, SubcategoryProps } from "@/types";
import { exportTableToCSV } from "@/lib/export";

export const categories: CategoryProps[] = [
  {
    id: "cat-1",
    name: "Electronics",
    slug: "electronics",
    image: { id: "", name: "", url: "" },
    description: "Electronic devices and accessories",
    createdAt: new Date("2023-01-15T11:30:00Z"),
    updatedAt: new Date("2023-01-15T11:30:00Z"),
  },
  {
    id: "cat-2",
    name: "Clothing",
    slug: "clothing",
    image: { id: "", name: "", url: "" },
    description: "Apparel and fashion items",
    createdAt: new Date("2023-01-15T11:30:00Z"),
    updatedAt: new Date("2023-01-15T11:30:00Z"),
  },
  {
    id: "cat-3",
    name: "Home & Garden",
    slug: "home-garden",
    image: { id: "", name: "", url: "" },
    description: "Products for home and garden",
    createdAt: new Date("2023-01-15T11:30:00Z"),
    updatedAt: new Date("2023-01-15T11:30:00Z"),
  },
];

export const subcategories: SubcategoryProps[] = [
  {
    id: "sub-1",
    categoryId: "cat-1",
    name: "Smartphones",
    slug: "smartphones",
    image: { id: "", name: "", url: "" },
    description: "Mobile phones and accessories",
    createdAt: new Date("2023-01-15T11:30:00Z"),
    updatedAt: new Date("2023-01-15T11:30:00Z"),
  },
  {
    id: "sub-2",
    categoryId: "cat-1",
    name: "Laptops",
    slug: "laptops",
    image: { id: "", name: "", url: "" },
    description: "Notebook computers and accessories",
    createdAt: new Date("2023-01-15T12:30:00Z"),
    updatedAt: new Date("2023-01-15T12:30:00Z"),
  },
  {
    id: "sub-3",
    categoryId: "cat-2",
    name: "Men's Wear",
    slug: "mens-wear",
    image: { id: "", name: "", url: "" },
    description: "Clothing for men",
    createdAt: new Date("2023-01-16T12:45:00Z"),
    updatedAt: new Date("2023-01-16T12:45:00Z"),
  },
  {
    id: "sub-4",
    categoryId: "cat-2",
    name: "Women's Wear",
    slug: "womens-wear",
    image: { id: "", name: "", url: "" },
    description: "Clothing for women",
    createdAt: new Date("2023-01-16T13:45:00Z"),
    updatedAt: new Date("2023-01-16T13:45:00Z"),
  },
  {
    id: "sub-5",
    categoryId: "cat-3",
    name: "Furniture",
    slug: "furniture",
    image: { id: "", name: "", url: "" },
    description: "Home furniture items",
    createdAt: new Date("2023-01-17T10:15:00Z"),
    updatedAt: new Date("2023-01-17T10:15:00Z"),
  },
];

interface CategoryTableProps {
  pageCount?: number;
  onPaginationChange?: (pagination: {
    pageIndex: number;
    pageSize: number;
  }) => void;
}

const ActionsCell = ({
  row,
}: {
  row: Row<CategoryProps | SubcategoryProps>;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <Icons.ellipsis className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem
        onClick={() => navigator.clipboard.writeText(row.original.id)}
      >
        Copy ID
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>View details</DropdownMenuItem>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export function CategoryTable({
  pageCount,
  onPaginationChange,
}: CategoryTableProps) {
  const columns: ColumnDef<CategoryProps>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
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
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: "slug",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Slug" />
      ),
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"));
        return <div>{date.toLocaleDateString()}</div>;
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Updated At" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("updatedAt"));
        return <div>{date.toLocaleDateString()}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <ActionsCell row={row} />,
      meta: { className: "w-12" },
    },
  ];

  const getRowCanExpand = (row: Row<CategoryProps>) => {
    return subcategories.some((sub) => sub.categoryId === row.original.id);
  };

  const renderSubComponent = ({ row }: { row: Row<CategoryProps> }) => {
    const categorySubcategories = subcategories.filter(
      (sub) => sub.categoryId === row.original.id
    );

    return (
      <>
        {categorySubcategories.map((subcategory) => (
          <TableRow
            key={subcategory.id}
            className="bg-muted/30 hover:bg-muted/40"
          >
            <TableCell />

            <TableCell>
              <Icons.cornerDownRight className="size-4 text-muted-foreground" />
            </TableCell>

            <TableCell className="font-medium">{subcategory.name}</TableCell>
            <TableCell>{subcategory.slug}</TableCell>
            <TableCell className="hidden md:table-cell">
              {subcategory.description}
            </TableCell>
            <TableCell>
              {new Date(subcategory.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(subcategory.updatedAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <ActionsCell
                row={
                  { original: subcategory } as Row<
                    CategoryProps | SubcategoryProps
                  >
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  };

  return (
    <DataTable
      columns={columns}
      data={categories}
      pageCount={pageCount}
      onPaginationChange={onPaginationChange}
      getRowCanExpand={getRowCanExpand}
      renderSubComponent={renderSubComponent}
      toolbar={(table) => (
        <DataTableToolbar
          table={table}
          filterOptions={[
            {
              id: "category",
              title: "Category",
              options: [
                { label: "Electronics", value: "electronics" },
                { label: "Clothing", value: "clothing" },
              ],
            },
          ]}
          searchColumn={["name", "discription"]}
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

// Sample data remains the same as provided
