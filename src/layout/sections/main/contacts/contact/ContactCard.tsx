import React from "react";
import { Icon } from "../../../../../components/icon/Icon";
import { styled } from "styled-components";
import { theme } from "../../../../../styles/Theme";

type InfoItem = {
  question: string;
  answer: string;
};
type InfoIcon = {
  id: string;
  height: string;
  width: string;
  fill: string;
  viewBox: string;
};

type contactCardPropsType = {
  info: InfoItem[];
  icon: InfoIcon[];
};

export const ContactCard = (props: contactCardPropsType) => {
  return (
    <StyledContactCard>
      <IconBox>
        {props.icon.map((item, index) => (
          <Icon
            iconId={item.id}
            fill={item.fill}
            height={item.height}
            width={item.width}
            viewBox={item.viewBox}
          />
        ))}
      </IconBox>
      <TextBox>
        {props.info.map((item, index) => (
          <String key={index}>
            <InfoQ>{item.question}</InfoQ>
            <InfoA>{item.answer}</InfoA>
          </String>
        ))}
      </TextBox>
    </StyledContactCard>
  );
};

const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  outline: red 1px solid;
  background-color: ${theme.colors.primaryBG};
  padding: 25px;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.fontAccent};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  color: ${theme.colors.accent};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactInfo = styled.div`
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  outline: red 1px solid;
  margin: 0 auto;
`;

const String = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoQ = styled.label`
  display: flex;
  color: ${theme.colors.accent};
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 123.6%;
  letter-spacing: 0%;
  text-align: left;
`;
const InfoA = styled.label`
  color: ${theme.colors.accent};
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 123.6%;
  letter-spacing: 0%;
  text-align: left;
`;
