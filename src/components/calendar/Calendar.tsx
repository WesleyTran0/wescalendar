import { ReactElement } from "react";
import CalendarHeader from "./CalendarHeader";
import WeekView from "./WeekView";

type CalendarProps = {
  className?: string;
};

export default function Calendar({
  className = "",
}: CalendarProps): ReactElement {
  return (
    <div className={`flex flex-col ${className}`}>
      <CalendarHeader />
      <div>
        <WeekView />
      </div>
    </div>
  );
}
