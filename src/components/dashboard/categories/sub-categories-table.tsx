import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Icons } from "@/components/icons";
import { CategoryProps, SubcategoryProps } from "@/types";
import { Row } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import TableActionsCell from "./categories-table-actions";

const SubcategoriesTable = React.memo(({ subcategory }: { subcategory: SubcategoryProps }) => {
  return (
    <TableRow key={subcategory.id} className="bg-muted/30 hover:bg-muted/40">
      <TableCell />

      <TableCell>
        <Icons.cornerDownRight className="size-4 text-muted-foreground" />
      </TableCell>

      <TableCell className="font-medium">{subcategory.name}</TableCell>
      <TableCell>{subcategory.slug}</TableCell>
      <TableCell className="hidden md:table-cell">{subcategory.description}</TableCell>
      <TableCell>{formatDate(subcategory.createdAt)}</TableCell>
      <TableCell className="hidden md:table-cell">{formatDate(subcategory.updatedAt)}</TableCell>
      <TableCell>
        <TableActionsCell row={{ original: subcategory } as Row<CategoryProps | SubcategoryProps>} />
      </TableCell>
    </TableRow>
  );
});

SubcategoriesTable.displayName = "SubcategoriesTable";

export default SubcategoriesTable;
