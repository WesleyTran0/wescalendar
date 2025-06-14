import { ReactElement } from "react";
import CalendarHeader from "./CalendarHeader";

type CalendarProps = {
  today?: Date;
  focused?: Date;
  className?: string;
};

export default function Calendar({
  today = new Date(),
  focused = new Date(),
  className = "",
}: CalendarProps): ReactElement {
  return (
    <div className={className}>
      <CalendarHeader />
    </div>
  );
}
