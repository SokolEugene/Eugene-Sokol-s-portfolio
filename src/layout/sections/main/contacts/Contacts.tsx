import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ContactCard, ContactInfo } from "./contact/ContactCard";
import { SuperBtn } from "../../../../components/SuperBtn";
import { Wrapper } from "../../../../components/Wrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact me</SectionTitle>
      <Wrapper justify="space-around">
        <StyledForm>
          <Field placeholder={"name"} />
          <Field placeholder={"subject"} />
          <Field placeholder={"message"} as={"textarea"} />
          <SuperBtn type={"submit"}>Send</SuperBtn>
        </StyledForm>
        <ContactInfo>
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </ContactInfo>
      </Wrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 60vh;
  background-color: #de7171;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid;
  margin: 0 auto;
`;

const Field = styled.input``;
