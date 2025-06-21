"use client";

import { useMemo, useState } from "react";
import { useCalendar } from "@contexts/CalendarContext";
import { getStartOfWeek, offsetDate } from "@/shared/dates";
import DayColumn from "./DayColumn";

type WeekViewProps = {};

export default function WeekView({}: WeekViewProps) {
  const { today, focusedDate, setFocusedDate, view, setView } = useCalendar();
  const numDays = 7;

  const daysInRange = useMemo(() => {
    const startOfWeek = getStartOfWeek(focusedDate);

    const newDaysInRange = Array.from({ length: numDays }, (_, i) => {
      let curDay = offsetDate(startOfWeek, i);
      return curDay;
    });

    return newDaysInRange;
  }, [focusedDate, numDays]);

  return (
    <div className="w-full ">
      <div className="flex">
        <div className="w-[4%] flex">time and stuff</div>
        {daysInRange.map((day) => (
          <DayColumn key={`${day.toISOString()}_daycolumn`} day={day} />
        ))}
      </div>
    </div>
  );
}
