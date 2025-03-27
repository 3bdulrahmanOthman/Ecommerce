import { useDialog } from "@/app/context/dialog-context";
import { DataTableDeleteDialog } from "@/components/data-table";
import { ProductProps } from "@/types";
import { apiRequest } from "@/lib/api";


export function ProductDialogs() {
  const { open, setOpen, getData } = useDialog<ProductProps>();

  if (!getData) return null; 

  return (
    <DataTableDeleteDialog<ProductProps>
      label="Product"
      identifierKey="name"
      key={`delete-${getData.id}`} 
      open={open === "delete"}
      onOpenChange={() => setOpen(null)}
      row={getData}
      onDelete={async () => {
        await apiRequest({
          resource: "products",
          id: getData.id,
          method: "DELETE",
        });

        setTimeout(() => {
          setOpen(null)
        }, 500);
      }}
    />
  );
}
