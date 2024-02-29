import React from "react";
import photo from "../../../assets/images/photo.jpg";
import { styled } from "styled-components";
import { Wrapper } from "../../../components/Wrapper";
import { Container } from "../../../components/container";
import { theme } from "../../../styles/Theme";
export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Wrapper justify="space-between">
          <TextWrapper>
            <StyledTextBox>
              <SmallText>Hey, I’m</SmallText>
              <Name>
                Eugene <br /> Sokol
              </Name>
              <MainTitle>a software developer</MainTitle>
            </StyledTextBox>
          </TextWrapper>

          <PhotoWrapper>
            <StyledPhoto src={photo} />
          </PhotoWrapper>
        </Wrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: ${theme.colors.accent};
  display: flex;
  min-height: 100vh;
  padding-top: 70px;
  overflow-y: auto;
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PhotoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const StyledPhoto = styled.img`
  max-height: 1034px;
  max-width: 850px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;
  color: ${theme.colors.fontAccent};
`;

const Name = styled.h2`
  font-weight: 600;
  font-size: 127px;
  letter-spacing: 0.05em;
`;
const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;
`;
