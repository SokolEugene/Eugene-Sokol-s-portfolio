import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Icon } from "../../../../components/icon/Icon";
import { Slider } from "./slider/Slider";
import { Wrapper } from "../../../../components/Wrapper";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <Wrapper align="center" direction="column">
        <Icon iconId="quote" />
        <Slider />
      </Wrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 60vh;
  background-color: #ededb0;
`;
