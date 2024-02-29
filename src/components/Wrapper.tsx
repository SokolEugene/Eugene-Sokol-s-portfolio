import { styled } from "styled-components";

type WrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  color?: string;
};

export const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "straight"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  height: 100%;
  //background-color: ${(props) => props.color || "#fff"};
`;
