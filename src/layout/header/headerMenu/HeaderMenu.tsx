import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type HeaderMenuPropsType = {
  items: Array<string>;
};

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.items.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.div`
  ul {
    display: flex;
    gap: 18px;
    justify-content: center;
  }
`;

const ListItem = styled.li``;

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
