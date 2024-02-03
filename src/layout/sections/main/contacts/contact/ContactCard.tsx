import React from "react";
import { Icon } from "../../../../../components/icon/Icon";
import { styled } from "styled-components";

export const ContactCard = () => {
  return (
    <StyledContactCard>
      <Icon iconId="" />
      <p>location</p>
      <p>email</p>
    </StyledContactCard>
  );
};

const StyledContactCard = styled.div`
  border: 1px solid;
`;
export const ContactInfo = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid;
  margin: 0 auto;
`;
