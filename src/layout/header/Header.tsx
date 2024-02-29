import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/container";
import { Wrapper } from "../../components/Wrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";

const headerItems = ["About me", "Skills", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrapper justify={"space-between"} align={"center"}>
          <Logo />
          <HeaderMenu items={headerItems} />
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.accent};
  //background-color: #f7dc4f;
  // display: flex;
  //  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  //width: 100%;

  // padding: 20px;
`;
