"use client";

import { useState } from "react";
// import { getMonthRange } from "@wojtekmaj/date-utils";

import Day from "@applet/Day";
import { offsetDate } from "@/shared/dates";

const WEEK_LEN: number = 7;

type WeekProps = {
  date: Date;
  weekStart: Date;
  weekEnd: Date;
};

export default function Week({ date, weekStart, weekEnd }: WeekProps) {
  const [isFocused, setIsFocused] = useState(false);

  const className = isFocused ? "focused_week" : "unfocused_week";

  const daysInWeek = Array.from({ length: 7 }, (_, i) => {
    let curDay = offsetDate(weekStart, i);
    return curDay;
  });

  return (
    <div className={`flex ${className}`}>
      {daysInWeek.map((day) => (
        <Day key={day.toISOString()} date={day} />
      ))}
    </div>
  );
}
