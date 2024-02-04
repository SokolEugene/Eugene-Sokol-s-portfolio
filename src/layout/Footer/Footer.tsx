import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { Wrapper } from "../../components/Wrapper";

const footerItems = ["About me", "Skills", "Projects", "Contact"];

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Eugene Sokol</Name>
      <Wrapper align="space-center">
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId="inst" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId="inst" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId="inst" />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Menu items={footerItems} />
        <Copyright>
          Designed and built by Eugene Sokol with Love & Coffee
        </Copyright>
      </Wrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #efc05a;
  min-height: 15vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
`;

const SocialItem = styled.li`
  border: 1px solid;
`;

const SocialLink = styled.a``;

const Copyright = styled.small``;
