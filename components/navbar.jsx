import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <Name>Suraj Dwivedi</Name>
      <Menus>
        <NavItem href="#intro">
          <Numbers>01.</Numbers> Home
        </NavItem>
        <NavItem href="#skills">
          <Numbers>02.</Numbers> Skills
        </NavItem>
        <NavItem href="#work">
          <Numbers>03.</Numbers> Work
        </NavItem>
        <NavItem href="#experience">
          <Numbers>04.</Numbers> Experience
        </NavItem>
        <NavItem href="#contact">
          <Numbers>05.</Numbers> Contact
        </NavItem>
      </Menus>
    </NavContainer>
  );
};

const Numbers = styled.div`
  font-size: 12px;
  padding-right:8px;
  color: #39f039;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0px auto;
  padding-top: 20px;
  padding-left:50px;
  padding-right: 50px;
  padding-bottom: 20px;
  z-index: 11;
  top:0px;
  background-color: rgba(10, 25, 47, 0.90);
  position: fixed;
`;

const Menus = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  z-index: 1000;
  /* margin: auto; */
  @media (max-width: 700px) {
    display: none; /* Hide the component when screen width is 600px or less */
  }
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #39f039;
  z-index: 1000;
`;

const NavItem = styled.a`
  display: flex;
  align-items: flex-end;
  padding: 0px 15px 0px 15px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1; /* Restore opacity on hover */
  }
`;

export default Navbar;
