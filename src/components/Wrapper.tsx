import { styled } from "styled-components";

type WrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  color?: string;
  maxWidth?: string;
  flexWrap?: string;
  maxHeight?: string;
  height?: string;
  width?: string;
};

export const Wrapper = styled.div<WrapperPropsType>`
  height: ${(props) => props.height || "100%"};
  max-height: ${(props) => props.maxHeight || "1850px"};
  max-width: ${(props) => props.maxWidth || "1200px"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  //background-color: ${(props) => props.color || "#fff"};
  /* max-height: ${(props) => props.maxHeight || "100%"};
  max-width: ${(props) => props.maxWidth || "100%"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "straight"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  background-color: ${(props) => props.color || "#fff"}; */
`;
