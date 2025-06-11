import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  width?: string;
  className?: string;
};

export default function Sidebar({
  children,
  width = "w-64",
  className = "",
}: SidebarProps) {
  return (
    <aside
      className={`
      ${width} 
      h-screen 
      bg-white dark:bg-foreground
      overflow-y-auto
      flex flex-col items-center
      ${className}
    `}
    >
      {children}
    </aside>
  );
}
