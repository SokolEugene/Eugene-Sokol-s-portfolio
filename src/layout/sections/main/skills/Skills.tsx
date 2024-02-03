import React from "react";
import { styled } from "styled-components";
import { Wrapper } from "../../../../components/Wrapper";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <Wrapper justify="space-around" wrap="wrap">
        <Skill iconId="falcon" title="HTML" />
        <Skill iconId="falcon" title="CSS" />
        <Skill iconId="falcon" title="React" />
        <Skill iconId="falcon" title="JS" />
        <Skill iconId="falcon" title="TS" />
        <Skill iconId="falcon" title="TS" />
      </Wrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #ededb0;
  min-height: 100vh;
`;
