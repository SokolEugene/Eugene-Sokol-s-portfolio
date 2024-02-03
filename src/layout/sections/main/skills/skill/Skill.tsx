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
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 33%;
  margin: 10px;
`;

const SkillTitle = styled.div``;
