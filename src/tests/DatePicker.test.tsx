import { fireEvent, render } from "@testing-library/react";
import { DatePicker } from "../App";

import "jest-styled-components";

describe("DatePicker controls", () => {
  it("should open selected date", () => {
    const { getByTestId, getByText } = render(<DatePicker />);
    const input = getByTestId("date-select-input");

    fireEvent.change(input, { target: { value: "12/12/2020" } });

    const calendarTitle = getByText("December 2020");
    const clearButton = getByTestId("clear-button");
    const selectDate = getByText("12");

    expect(input).toBeDefined();
    expect(selectDate).toHaveStyleRule("background", "rgba(47, 128, 237, 1)");
    expect(clearButton).toBeDefined();
    expect(calendarTitle).toBeDefined();
  });

  it("should open dates range", () => {
    const { getByTestId, getByText } = render(<DatePicker />);
    const fromDateInput = getByTestId("date-range-from-input");
    const toDateInput = getByTestId("date-range-to-input");

    fireEvent.change(fromDateInput, { target: { value: "12/12/2020" } });
    fireEvent.change(toDateInput, { target: { value: "18/12/2020" } });

    const calendarTitle = getByText("December 2020");
    const clearButton = getByTestId("clear-button");
    const startRangeBtn = getByText("12");
    const inRangeBtn = getByText("13");
    const endRangeBtn = getByText("18");

    expect(fromDateInput).toBeDefined();
    expect(toDateInput).toBeDefined();
    expect(clearButton).toBeDefined();

    expect(calendarTitle).toBeDefined();
    expect(startRangeBtn).toHaveStyleRule("background", "rgba(47, 128, 237, 0.6)");
    expect(inRangeBtn).toHaveStyleRule("background", "rgba(47, 128, 237, 0.1)");
    expect(endRangeBtn).toHaveStyleRule("background", "rgba(47, 128, 237, 0.6)");
  });
});
