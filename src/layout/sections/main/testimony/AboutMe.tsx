import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Icon } from "../../../../components/icon/Icon";
import { Slider } from "./slider/Slider";
import { Wrapper } from "../../../../components/Wrapper";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle>About me</SectionTitle>
      <Wrapper align="center" direction="column">
        <Icon iconId="quote" />
        <Slider />
      </Wrapper>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section``;
