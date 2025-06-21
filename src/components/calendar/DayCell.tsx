"use client";

type DayCellProps = {
  day: Date;
  hour: number;
  onClick?: () => void;
};

export default function DayCell({ day, hour }: DayCellProps) {
  return (
    <div
      className={"h-20 border border-bg-highlight"}
      onClick={() => console.log(day.toDateString())}
    ></div>
  );
}
