"use client";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "./icons";
import { UserProps } from "@/types";
import { RenderIcon } from "../lib/utils";

interface DropdownMenuItemConfig {
  key?: string;
  label: string;
  icon?: keyof typeof Icons;
  onClick?: () => void;
  path?: string;
}

interface AccountMenuProps {
  user: Partial<UserProps>;
  extraMenuItems?: DropdownMenuItemConfig[];
}

const AccountMenu = ({ user, extraMenuItems }: AccountMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer w-full">
          <AvatarBox user={user} />
          <Icons.chevronsUpDown className="ml-auto size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="right"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <AvatarBox user={user} />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => console.log("Account clicked")}>
            <Icons.badge className="mr-2" />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Billing clicked")}>
            <Icons.billing className="mr-2" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("Notifications clicked")}
          >
            <Icons.bell className="mr-2" />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {extraMenuItems && extraMenuItems.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {extraMenuItems.map((item) => (
                <DropdownMenuItem
                  key={item.key || item.label}
                  onClick={item.onClick}
                >
                  <RenderIcon icon={item.icon} className="mr-2" />
                  {item.path ? (
                    <Link href={item.path}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log("Log out clicked")}>
          <Icons.logout className="mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountMenu;

const AvatarBox = ({ user }: { user: Partial<UserProps> }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-8 rounded-lg">
        <AvatarImage
          src={user.avatar}
          alt={`${user.firstName || "User"}-${user.lastName || "Avatar"}`}
        />
        <AvatarFallback className="rounded-lg">
          {user.firstName?.[0] || "U"} {user.lastName?.[0] || "A"}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">
          {user.firstName || "First"} {user.lastName || "Last"}
        </span>
        <span className="truncate text-xs">
          {user.email || "email@example.com"}
        </span>
      </div>
    </div>
  );
};
