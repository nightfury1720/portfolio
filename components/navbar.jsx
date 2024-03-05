import styled from "styled-components";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  return (
    <NavContainer>
      <FlexContainer>
        <Name>Suraj Dwivedi</Name>
        <MenuToggle onClick={toggleNavbar}>☰</MenuToggle>
      </FlexContainer>
      <Menus isExpanded={isExpanded}>
        <NavItem href="#intro" onClick={closeNavbar}>
          <Numbers>01.</Numbers> Home
        </NavItem>
        <NavItem href="#skills" onClick={closeNavbar}>
          <Numbers>02.</Numbers> Skills
        </NavItem>
        <NavItem href="#work" onClick={closeNavbar}>
          <Numbers>03.</Numbers> Work
        </NavItem>
        <NavItem href="#experience" onClick={closeNavbar}>
          <Numbers>04.</Numbers> Experience
        </NavItem>
        <NavItem href="#contact" onClick={closeNavbar}>
          <Numbers>05.</Numbers> Contact
        </NavItem>
      </Menus>
    </NavContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Numbers = styled.div`
  padding-right: 8px;
  color: #39f039;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0px;
  background-color: rgba(10, 25, 47, 0.90);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center; /* Center align on small screens */
    padding: 20px;
  }
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #39f039;
`;

const MenuToggle = styled.button`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

const Menus = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center; /* Center align on small screens */
    width: 100%;
    margin: 0px auto;
    font-size: 24px;
    display: ${({ isExpanded }) => (isExpanded ? "flex" : "none")};
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: flex-end;
  padding: 0px 15px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 850px) {
    padding: 10px 0;
  }
`;

export default Navbar;
