"use client";

import Image from "next/image";
import { useCalendar } from "@contexts/CalendarContext";
import { MONTHS } from "@/shared/dates";
import { useState } from "react";
import WeekdayBar from "./WeekdayBar";

type CalenderHeaderProps = {};

export default function CalendarHeader({ }: CalenderHeaderProps) {
  const { focusedDate, setFocusedDate, view, setView } = useCalendar();
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
    <div className="w-full h-18 text-standard-text flex flex-col justify-end border-b border-bg-highlight sticky top-0 z-30">
      <div className="w-7/10 py-1 px-2 text-xl font-semibold flex flex-col justify-end">
        {monthName} {curYear}
      </div>
      <div className="w-3/10 round-lg flex justify-end text-right items-right">
        {/* TODO: Add a dropdown menu before these buttons */}

        {/* NOTE: Hard coded to only change the current week. Later change to change the day based on the view */}
        <Image
          className="fill-gray-300 rotate-180"
          src="/arrow.svg"
          alt="Previous Week"
          width={20}
          height={20}
          onClick={() => {
            setFocusedDate(
              new Date(
                focusedDate.getFullYear(),
                focusedDate.getMonth(),
                focusedDate.getDate() - 7,
              ),
            );
          }}
        />
        <Image
          className="fill-gray-300"
          src="/arrow.svg"
          alt="Next Week"
          width={20}
          height={20}
          onClick={() => {
            setFocusedDate(
              new Date(
                focusedDate.getFullYear(),
                focusedDate.getMonth() + 7,
                focusedDate.getDate(),
              ),
            );
          }}
        />
      </div>
      <WeekdayBar />
    </div>
  );
}
