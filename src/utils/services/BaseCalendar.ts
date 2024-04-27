import {
  geStartDateOfPrevWeek,
  getDaysInMonth,
  getNextMonth,
  getNextWeek,
  getPrevMonth,
  getPrevWeek,
} from "utils/helpers/helpers";
import { CalendarConfig, CalendarGrid } from "types";

export interface Calendar {
  config: CalendarConfig;
  getGrid(): CalendarGrid[][];
}

export class BaseCalendar implements Calendar {
  config: CalendarConfig;

  constructor(config: CalendarConfig) {
    this.config = config;
  }
  getGrid() {
    return BaseCalendar.createBaseGrid(this.config.openDate, this.config.isWeekStartFromSun);
  }

  static createBaseGrid = (openDate: Date, isWeekStartFromSun: boolean): CalendarGrid[][] => {
    const [yy, mm] = [openDate.getFullYear(), openDate.getMonth()];

    const firstDate = new Date(yy, mm);
    const daysInMonth = getDaysInMonth(openDate);

    const firstDayIndx = firstDate.getDay() - (isWeekStartFromSun ? 0 : 1);
    const lastDayIndx = new Date(yy, mm, daysInMonth).getDay() - (isWeekStartFromSun ? 0 : 1);

    const [prevYear, prevMonth] = getPrevMonth(yy, mm);
    const [nextYear, nextMonth] = getNextMonth(yy, mm);

    const startFullDateOfPrevWeek = geStartDateOfPrevWeek(prevYear, prevMonth, firstDayIndx);
    const startDateOfPrevWeek = startFullDateOfPrevWeek.getDate();

    const prevWeek = getPrevWeek(prevYear, prevMonth, startDateOfPrevWeek, firstDayIndx);
    const nextWeek = getNextWeek(nextYear, nextMonth, lastDayIndx);

    const dates = [prevWeek];

    for (let i = 1; i <= daysInMonth; i++) {
      const lastWeek = dates[dates.length - 1];
      const newDate = {
        date: new Date(yy, mm, i),
        isSelect: false,
        rangeStatus: "",
        isHoliday: false,
        isWeekend: false,
      };

      if (lastWeek.length < 7) {
        lastWeek.push(newDate);
      } else {
        dates.push([newDate]);
      }
    }
    dates[dates.length - 1].push(...nextWeek);

    return dates as CalendarGrid[][];
  };
}