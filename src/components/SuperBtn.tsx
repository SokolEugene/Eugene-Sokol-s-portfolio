import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const SuperBtn = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  width: 160px;
  height: 40px;
  background-color: ${theme.colors.accent};
  &:hover {
    background-color: ${theme.colors.fontAccent};
    color: ${theme.colors.accent};
  }
`;
