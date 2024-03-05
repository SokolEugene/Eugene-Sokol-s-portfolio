import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { Wrapper } from "../../components/Wrapper";
import { Container } from "../../components/container";
import { theme } from "../../styles/Theme";

const footerItems = ["About me", "Skills", "Projects", "Contact"];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper align="center" direction="column">
          <Name>Eugene Sokol</Name>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon iconId="gitIcon" height="50px" width="50px" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId="gitIcon" height="50px" width="50px" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId="gitIcon" height="50px" width="50px" />
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Menu items={footerItems} />
          <Copyright>
            Designed and built by Eugene Sokol with Love & Coffee
          </Copyright>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.accent};
  display: flex;
  flex-direction: column;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
`;

const SocialItem = styled.li`
  border: 1px solid;
`;

const SocialLink = styled.a``;

const Copyright = styled.small`
  color: ${theme.colors.fontMain};
`;
