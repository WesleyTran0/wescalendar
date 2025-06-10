"use client";

import { useState, ReactElement } from 'react';
// import { getMonthRange } from "@wojtekmaj/date-utils";

import Day from "@applet/Day";

const WEEK_LEN: number = 7;

type WeekProps = {
  date: Date;
  weekStart: number;
  weekEnd: number;
};

export default function Week({ date, weekStart, weekEnd }: WeekProps): ReactElement {
  const [isFocused, setIsFocused] = useState(false);

  const className = isFocused ? "focused_week" : "unfocused_week";

  const daysInWeek = Array.from({ length: weekEnd - weekStart }, (_, i) => {
    const day = new Date(weekStart);
    day.setDate(weekStart + i);
    return day;
  });

  return (
    <div className={`flex ${className}`} >
      {
        daysInWeek.map((day) => (
          <Day
            key={day.toISOString()}
            date={day}
            className={`active:bg-red-400 hover:bg-zinc-800
              border border-gray-400/10 hover:border-gray-500/20
              transition-all duration-300
              focus:outline-none focus:bg-rose-500 focus:ring-offset-1
              disabled:opacity-50 disabled:cursor-not-allowed`}
          />
        ))
      }
    </div >
  );
}
