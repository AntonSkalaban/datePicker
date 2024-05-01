export interface CalendarConfig {
  cuurentDate: Date;
  minDate: Date;
  maxDate: Date;
  isWeekStartFromSun: boolean;
  withJumpByEnteredDate: boolean;
  withDateRange: boolean;
  withTodo: boolean;
  showWeekendsAndHoliday: boolean;
  selectDate: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  holidayColor: "red" | "blue" | "green";
}
