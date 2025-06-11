"use client";
import { ReactElement } from "react";
import Week from "@/components/navbar/calendarApplet/Week";
import {
  getNumWeeksInMonth,
  getViewWeekRange,
  offsetDate,
} from "@/shared/dates";
import { getMonth } from "@wojtekmaj/date-utils";

type MonthProps = {
  curMonth: number;
  curYear: number;
  className?: string;
  // what day of the week start
};

export default function Month({
  curMonth,
  curYear,
  className = "",
}: MonthProps): ReactElement {
  let curBaseDay: Date = new Date(`${curMonth}/01/${curYear}`);
  const numWeeks = getNumWeeksInMonth(curBaseDay);

  const weeksInMonth = Array.from({ length: numWeeks }, (_, i) => {
    const [startOfCurWeek, endOfCurWeek] = getViewWeekRange(curBaseDay);
    const date =
      getMonth(startOfCurWeek) != getMonth(curBaseDay)
        ? curBaseDay
        : startOfCurWeek;

    curBaseDay = offsetDate(curBaseDay, 7);
    return { startOfCurWeek, endOfCurWeek, date };
  });
  return (
    <div className={`${className}`}>
      {weeksInMonth.map(({ startOfCurWeek, endOfCurWeek, date }) => (
        <Week
          key={Math.random().toString().concat("_week")}
          date={date}
          weekStart={startOfCurWeek}
          weekEnd={endOfCurWeek}
        />
      ))}
    </div>
  );
}
