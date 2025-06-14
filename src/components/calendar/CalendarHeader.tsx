"use client";

import { useCalendar } from "@context/CalendarContext";
import { MONTHS } from "@/shared/dates";
import { useState } from "react";

type CalenderHeader = {};

export default function CalendarHeader({ }: CalenderHeader) {
  const { focusedDate, setFocusedDate } = useCalendar();
  const [monthName, setMonthName] = useState(MONTHS[focusedDate.getMonth()]);
  const [curYear, setCurYear] = useState(focusedDate.getFullYear());

  function buttonPress(forward: boolean) {
    const direction = forward ? 1 : -1;

    const offsettedByMonth = new Date(
      focusedDate.getFullYear(),
      focusedDate.getMonth(),
      focusedDate.getDate(),
    );

    setFocusedDate(offsettedByMonth);
    setMonthName(MONTHS[offsettedByMonth.getMonth()]);
    setCurYear(offsettedByMonth.getFullYear());
  }

  return (
    <div className="w-full h-20 text-standard-text">
      <div className="text-2xl font-semibold flex flex-col justify-end">
        {monthName} {curYear}
      </div>
      {/* TODO: Add Month buttons to change forward and backward months */}
    </div>
  );
}
