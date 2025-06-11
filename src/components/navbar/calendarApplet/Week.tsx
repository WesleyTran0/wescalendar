"use client";

import { useState, ReactElement } from "react";
// import { getMonthRange } from "@wojtekmaj/date-utils";

import Day from "@applet/Day";

const WEEK_LEN: number = 7;

type WeekProps = {
  date: Date;
  weekStart: number;
  weekEnd: number;
};

export default function Week({
  date,
  weekStart,
  weekEnd,
}: WeekProps): ReactElement {
  const [isFocused, setIsFocused] = useState(false);

  const className = isFocused ? "focused_week" : "unfocused_week";

  const daysInWeek = Array.from({ length: weekEnd - weekStart }, (_, i) => {
    const day = new Date(weekStart);
    day.setDate(weekStart + i);
    return day;
  });

  return (
    <div className={`flex ${className}`}>
      {daysInWeek.map((day) => (
        <Day key={day.toISOString()} date={day} />
      ))}
    </div>
  );
}
