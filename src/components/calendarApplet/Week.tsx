"use client";

import { useState } from "react";
// import { getMonthRange } from "@wojtekmaj/date-utils";

import Day, { DayProps } from "@applet/Day";

const WEEK_LEN: number = 7;

export type WeekProps = {
  date: Date;
  weekStart: number;
  weekEnd: number;
};

export default function Week({ date, weekStart, weekEnd }: WeekProps) {
  const [isFocused, setIsFocused] = useState(false);

  const daysInWeek = [];

  for (let dayNum = weekStart; dayNum <= weekEnd; dayNum++) {
    const curDay = new Date(date);
    curDay.setDate(dayNum);
    console.log(curDay.getDay());

    daysInWeek.push(<Day date={curDay} />);
  }

  return daysInWeek;
  // return (
  //   for (let dayNum = weekStart; dayNum <= weekEnd; dayNum += 1) {
  //   }
  // );
}
