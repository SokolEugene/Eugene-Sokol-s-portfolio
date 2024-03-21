import React from "react";
import photo from "../../../assets/images/photo.jpg";
import { styled } from "styled-components";
import { Wrapper } from "../../../components/Wrapper";
import { Container } from "../../../components/container";
import { theme } from "../../../styles/Theme";
export const Main = () => {
  return (
    <StyledMain>
      <TextWrapper>
        <StyledTextBox>
          <SmallText>Hey, I’m</SmallText>
          <Name>
            Eugene <br /> Sokol
          </Name>
          <MainTitle>a software developer</MainTitle>
        </StyledTextBox>
      </TextWrapper>
      {/* <PhotoWrapper2> */}
      <PhotoWrapper>
        <StyledPhoto src={photo} />
      </PhotoWrapper>
      {/* </PhotoWrapper2> */}
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: #015761;
  display: flex;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 0;
  padding-top: 75%;
  position: relative;
`;
const StyledPhoto = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* //max-height: 811px;
  // max-width: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; */
`;
const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
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
const MainTitle = styled.p`
  color: ${theme.colors.fontMain};
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;
`;

// const PhotoWrapper2 = styled.div``;
