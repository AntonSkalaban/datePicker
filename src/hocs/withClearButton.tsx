import React from "react";
import { CalendarProps } from "components/Calendar";
import { StyledContainerButton } from "components/styled/StyledComponetns";

export const withClearButton = (onClick: () => void) => (Component: React.FC<CalendarProps>) => {
  return (props: CalendarProps) => {
    const hanleCkick = () => {
      onClick();
    };

    return (
      <>
        <Component {...props} />
        <StyledContainerButton data-testid={"clear-button"} onClick={hanleCkick}>
          Clear
        </StyledContainerButton>
      </>
    );
  };
};