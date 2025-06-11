"use client";

import { ReactElement } from "react";
import Month from "./Month";
import { getMonth, getYear } from "@wojtekmaj/date-utils";

type CalendarProps = {};

export default function Calendar({}: CalendarProps): ReactElement {
  // error with perfect 28 / 7 = 4 divison
  const today = new Date();
  return <Month curMonth={getMonth(today)} curYear={getYear(today)} />;
}
