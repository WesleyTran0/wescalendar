"use client";

import { useState } from "react";
import { useCalendar } from "@contexts/CalendarContext";
import { getStartOfWeek, offsetDate } from "@/shared/dates";
import DayColumn from "./DayColumn";

type WeekViewProps = {};

export default function WeekView({ }: WeekViewProps) {
  const { today, focusedDate, setFocusedDate, view, setView } = useCalendar();
  const numDays = 7;
  const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(focusedDate));

  const [daysInRange, setDaysInRange] = useState(
    Array.from({ length: numDays }, (_, i) => {
      let curDay = offsetDate(startOfWeek, i);
      return curDay;
    }),
  );

  return (
    <div className="w-full flex">
      <div className="w-[4%]">time and stuff</div>
      {daysInRange.map((day) => (
        <DayColumn key={`${day.toISOString()}_daycolumn`} day={day} />
      ))}
    </div>
  );
}
