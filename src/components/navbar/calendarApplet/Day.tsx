"use client";
import { useMemo, useState } from "react";
import AppletTile from "@components/shared/AppletTile";
import { useCalendar } from "@/contexts/CalendarContext";

type DayProps = {
  date: Date;
};

export default function Day({ date }: DayProps) {
  const { focusedDate, setFocusedDate } = useCalendar();
  const dayNum = date.getDate();

  const dayStyling = useMemo(() => {
    const highlighting =
      focusedDate.toLocaleDateString() == date.toLocaleDateString()
        ? "bg-rose-500 ring-offset-1 outline-none"
        : "hover:bg-zinc-800";

    return date.getMonth() == focusedDate.getMonth()
      ? highlighting
      : "opacity-50 hover:bg-zinc-800";
  }, [focusedDate]);

  return (
    <AppletTile
      className={`active:bg-red-400  border border-gray-400/10 
                  hover:border-gray-500/20 transition-all duration-300 
                  focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed 
                  ${dayStyling}`}
      onClick={() => {
        setFocusedDate(date);
      }}
    >
      <div>{dayNum}</div>
    </AppletTile>
  );
}
