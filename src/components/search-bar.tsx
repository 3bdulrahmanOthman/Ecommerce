"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Kbd, KbdKey, KbdSeparator } from "@/components/ui/kbd";
import { cn, RenderIcon } from "@/lib/utils";

export interface SearchItem {
  title: string;
  path?: string;
  icon?: keyof typeof Icons;
  items?: SearchItem[];
}

interface SearchBarProps {
  data: SearchItem[];
  placeholder?: string;
  shortcut?: string;
  className?: string;
  props?: React.ComponentPropsWithoutRef<typeof Button>;
}

export function SearchBar({
  data,
  placeholder = "Search...",
  shortcut = "K",
  className,
  props,
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "group relative h-9 w-full justify-start rounded-md bg-muted/25 text-sm font-normal text-muted-foreground shadow-none hover:bg-muted/50 sm:pr-12 md:w-40 lg:w-56 xl:w-64",
          className
        )}
        onClick={() => setOpen(true)}
        aria-label="Open search dialog"
        {...props}
      >
        <Icons.search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/75" />
        <span className="ml-8 truncate">{placeholder}</span>
        <Kbd className="absolute right-2 top-1/2 -translate-y-1/2">
          <KbdKey>⌘</KbdKey>
          <KbdSeparator />
          <KbdKey title="search">{shortcut}</KbdKey>
        </Kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={searchValue}
          onValueChange={setSearchValue}
        />

        <CommandList className="scroll-bg-foreground">
          <CommandEmpty className="py-6 text-center text-sm">
            No results found for {searchValue}
          </CommandEmpty>

          {data.map((group) => (
            <CommandGroup
              key={group.title}
              heading={group.title}
              className="[&>[cmdk-group-heading]]:text-muted-foreground/75"
            >
              {group.items?.map((item) => (
                <CommandItem
                  key={`${group.title}-${item.title}`}
                  value={`${group.title} ${item.title}`}
                  onSelect={() => setOpen(false)}
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      className="flex w-full items-center gap-2"
                      prefetch={false}
                    >
                      <RenderIcon
                        icon={item.icon ? item.icon : "link"}
                        className="size-3 shrink-0 text-muted-foreground/80"
                      />
                      <span className="truncate">{item.title}</span>
                    </Link>
                  ) : (
                    <div className="flex w-full items-center gap-2">
                      <RenderIcon
                        icon={item.icon ? item.icon : "chevronRight"}
                        className="size-3 shrink-0 text-muted-foreground/80"
                      />
                      <Icons.chevronRight className="size-3 shrink-0 text-muted-foreground/80" />
                      <span className="truncate">{item.title}</span>
                    </div>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
