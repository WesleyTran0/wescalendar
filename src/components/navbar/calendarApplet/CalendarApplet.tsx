"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import Month from "./Month";
import { MONTHS, MONTHS_SHORT } from "@/shared/dates";
import {
  getMonth as getMonthIdx,
  getMonthHuman,
  getYear,
} from "@wojtekmaj/date-utils";
import { useCalendar } from "@/contexts/CalendarContext";

type CalendarAppletProps = {};

export default function CalendarApplet({}: CalendarAppletProps): ReactElement {
  const { today, focusedDate, setFocusedDate, view, setView } = useCalendar();

  return (
    <div className="text-standard-text tabular-nums font-calendar text-sm py-3">
      <div className="flex w-full">
        <div className="w-6/10 py-0.5 rounded-lg text-left">
          {`${MONTHS[getMonthIdx(focusedDate)]}  ${focusedDate.getFullYear()}`}
        </div>
        <div className="w-4/10 py-0.5 round-lg flex justify-end text-right items-right space-x-1 p-0.5">
          <Image
            className="fill-gray-300 rotate-180"
            src="/arrow.svg"
            alt="Previous Month"
            width={20}
            height={20}
            onClick={() => {
              setFocusedDate(
                new Date(
                  focusedDate.getFullYear(),
                  focusedDate.getMonth() - 1,
                  focusedDate.getDate(),
                ),
              );
            }}
          />
          <Image
            className="fill-gray-300"
            src="/arrow.svg"
            alt="Next Month"
            width={20}
            height={20}
            onClick={() => {
              setFocusedDate(
                new Date(
                  focusedDate.getFullYear(),
                  focusedDate.getMonth() + 1,
                  focusedDate.getDate(),
                ),
              );
            }}
          />
        </div>
      </div>
      <Month
        curMonth={getMonthHuman(focusedDate)}
        curYear={getYear(focusedDate)}
      />
    </div>
  );
}
