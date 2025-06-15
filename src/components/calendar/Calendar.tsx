"use client";
import { ReactElement } from "react";
import CalendarHeader from "./CalendarHeader";
import WeekView from "./WeekView";
// import { useCalendar } from "@context/CalendarContext";

type CalendarProps = {
  className?: string;
};

export default function Calendar({
  className = "",
}: CalendarProps): ReactElement {
  // const { focusedDate, view } = useCalendar();

  return (
    <div className={className}>
      <CalendarHeader />
      <WeekView />
    </div>
  );
}
