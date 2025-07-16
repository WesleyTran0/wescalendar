"use client";

type DayCellProps = {
  day: Date;
  hour: number;
  onClick?: () => void;
};

const createTask = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/events/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(""),
    });

    const result = await response.json();
    console.log("Event returned: ", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function DayCell({ day, hour }: DayCellProps) {
  return (
    <div
      className={"h-20 border border-bg-highlight"}
      // onClick={() => console.log(day.toDateString())}
      onClick={createTask}
    >
      test create task connection
    </div>
  );
}
