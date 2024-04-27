import React, { useLayoutEffect, useState } from "react";
import { getWeekdays } from "utils/helpers/helpers";

interface WeekdaysProps {
  isWeekStartFromSun: boolean;
}

export const Weekdays: React.FC<WeekdaysProps> = ({ isWeekStartFromSun }) => {
  const [weekdays, setWeekdays] = useState([] as string[]);

  useLayoutEffect(() => {
    setWeekdays(getWeekdays(isWeekStartFromSun));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {weekdays.map((day) => (
        <span
          key={day}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
          }}
        >
          {day}
        </span>
      ))}
    </div>
  );
};
