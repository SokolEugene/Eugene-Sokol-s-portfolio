import React from "react";
import { Icon } from "../../../../../components/icon/Icon";
import { styled } from "styled-components";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <IconBox>
        <Icon iconId={props.iconId} />
      </IconBox>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  width: 125px;
  height: 150px;
  outline: 1px solid red;
  color: black;
`;
const IconBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 125px;
  outline: 1px solid green;
`;
const SkillTitle = styled.h3`
  color: #015761;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
`;
