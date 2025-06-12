"use client";

import { ReactElement } from "react";
import Image from "next/image";
import Month from "./Month";
import { MONTHS, MONTHS_SHORT } from "@/shared/dates";
import { getMonth, getYear } from "@wojtekmaj/date-utils";
import ArrowIcon from "@public/arrow.svg";

type CalendarProps = {};

export default function Cajendar({}: CalendarProps): ReactElement {
  // error with perfect 28 / 7 = 4 division
  const today = new Date();

  return (
    <div>
      <div className="flex w-full">
        <div className="w-6/10 py-0.5 rounded-lg text-left">
          {MONTHS[getMonth(today)]}
        </div>
        <div className="w-4/10 py-0.5 round-lg flex justify-end text-right items-right space-x-1 p-0.5">
          <Image
            className="fill-gray-300 rotate-180"
            src="/arrow.svg"
            alt="Previous Month"
            width={20}
            height={20}
          />
          <Image
            className="fill-gray-300"
            src="/arrow.svg"
            alt="Next Month"
            width={20}
            height={20}
          />
        </div>
      </div>
      <Month curMonth={getMonth(today)} curYear={getYear(today)} />
    </div>
  );
}
