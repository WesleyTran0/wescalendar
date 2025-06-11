"use client";

import { ReactElement } from "react";
import Month from "./Month";

type CalendarProps = {};

export default function Calendar({ }: CalendarProps): ReactElement {
  return <Month numWeeks={4} />;
}
