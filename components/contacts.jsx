import React from "react";
import styled from "styled-components";
import { Heading } from "../pages";
function Contacts() {
  return (
    <>
      <ContactsWrapper>
        <Heading>Get In Touch</Heading>
        <Description>
          If you have a project idea, a question, or just want to connect, I'd
          love to hear from you. Feel free to reach out and start a
          conversation. Let's discuss how we can work together or simply
          exchange ideas. Looking forward to chatting with you!
        </Description>
        <Button
          onClick={() => {
            location.href = "mailto:surajguava@gmail.com";
          }}
        >
          Say Hello
        </Button>
      </ContactsWrapper>
      <Footer>
        <a href="https://github.com/nightfury1720/portfolio">
          Designed and Built by Suraj Dwivedi
        </a>
      </Footer>
    </>
  );
}

const Button = styled.div`
  color: #01a659;
  margin: 10px auto;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 24px;
  padding: 10px 10px;
  height: fit-content;
  width: fit-content;
  border: 1px solid #01a659;
  &:hover {
    cursor: pointer;
    border-color: #00ff08;
    background-color: #00ff08;
    color: #ffffff;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
const Description = styled.div`
  font-size: 16px;
`;


const Footer = styled.div`
  max-width: 400px;
  margin: 0px auto;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
  a {
    color: #01a659;
    text-decoration: none;

    &:hover {
      color: #00ff08;
    }
  }
  @media (max-width: 750px) {
    width: 80%;
  }
`;

const ContactsWrapper = styled.div`
  max-width: 600px;
  justify-content: space-between;
  margin: 15% auto;

  @media (max-width: 750px) {
    width: 80%;
  }
`;
export default Contacts;
