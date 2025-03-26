import React from "react";
import { Icons } from "@/components/icons";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LucideProps } from "lucide-react";
import { Status, statusStyles } from "./status";
import { Badge } from "@/components/ui/badge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export const StatusBadge = ({ status }: { status: Status }) => {
  return React.createElement(
    Badge,
    { className: statusStyles[status] },
    status.replace("_", " ")
  );
};

export function toSentenceCase(str: string) {
  return str
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ");
}
