"use client";
import { useState } from "react";
import AppletTile from "@components/shared/AppletTile";

type DayProps = {
  date: Date;
};

export default function Day({ date }: DayProps) {
  const [isFocused, setIsFocused] = useState(false);
  const dayNum = date.getDate();
  // const className = isFocused ? "focused-day" : "unfocused-day";

  return (
    <AppletTile
      className="active:bg-red-400 hover:bg-zinc-800
              border border-gray-400/10 hover:border-gray-500/20
              transition-all duration-300
              focus:outline-none focus:bg-rose-500 focus:ring-offset-1
              disabled:opacity-50 disabled:cursor-not-allowed`"
      onClick={() => console.log(dayNum)}
    >
      <div>{dayNum}</div>
    </AppletTile>
  );
}
