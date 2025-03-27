"use client";

import type { ReactNode, FC } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

/**
 * PageHeader component to display a title and description with optional actions.
 * @param {string} title - The title of the page.
 * @param {string} [description] - Optional description of the page.
 * @param {ReactNode} [children] - Optional children elements (e.g., buttons).
 */
const PageHeader: FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="h5">{title}</h1>
        {description && <p className="small">{description}</p>}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
};

export default PageHeader;
