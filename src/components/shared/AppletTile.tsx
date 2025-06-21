"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type AppletTileProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export default function AppletTile({
  children,
  className = "",
  onClick,
  ...props
}: AppletTileProps) {
  // Tile should be some styled button. This should be consistent for all applets
  return (
    <button
      className={`relative flex items-center justify-center
        w-6.5 h-6.5 rounded-lg ${className}`}
      onClick={(e) => {
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
