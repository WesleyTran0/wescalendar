"use client";

import Image from "next/image";
import { useCalendar } from "@contexts/CalendarContext";
import { MONTHS } from "@/shared/dates";
import { useState } from "react";
import WeekdayBar from "./WeekdayBar";
import Dropdown from "../shared/dropdown/Dropdown";

type CalenderHeaderProps = {};

export default function CalendarHeader({ }: CalenderHeaderProps) {
  const { focusedDate, setFocusedDate, view, setView } = useCalendar();
  const [monthName, setMonthName] = useState(MONTHS[focusedDate.getMonth()]);
  const [curYear, setCurYear] = useState(focusedDate.getFullYear());

  function buttonPress(forward: boolean) {
    const direction = forward ? 1 : -1;

    const offsettedByMonth = new Date(
      focusedDate.getFullYear(),
      focusedDate.getMonth(),
      focusedDate.getDate() + direction * 7,
    );

    setFocusedDate(offsettedByMonth);
    setMonthName(MONTHS[offsettedByMonth.getMonth()]);
    setCurYear(offsettedByMonth.getFullYear());
  }

  const createUser = async () => {
    const registrationData = {
      username: "test dummy",
      password: "Password1234!",
      email: "testing@wescal.com",
    };
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }
      const result = await response.json();
      console.log("User returned: ", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <div className="w-full sticky top-0 z-30 bg-background">
      <div className="h-18 text-standard-text flex justify-end">
        <div className="w-[70%] py-1 px-2 text-xl font-semibold flex flex-col justify-end">
          {monthName} {curYear}
        </div>
        <div className="w-[30%] py-3 px-2 round-lg flex justify-end text-right items-start items-right">
          {/* WARN: Bug with the arrows. Probably to do with math. Check July 2025 -> August 2025. 
              Bug occurred on 7/29 when clicking buttons the week didn't change but the month name did*/}

          {/* TODO: Add a dropdown menu instead of a log in/register button */}

          <Dropdown displayText="Register" className="px-1 border border-white">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="username"
                placeholder="username"
                className="border border-background rounded focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border border-background focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="border border-background focus:outline-none"
              />
              <div className="py-0.0 ">
                <button className="flex rounded ">Submit</button>
              </div>
            </div>
          </Dropdown>
          {/* NOTE: Hard coded to only change the current week. Later change to change the day based on the view */}
          <Image
            className="fill-gray-300 rotate-180"
            src="/arrow.svg"
            alt="Previous Week"
            width={20}
            height={20}
            onClick={() => {
              buttonPress(false);
            }}
          />
          <Image
            className="fill-gray-300"
            src="/arrow.svg"
            alt="Next Week"
            width={20}
            height={20}
            onClick={() => {
              buttonPress(true);
            }}
          />
        </div>
      </div>
      <div className="text-secondary-text">
        <WeekdayBar />
      </div>
    </div>
  );
}
