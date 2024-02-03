import React from "react";
import styled from "styled-components";

type WorkPropsType = {
  title: string;
  text: string;
  ImgPath: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.ImgPath} alt={props.title} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="#"></Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #d2f2c1;
  max-width: 381px;
`;

const Image = styled.img`
  width: 100%;
  height: 276px;
  object-fit: cover;
`;

const Link = styled.a``;

const Title = styled.h3``;

const Text = styled.p``;
