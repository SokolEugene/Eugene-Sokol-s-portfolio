import React from "react";
import photo from "../../../assets/images/photo.jpg";
import { styled } from "styled-components";
import { Wrapper } from "../../../components/Wrapper";
export const Main = () => {
  return (
    <StyledMain>
      <Wrapper align="center" justify="space-around">
        <StyledTextBox>
          <MainTitle>Hi👋, I’m a software developer</MainTitle>
          <Caption>
            I’m Eugene Sokol, a developer dedicated to making the world a better
            place one line of code at a time.
          </Caption>
        </StyledTextBox>
        <StyledPhoto src={photo} />
      </Wrapper>
    </StyledMain>
  );
};

const StyledPhoto = styled.img`
  height: 390px;
  width: 343px;
  object-fit: cover;
`;

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #d2f2c1;
`;

const StyledTextBox = styled.div``;

const MainTitle = styled.span``;
const Caption = styled.span``;
