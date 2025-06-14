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

type CalendarAppletProps = {};

export default function CalendarApplet({ }: CalendarAppletProps): ReactElement {
  const [focusedDate, setFocusedDate] = useState(new Date());
  const [viewingDate, setViewingDate] = useState(new Date());

  return (
    <div className="text-standard-text tabular-nums font-calendar text-sm py-3">
      <div className="flex w-full">
        <div className="w-6/10 py-0.5 rounded-lg text-left">
          {`${MONTHS[getMonthIdx(viewingDate)]}  ${viewingDate.getFullYear()}`}
        </div>
        <div className="w-4/10 py-0.5 round-lg flex justify-end text-right items-right space-x-1 p-0.5">
          <Image
            className="fill-gray-300 rotate-180"
            src="/arrow.svg"
            alt="Previous Month"
            width={20}
            height={20}
            onClick={() => {
              setViewingDate(
                new Date(
                  viewingDate.getFullYear(),
                  viewingDate.getMonth() - 1,
                  viewingDate.getDate(),
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
              setViewingDate(
                new Date(
                  viewingDate.getFullYear(),
                  viewingDate.getMonth() + 1,
                  viewingDate.getDate(),
                ),
              );
            }}
          />
        </div>
      </div>
      <Month
        // TODO: Add the highlighting and determine how you want to pass donw that information. Through context or parameter?
        // focusedDate={focusedDate}
        curMonth={getMonthHuman(viewingDate)}
        curYear={getYear(viewingDate)}
      />
    </div>
  );
}
