"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import Month from "./Month";
import { MONTHS, MONTHS_SHORT, offsetDate } from "@/shared/dates";
import {
  getMonth as getMonthIdx,
  getMonthHuman,
  getYear,
} from "@wojtekmaj/date-utils";

type CalendarProps = {};

export default function Calendar({ }: CalendarProps): ReactElement {
  const curDate = new Date();
  const [viewingDate, setViewingDate] = useState(new Date());

  return (
    <div>
      <div className="flex w-full">
        <div className="w-6/10 py-0.5 rounded-lg text-left tabular-nums text-md font-calendar text-sm">
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
        curMonth={getMonthHuman(viewingDate)}
        curYear={getYear(viewingDate)}
      />
    </div>
  );
}
