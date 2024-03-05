import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Icon } from "../../../../components/icon/Icon";
import { Slider } from "./slider/Slider";
import { Wrapper } from "../../../../components/Wrapper";
import { Container } from "../../../../components/container";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Wrapper align="center" direction="column">
          <Icon iconId="quote" />
          <Slider />
        </Wrapper>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section``;
