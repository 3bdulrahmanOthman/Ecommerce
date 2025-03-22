import React from "react";
import { Icons } from "@/components/icons";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { LucideProps } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const RenderIcon = ({
  icon,
  ...props
}: {
  icon?: keyof typeof Icons;
} & LucideProps) => {
  const Icon = icon ? Icons[icon] : undefined;
  return Icon ? React.createElement(Icon, props) : null;
};


export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ")
}
