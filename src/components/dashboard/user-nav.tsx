"use client";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import AccountMenu from "../account-menu";

export function UserNav() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <AccountMenu
            user={{
              firstName: "Abdulrahman",
              lastName: "Othman",
              avatar: "https://avatar.iran.liara.run/public/29",
            }}
          />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
