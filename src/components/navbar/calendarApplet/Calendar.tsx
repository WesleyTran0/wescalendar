"use client";

import { ReactElement } from "react";
import Month from "./Month";
import { MONTHS, MONTHS_SHORT } from "@/shared/dates";
import { getMonth, getYear } from "@wojtekmaj/date-utils";

type CalendarProps = {};

export default function Calendar({}: CalendarProps): ReactElement {
  // error with perfect 28 / 7 = 4 division
  const today = new Date();

  return (
    <div>
      <div className="w-full py-0.5 rounded-lg text-left items-right">
        {MONTHS[getMonth(today)]}
      </div>
      <Month curMonth={getMonth(today)} curYear={getYear(today)} />
    </div>
  );
}
