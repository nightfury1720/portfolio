import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  {
    name: 'Intro',
    hash: '#intro',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Work',
    hash: '#work',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <HeaderContainer>
      <HeaderBackground
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <Nav>
        <Ul>
          {links.map((link) => (
            <Li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <StyledLink
                href={link.hash}
                isActive={activeSection === link.name}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
              </StyledLink>
            </Li>
          ))}
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  z-index: 999;
  position: relative;
`

const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 4.5rem;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(0.5rem);
  transform: translateX(-50%);

  @media (min-width: 640px) {
    top: 1.5rem;
    height: 3.25rem;
    width: 36rem;
    border-radius: 1.625rem;
  }

  &.dark {
    background: rgba(34, 34, 34, 0.75);
    border-color: rgba(0, 0, 0, 0.4);
  }
`

const Nav = styled.nav`
  position: fixed;
  top: 0.15rem;
  left: 50%;
  height: 3rem;
  transform: translateX(-50%);
  padding: 0.5rem;

  @media (min-width: 640px) {
    top: 1.7rem;
    height: initial;
    padding: 0;
  }
`

const Ul = styled.ul`
  display: flex;
  width: 22rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;

  @media (min-width: 640px) {
    width: initial;
    flex-wrap: nowrap;
    gap: 1.25rem;
  }

  .dark & {
    color: #a0aec0;
  }
`

const Li = styled.li`
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  transition: color 0.3s;

  &:hover {
    color: #1a202c;

    .dark & {
      color: #e2e8f0;
    }
  }

  ${(props) =>
    props.isActive &&
    `
    color: #1a202c;
    .dark & {
      color: #edf2f7;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #edf2f7;
      border-radius: 9999px;
      z-index: -1;
    }
    
    .dark &::before {
      background: #2d3748;
    }
  `}
`

export default Header;
