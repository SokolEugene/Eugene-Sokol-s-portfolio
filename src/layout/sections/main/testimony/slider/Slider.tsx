import React from "react";
import { styled } from "styled-components";
import { Wrapper } from "../../../../../components/Wrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <Wrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Name> Eugene Sokol</Name>
        </Slide>
      </Wrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid;
  max-width: 600px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span``;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 5px;
    border-radius: 5px;
    background-color: #0cff4d;
  }
`;
