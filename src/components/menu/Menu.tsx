import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">About me</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  ul {
    display: flex;
    gap: 7px;
  }
`;
