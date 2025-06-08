"use client";
import { useState, ReactElement } from "react";

export type DayProps = {
  date: Date;
};

export default function Day({ date }: DayProps): ReactElement {
  const [isFocused, setIsFocused] = useState(false);
  const dayNum = date.getDate();

  if (isFocused) {
    return <button className="unfocused-day">Day {dayNum}</button>;
  } else {
    return <button className="focused-day">Day {dayNum}</button>;
  }
}
