import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type MenuPropsType = {
  items: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <Link href="">{item}</Link>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  ul {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
`;
const Link = styled.a`
  font-family: "Wix Madefor Text";
  font-size: 23px;
  font-weight: 400;
  color: ${theme.colors.fontMain};
  text-align: center;
  &:hover {
    color: ${theme.colors.fontAccent};
  }
`;
