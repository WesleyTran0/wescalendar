"use client";
import { ReactElement } from "react";
import Week from "@/components/navbar/calendarApplet/Week";
import { getNumWeeksInMonth } from "@/shared/dates";

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
  const firstDayOfMonth: Date = new Date(`${curMonth}/01/${curYear}`);
  const numWeeks = getNumWeeksInMonth(firstDayOfMonth);

  const weeksInMonth = Array.from({ length: numWeeks }, (_, i) => {
    // TODO: DO
    // const startDateOfCurWeek =
    const startOfCurWeek: number = i * 7 + 1;
    const endOfCurWeek: number = startOfCurWeek + 7;

    return { startOfCurWeek, endOfCurWeek, date };
  });

  return (
    <div className={`${className}`}>
      {weeksInMonth.map(({ startOfCurWeek, endOfCurWeek, date }) => (
        <Week
          key={date.toISOString()}
          date={date}
          weekStart={startOfCurWeek}
          weekEnd={endOfCurWeek}
        />
      ))}
    </div>
  );
}
