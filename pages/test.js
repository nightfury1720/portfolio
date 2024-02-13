import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function Home() {
  const nameRef = useRef(null);

  useEffect(() => {
    // Animation with GSAP
    const nameAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    nameAnimation.fromTo(
      nameRef.current,
      { rotation: -2, duration: 0.05 },
      { rotation: 2, duration: 0.05, ease: 'power1.inOut' }
    );

    gsap.from(nameRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <Content>
        <Section id="intro">
          <HeroName ref={nameRef}>SURAJ Dwivedi</HeroName>
        </Section>
        
      </Content>
    </>
  );
}

const Content = styled.div``;

const HeroName = styled.div`
  width: 100%;
  margin-top: 20%;
  text-align: center;
  font-size: 100px;
  font-weight: 600;
  @media (max-width: 850px) {
    font-size: 60px;
  }
`;
const Section = styled.section`
  width: 100%;
  align-items: center;
  font-size: 60px;
  color: #ffffff;
`;
