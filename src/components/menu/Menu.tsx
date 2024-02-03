import React from "react";
import styled from "styled-components";

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
              <a href="">{item}</a>
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
    gap: 7px;
    justify-content: center;
  }
`;
