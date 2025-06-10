"use client";
import { useState, ReactElement } from 'react';
import AppletTile from '@components/shared/AppletTile';

type DayProps = {
  date: Date;
  className?: string;
};

export default function Day({ date, className = "" }: DayProps): ReactElement {
  const [isFocused, setIsFocused] = useState(false);
  const dayNum = date.getDate();
  // const className = isFocused ? "focused-day" : "unfocused-day";

  // TODO: Add tailwind css to this. Maybe create a tile applet component for things like small buttons (each day) or icons (colors of each cal)
  return (
    <AppletTile
      className={className}
      onClick={() => console.log(dayNum)}>
      <div>{dayNum}</div>
    </AppletTile>
  );
}
