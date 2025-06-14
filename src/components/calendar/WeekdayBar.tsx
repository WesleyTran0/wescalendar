"use client";
import { useCalendar } from "@contexts/CalendarContext";
import { getStartOfWeek, offsetDate } from "@/shared/dates";
import { useState } from "react";

type WeekdayBarProps = {};

export default function WeekdayBar({ }: WeekdayBarProps) {
  const { today, focusedDate, setFocusedDate, view, setView } = useCalendar();

  // TODO: Make the bar depend on the view, for now it is hard coded for a week for simplicity
  const numDays = 7;
  const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(focusedDate));

  const [daysInRange, setDaysInRange] = useState(
    Array.from({ length: numDays }, (_, i) => {
      let curDay = offsetDate(startOfWeek, i);
      return curDay;
    }),
  );

  return (
    <div className="w-full text-center flex">
      {daysInRange.map((day) => (
        <div
          key={day.toISOString() + "_weekdaybar"}
          className={`w-[${(1 / (numDays + 1)) * 100}%]`}
        >
          {day.toLocaleDateString("en-US", { weekday: "short" })}
          {day.getDate()}
        </div>
      ))}
    </div>
  );
}
