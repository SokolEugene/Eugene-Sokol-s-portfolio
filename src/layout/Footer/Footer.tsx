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
        <Wrapper align="center" direction="column" gap="5px">
          <Name>Eugene Sokol</Name>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <IconBox>
                  <Icon
                    iconId="footerGithub"
                    height="35px"
                    width="35px"
                    fill="#015761"
                    viewBox="-5 -3 25 25"
                  />
                </IconBox>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <IconBox>
                  <Icon
                    iconId="footerTelegram"
                    height="30px"
                    width="30px"
                    fill="#015761"
                    viewBox="3 -1 21 25"
                  />
                </IconBox>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <IconBox>
                  <Icon
                    iconId="footerLinkedin"
                    height="35px"
                    width="35px"
                    fill="#015761"
                    viewBox="-2 -1 24 24"
                  />
                </IconBox>
              </SocialLink>
            </SocialItem>
          </SocialList>

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
  gap: 15px;
`;

const SocialItem = styled.li`
  //outline: red 1px solid;
`;

const SocialLink = styled.a``;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.fontAccent};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.small`
  color: ${theme.colors.fontMain};
`;
