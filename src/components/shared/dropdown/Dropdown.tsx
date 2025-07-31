"use client";

import { ReactNode, useState } from "react";

type DropdownProps = {
  children: ReactNode;
  displayText?: string;
  className?: string;
};

export default function Dropdown({
  children,
  displayText = "",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer ${className}`}
      >
        {" "}
        {displayText} {isOpen ? "arrow_up" : "arrow_down"}{" "}
      </div>
      {isOpen ? (
        <>
          <div className="absolute z-50 mt-2 rounded-lg max-w-[170px] min-w-[100px] max-y-[30px]">
            <div className="p-1 bg-bg-highlight rounded">{children}</div>
          </div>
        </>
      ) : null}
    </div>
  );
}
