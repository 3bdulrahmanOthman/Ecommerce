import { Icons } from "@/components/icons";

type UserRoles = "admin" | "moderator" | "cashier" | "manager";

type PaymentMethod =
  | "credit_card"
  | "paypal"
  | "cash_on_delivery"
  | "bank_transfer";

type ProductCategories =
  | "shirts"
  | "pants"
  | "hoodie"
  | "accessories"
  | "shoes"
  | "electronics";

type StoredFile = string
// {
//   id: string;
//   name: string;
//   url: string;
// }

interface Options {
  label: string;
  value: string;
  icon?: keyof typeof Icons;
}

interface NavItem {
  title: string;
  path?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  badge?: string;
  label?: string;
  description?: string;
}

interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

interface FooterItem {
  title: string;
  items: {
    title: string;
    path: string;
    external?: boolean;
  }[];
}

type MainNavItem = NavItemWithChildren;

type SidebarNavItem = NavItemWithChildren;

type VariantOption = {
  id: string
  value: string
  hexColor?: string
}

interface VariantProps {
  id: string;
  name: string;
  options: VariantOption[];
  price?: number;
  images: StoredFile[] | null;
  inventory: number;
}

interface OrderProps {
  id: string;
  customerName: string;
  email: string;
  phone?: string;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  status: string;
  avatar: StoredFile | null;
  items: Array<
    Partial<ProductProps> & { quantity: number; variants?: VariantProps[] }
  >;
  trackingNumber?: string | null;
  shippingAddress: string;
  createdAt: Date;
  updatedAt: Date;
}


interface ProductProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  sold?: number;
  stock: number;
  status: string;
  categoryId: string;
  images: StoredFile[] | null;
  variants?: VariantProps[];
  createdAt: Date;
  updatedAt?: Date;
}

interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  status: string;
  role: UserRoles;
  spend?: number;
  avatar: string;
  address: string;
  city: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryProps {
  find(arg0: (c: CategoryProps) => boolean): unknown;
  id: string;
  name: string;
  slug: string;
  image: StoredFile | null;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
}

interface SubcategoryProps extends CategoryProps {
  categoryId: string;
}

export type {
  VariantOption,
  VariantProps,
  SubcategoryProps,
  CategoryProps,
  UserRoles,
  UserProps,
  ProductProps,
  ProductCategories,
  PaymentMethod,
  OrderProps,
  NavItem,
  NavItemWithChildren,
  FooterItem,
  MainNavItem,
  SidebarNavItem,
  Options,
  StoredFile,
};
