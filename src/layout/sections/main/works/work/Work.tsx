import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";
import { Icon } from "../../../../../components/icon/Icon";

type WorkPropsType = {
  title: string;
  text: string;
  ImgPath: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <PhotoWrapper>
        <Image src={props.ImgPath} alt={props.title} />
      </PhotoWrapper>
      <TextWrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Description>Stack</Description>
      </TextWrapper>
      <LinkBox>
        <LinkItem>
          <Icon iconId="chain" height="20px" width="20px" fill="#f1f0f0" />
          <Link href="#">Preview</Link>
        </LinkItem>
        <LinkItem>
          <Icon iconId="gitIcon" height="20px" width="20px" />
          <Link href="#">Code</Link>
        </LinkItem>
      </LinkBox>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBG};
  display: flex;
  flex-direction: column;
  color: #015761;
  outline: 1px solid red;
  border-radius: 20px;
  width: 375px;
  height: 570px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`;

const PhotoWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  max-width: 375px;
  max-height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 27px;
`;

const Title = styled.h3`
  color: #015761;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 15px;
`;
const Text = styled.p``;
const Description = styled.p``;

const LinkBox = styled.div`
  display: flex;
  padding: 27px;
  gap: 45px;
`;
const LinkItem = styled.div`
  display: flex;
`;

const Link = styled.a`
  padding-left: 10px;
  color: #015761;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration-line: underline;
`;
