import React from "react";
import { styled } from "styled-components";

import todolist from "../../../../assets/images/todolist.jpg";
import counter from "../../../../assets/images/counter.jpg";
import socialnetwork from "../../../../assets/images/socialnetwork.jpg";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Menu } from "../../../../components/menu/Menu";
import { Wrapper } from "../../../../components/Wrapper";
import { Work } from "./work/Work";

const worksItems = ["Social network", "todolist", "counter"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My projects</SectionTitle>
      <Menu items={worksItems} />
      <Wrapper justify="space-around">
        <Work
          title="Social network"
          ImgPath={socialnetwork}
          text="Lorem ipsum"
        ></Work>
        <Work title="To do List" ImgPath={todolist} text="Lorem ipsum"></Work>
        <Work title="Counter" ImgPath={counter} text="Lorem ipsum"></Work>
      </Wrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  min-height: 100vh;
  background-color: #d2f2c1;
`;
