import React from "react";
import { styled } from "styled-components";

import todolist from "../../../../assets/images/todolist.jpg";
import counter from "../../../../assets/images/counter.jpg";
import socialnetwork from "../../../../assets/images/socialnetwork.jpg";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Wrapper } from "../../../../components/Wrapper";
import { Work } from "./work/Work";
import { Container } from "../../../../components/container";
import { SectionDescription } from "../../../../components/SectionDescription";

const worksItems = ["Social network", "todolist", "counter"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My projects</SectionTitle>
        <SectionDescription>Things I’ve built so far</SectionDescription>
        <Wrapper justify="space-between" align="flex-start">
          <Work
            title="Social network"
            ImgPath={socialnetwork}
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          ></Work>
          <Work
            title="To do List"
            ImgPath={todolist}
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          ></Work>
          <Work
            title="Counter"
            ImgPath={counter}
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          ></Work>
        </Wrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
