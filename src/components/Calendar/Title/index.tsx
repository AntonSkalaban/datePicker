import React, { useContext } from "react";

import { ConfigContext } from "components/index";
import { getDDMMYYFromDate, getMonthName, getNextMonth, getPrevMonth } from "utils";
import NextIcon from "assets/img/svg/next.svg";
import PrevIcon from "assets/img/svg/prev.svg";
import { TitleButton, TitleContainer } from "./styled";

interface TitleProps {
  changeOpenMonth: (date: Date) => void;
}
export const Title: React.FC<TitleProps> = ({ changeOpenMonth }) => {
  const { maxDate, minDate, cuurentDate } = useContext(ConfigContext);

  const [, mm, yy] = getDDMMYYFromDate(cuurentDate).map(Number);
  const [prevYear, prevMonth] = getPrevMonth(yy, mm);
  const [nextYear, nextMonth] = getNextMonth(yy, mm);

  const prevDate = new Date(prevYear, prevMonth - 1);
  const nextDate = new Date(nextYear, nextMonth - 1);

  const toPrevMonth = () => {
    changeOpenMonth(prevDate);
  };

  const toNextMonth = () => {
    changeOpenMonth(nextDate);
  };

  return (
    <TitleContainer>
      <TitleButton onClick={toPrevMonth} disabled={minDate > prevDate}>
        <PrevIcon />{" "}
      </TitleButton>
      <p>
        {getMonthName(cuurentDate)} {cuurentDate.getFullYear()}
      </p>
      <TitleButton onClick={toNextMonth} disabled={maxDate < nextDate}>
        <NextIcon />{" "}
      </TitleButton>
    </TitleContainer>
  );
};