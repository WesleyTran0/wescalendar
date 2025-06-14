import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  width?: string;
  className?: string;
};

export default function Sidebar({
  children,
  width = "w-55",
  className = "",
}: SidebarProps) {
  return (
    <div
      className={`
      ${width} 
      bg-white dark:bg-foreground
      overflow-y-auto
      flex flex-col items-center
      ${className}
    `}
    >
      {children}
    </div>
  );
}
