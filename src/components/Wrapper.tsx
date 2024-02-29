import { styled } from "styled-components";

type WrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  color?: string;
  maxWidth?: string;
  flexWrap?: string;
};

export const Wrapper = styled.div<WrapperPropsType>`
  max-width: ${(props) => props.maxWidth || "100%"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "straight"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  //background-color: ${(props) => props.color || "#fff"};
`;
