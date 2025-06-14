"use client";

import { ReactNode } from "react";

type DropdownProps = {
  children: ReactNode;
  className?: string;
};

export default function Dropdown({ children, className = "" }: DropdownProps) {
  return <div className={`${className}`}>{children}</div>;
}
