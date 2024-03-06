import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ContactCard, ContactInfo } from "./contact/ContactCard";
import { SuperBtn } from "../../../../components/SuperBtn";
import { Wrapper } from "../../../../components/Wrapper";
import { Container } from "../../../../components/container";
import { theme } from "../../../../styles/Theme";

const contactInfoGroup1 = [
  { question: "Telegram:", answer: "@eugenskl" },
  { question: "E-mail:", answer: "yauhenisokal@gmail.com" },
  { question: "Phone number:", answer: "+37125468986" },
];

const contactInfoGroup2 = [
  { question: "GitHub:", answer: "github.com/EugeneSokol" },
  { question: "LinkedIn:", answer: "linkedin.com/in/eugenskl" },
  { question: "Instagram:", answer: "@eugenskl" },
];

const contactInfoGroup3 = [
  { question: "Country:", answer: "Belarus" },
  { question: "City:", answer: "Minsk" },
  { question: "Language:", answer: "English, Russian" },
];

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <Wrapper>
          <StyledForm>
            <InputName>Your Full Name (Required)</InputName>
            <Field />
            <InputName>Your Email (Required)</InputName>
            <Field />
            <InputName>Subject</InputName>
            <Field />
            <InputName>Your Message</InputName>
            <Textarea />
            <SuperBtn type={"submit"}>Send</SuperBtn>
          </StyledForm>
          <ContactInfo>
            <ContactCard info={contactInfoGroup1} />
            <ContactCard info={contactInfoGroup2} />
            <ContactCard info={contactInfoGroup3} />
          </ContactInfo>
        </Wrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  max-width: 570px;
  width: 100%;
  display: flex;
  flex-direction: column;
  //outline: red 1px solid;
  margin: 0 auto;
  padding: 25px;
  background-color: ${theme.colors.primaryBG};

  textarea {
    resize: none;
  }
`;

const InputName = styled.label`
  color: ${theme.colors.accent};
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 123.6%;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBG};
  border: none;
  height: 50px;
  margin-bottom: 25px;
  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 210px;
  background-color: ${theme.colors.secondaryBG};
  border: none;
  margin-bottom: 25px;
  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`;
