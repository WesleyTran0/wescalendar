"use client";
import { ReactElement } from "react";
import Week from "@/components/navbar/calendarApplet/Week";
import { getNumWeeksInMonth, getWeekRange, offsetDate } from "@/shared/dates";
import { getMonth } from "@wojtekmaj/date-utils";

type MonthProps = {
  // focusedDate: Date;
  curMonth: number;
  curYear: number;
  className?: string;
  // what day of the week start
};

/*
 * Creates a Month using the current Month and Year. The month should be 1 indexed
 */
export default function Month({
  // focusedDate,
  curMonth,
  curYear,
  className = "",
}: MonthProps): ReactElement {
  let curBaseDay: Date = new Date(`${curMonth}/01/${curYear}`);
  const numWeeks = getNumWeeksInMonth(curBaseDay);
  // const [focusedDate, setFocusedDate] = useContext

  const weeksInMonth = Array.from({ length: numWeeks }, (_, i) => {
    const [startOfCurWeek, endOfCurWeek] = getWeekRange(curBaseDay);
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
          key={startOfCurWeek.toISOString()}
          date={date}
          weekStart={startOfCurWeek}
          weekEnd={endOfCurWeek}
        />
      ))}
    </div>
  );
}
