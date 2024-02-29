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
        <Skill iconId="html" title="HTML" />
        <Skill iconId="css" title="CSS" />
        <Skill iconId="js" title="JS" />
        <Skill iconId="vscode" title="VSCode" />
        <Skill iconId="react" title="React" />
        <Skill iconId="redux" title="Redux.js" />
        <Skill iconId="git" title="GIT" />
        <Skill iconId="github" title="GitHub" />
      </Wrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #ededb0;
  min-height: 100vh;
`;
