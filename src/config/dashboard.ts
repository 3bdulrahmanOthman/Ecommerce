import { SidebarNavItem } from "@/types";


export interface DashboardConfig {
  sidebarHeader: SidebarNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  sidebarHeader: [
    {
      title: "Dashboard",
      icon: "logo",
      description: "Dashboard Page",
    },
    {
      title: "Home",
      icon: "logo",
      description: "Home Page",
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Overview",
          path: "/dashboard",
          icon: "dashboard",
          active: true,
        },
      ],
    },
    {
      title: "Store",
      items: [
        {
          title: "Products",
          path: "/dashboard/products",
          icon: "product",
        },
        {
          title: "Categories",
          path: "/dashboard/products/categories",
          icon: "boxes",
        },
        {
          title: "Global Variants",
          path: "/dashboard/products/variants",
          icon: "shapes",
        },
      ],
    },
    {
      title: "Manage Orders",
      items: [
        {
          title: "Orders",
          path: "/dashboard/orders",
          icon: "order",
        },
      ],
    },
    {
      title: "Users",
      items: [
        {
          title: "Users",
          path: "/dashboard/users",
          icon: "user",
        },
      ],
    },
  ],
};


