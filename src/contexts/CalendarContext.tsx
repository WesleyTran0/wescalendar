"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type CalendarContextType = {
  today: Date;
  focusedDate: Date;
  view: "day" | "week" | "month";
  setFocusedDate: (date: Date) => void;
  setView: (view: "day" | "week" | "month") => void;
};

const CalendarContextInternal = createContext<CalendarContextType | undefined>(
  undefined,
);

export function useCalendar() {
  const context = useContext(CalendarContextInternal);

  if (!context) {
    throw new Error("CalendarContext is undefined. Something went wrong.");
  }

  return context;
}

export default function CalendarContext({ children }: { children: ReactNode }) {
  const today = new Date();
  const [focusedDate, setFocusedDate] = useState(new Date());
  const [view, setView] = useState<"day" | "week" | "month">("week");

  return (
    <CalendarContextInternal.Provider
      value={{
        today,
        focusedDate,
        view,
        setFocusedDate,
        setView,
      }}
    >
      {children}
    </CalendarContextInternal.Provider>
  );
}
