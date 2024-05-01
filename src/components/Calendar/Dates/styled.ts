import { cellMixin } from "styled";
import { styled } from "styled-components";

type RangeStatus = "" | "endRange" | "startRange" | "inRange";

const borderdRadiuses = {
  select: "8px",
  startRange: "8px 0  0 8px",
  endRange: "0px 8px 8px 0",
  inRange: "0",
};

export const CalendarButton = styled.button<{
  $isSelect: boolean;
  $isActive: boolean;
  $isHoliday: boolean;
  $isWeekend: boolean;
  $rangeStatus: RangeStatus;
  $holidayColor: "red" | "green" | "blue";
}>`
  ${cellMixin}
  border-radius: ${({ $isSelect, $rangeStatus }) => {
    if ($rangeStatus) return borderdRadiuses[$rangeStatus];
    if ($isSelect) return borderdRadiuses.select;
    return "0";
  }};

  background: ${({ $isSelect, $rangeStatus, theme: { colors } }) => {
    if ($isSelect) return colors.blue;
    if ($rangeStatus === "endRange" || $rangeStatus === "startRange") return colors.lightBlue;
    if ($rangeStatus === "inRange") return colors.veryLightBlue;
    return colors.white;
  }};

  color: ${({
    $isActive,
    $isSelect,
    $rangeStatus,
    $isHoliday,
    $holidayColor,
    $isWeekend,
    theme: { colors },
  }) => {
    if ($isHoliday) return colors[$holidayColor];
    if ($isSelect || $rangeStatus === "endRange" || $rangeStatus === "startRange") {
      return colors.lightBlue;
    }
    if ($rangeStatus === "inRange") return colors.blue;
    if ($isWeekend) return colors.red;
    if ($isActive) return colors.black;

    return colors.grey;
  }};
`;
