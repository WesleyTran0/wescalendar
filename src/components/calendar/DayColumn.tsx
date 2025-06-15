"use client";

import { useState } from "react";

type DayColumnProps = {
  day: Date;
};

export default function DayColumn({ day }: DayColumnProps) {
  const numHours = 24;
  const [columnWidth, setColumnWidth] = useState(((100 - 4) / 7).toFixed(1));

  return (
    <div className={`w-[${columnWidth}%] z-10`}>
      <div>
        {/* NOTE: This is the long column + lines */}
        {Array.from({ length: 24 }, (_, i) => (
          // NOTE: hard coded width/height
          <div
            key={day.toISOString() + "_hour_" + i + "_columnComp"}
            className={"h-20 border border-bg-highlight"}
          ></div>
        ))}
      </div>
      <div>
        {/* NOTE: This should be the column housing all the event/tasks */}
      </div>
    </div>
  );
}
