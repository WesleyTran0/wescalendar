"use client"
import { ReactElement } from 'react';
import Week from '@applet/Week';

type MonthProps = {
  numWeeks: number;
  className?: string;
  // what day of the week start
}

export default function Month({ numWeeks, className = "" }: MonthProps): ReactElement {

  // TODO: current code simply always assumes begins on a sunday
  const weeksInMonth = Array.from({ length: numWeeks }, (_, i) => {
    const startOfCurWeek: number = i * 7 + 1;
    const endOfCurWeek: number = startOfCurWeek + 7;
    const date: Date = new Date(startOfCurWeek);

    return { startOfCurWeek, endOfCurWeek, date };
  });

  return (
    <div className={`${className}`} >
      {
        weeksInMonth.map(({ startOfCurWeek, endOfCurWeek, date }) => (
          <Week
            key={date.toISOString()}
            date={date}
            weekStart={startOfCurWeek}
            weekEnd={endOfCurWeek} />
        ))
      }
    </div >
  );
}
