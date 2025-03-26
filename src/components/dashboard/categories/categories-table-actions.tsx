import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CategoryProps, SubcategoryProps } from "@/types";
import { Row } from "@tanstack/react-table";
import React from "react";


const TableActionsCell = React.memo(({ row }: { row: Row<CategoryProps | SubcategoryProps> }) => {
  const handleCopyId = () => {
    navigator.clipboard.writeText(row.original.id);
  };

  const handleViewDetails = () => {
    console.log("Viewing details of:", row.original.id);
  };

  const handleEdit = () => {
    console.log("Editing:", row.original.id);
  };

  const handleDelete = () => {
    console.log("Deleting:", row.original.id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open actions menu">
          <Icons.ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleViewDetails}>View Details</DropdownMenuItem>
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive" onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

TableActionsCell.displayName = "TableActionsCell";

export default TableActionsCell;
