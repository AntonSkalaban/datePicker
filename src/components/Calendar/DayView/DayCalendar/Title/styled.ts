import { styled } from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleButton = styled.button`
  &:disabled {
    opacity: 0.2;
  }
`;
