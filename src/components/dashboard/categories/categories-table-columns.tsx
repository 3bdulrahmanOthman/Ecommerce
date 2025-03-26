"use client";

import type { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table";
import { CategoryProps } from "@/types";
import { formatDate } from "@/lib/utils";
import TableActionsCell from "./categories-table-actions";
import LongText from "@/components/long-text";


export const CategoriesColumns: ColumnDef<CategoryProps>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const isChecked = table.getIsAllPageRowsSelected();
      const isIndeterminate = table.getIsSomePageRowsSelected();
      return (
        <Checkbox
          checked={isChecked || isIndeterminate ? "indeterminate" : isChecked}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
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
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <LongText className="max-w-40">{row.getValue("name")}</LongText>,
  },
  {
    accessorKey: "slug",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Slug" />,
    cell: ({ row }) => <LongText className="max-w-40">{row.getValue("slug")}</LongText>,
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <LongText className="max-w-40">{row.getValue("description")}</LongText>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
    cell: ({ row }) => <div>{formatDate(row.getValue("createdAt"))}</div>,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Updated At" />,
    cell: ({ row }) => <div>{formatDate(row.getValue("updatedAt"))}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <TableActionsCell row={row} />,
    meta: { className: "w-12" },
  },
];
