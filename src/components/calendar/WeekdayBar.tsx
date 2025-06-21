"use client";
import { useCalendar } from "@contexts/CalendarContext";
import { getStartOfWeek, offsetDate } from "@/shared/dates";
import { useMemo, useState } from "react";

type WeekdayBarProps = {};

export default function WeekdayBar({}: WeekdayBarProps) {
  const { today, focusedDate, setFocusedDate, view, setView } = useCalendar();

  // TODO: Make the bar depend on the view, for now it is hard coded for a week for simplicity
  const numDays = 7;

  const daysInRange = useMemo(() => {
    const startOfWeek = getStartOfWeek(focusedDate);

    const newDaysInRange = Array.from({ length: numDays }, (_, i) => {
      let curDay = offsetDate(startOfWeek, i);
      return curDay;
    });

    return newDaysInRange;
  }, [focusedDate, numDays]);

  return (
    <div className="w-full text-center text-secondary-text flex border-b border-bg-highlight sticky top-0 z-30 bg-background">
      <div className="text-xs w-[4%] flex justify-end items-center ">
        {/* TODO: TIMEZONE HARD CODED RN */}
        EDT
      </div>
      {daysInRange.map((day) => (
        <div
          key={day.toISOString() + "_weekdaybar"}
          // className={"w-[13.7%]"}
          // NOTE: Kind of buggy and I'm not sure why since the hardcoded equivalent works and it works after I try the hardcode and switch back

          className={`w-[${(96 / numDays).toFixed(1)}%]`}
        >
          {day.toLocaleDateString("en-US", { weekday: "short" })}{" "}
          {day.getDate()}
        </div>
      ))}
    </div>
  );
}
