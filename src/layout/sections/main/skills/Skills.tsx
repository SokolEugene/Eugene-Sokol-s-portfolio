import React from "react";
import { styled } from "styled-components";
import { Wrapper } from "../../../../components/Wrapper";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../../components/container";
import { SectionDescription } from "../../../../components/SectionDescription";
import { theme } from "../../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>
        <SectionDescription>
          Technologies I’ve been working with recently
        </SectionDescription>
        <Wrapper
          justify="space-around"
          flexWrap="wrap"
          gap="50px 100px"
          height="100%"
        >
          <Skill iconId="html" title="HTML" />
          <Skill iconId="css" title="CSS" />
          <Skill iconId="js" title="JS" />
          <Skill iconId="vscode" title="VSCode" />
          <Skill iconId="react" title="React" />
          <Skill iconId="redux" title="Redux.js" />
          <Skill iconId="git" title="GIT" />
          <Skill iconId="github" title="GitHub" />
        </Wrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  //width: 100%;
  //height: 100%;
  margin: 0 auto;
  outline: 1px solid red;
`;
