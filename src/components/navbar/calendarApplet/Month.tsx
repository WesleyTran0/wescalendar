"use client";
import Week from "@/components/navbar/calendarApplet/Week";
import { getNumWeeksInMonth, getWeekRange, offsetDate } from "@/shared/dates";
import { getMonth } from "@wojtekmaj/date-utils";

type MonthProps = {
  curMonth: number;
  curYear: number;
  className?: string;
};

/*
 * Creates a Month using the current Month and Year. The month should be 1 indexed
 */
export default function Month({
  curMonth,
  curYear,
  className = "",
}: MonthProps) {
  let curBaseDay: Date = new Date(`${curMonth}/01/${curYear}`);
  // TODO: Currently, the "day" is highlighted since the currentDay is used as the focused date.
  // When the button is clicked, we should go to another month but the day shouldn't be focused until we click it
  const numWeeks = getNumWeeksInMonth(curBaseDay);

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
