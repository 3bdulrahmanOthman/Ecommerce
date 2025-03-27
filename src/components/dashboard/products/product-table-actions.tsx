import { useDialog } from "@/app/context/dialog-context";
import { DataTableActions } from "@/components/data-table";
import { ProductProps } from "@/types";

export const ProductActions = ({ product }: { product: ProductProps }) => {
    const { setOpen, setData } = useDialog<ProductProps>();
  
    const options = [
      {
        label: "Copy Product ID",
        icon: "clipboard",
        onClick: () => navigator.clipboard.writeText(product.id),
      },
      { separator: true },
      {
        label: "View Product",
        icon: "eye",
        onClick: () => console.log("Viewing product", product.id),
      },
      {
        label: "Edit Product",
        icon: "edit",
        onClick: () => console.log("Editing product", product.id),
      },
      {
        label: "Delete Product",
        icon: "trash",
        iconProps: { className: "text-destructive" },
        className: "!text-destructive",
        onClick: () => {
          setData(product);
          setOpen("delete");
          console.log("Deleting product", product.id);
        },
      },
    ];
  
    return <DataTableActions options={options} />;
  };