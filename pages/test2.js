import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Home() {
  const nameRef = useRef(null);
  const birdRef = useRef(null);
  const [changes, setChanges] = useState(null);

  const tweening = (target, nameElement, count, dx, dy) => {
    console.log(count);
    if (count <= 4) {
      gsap.to(target, {
        x: gsap.utils.random(-dx, dx),
        y: gsap.utils.random(-dy, dy),
        scale: gsap.utils.random(0.2, 0.8),
        duration: 1,
        ease: "power1.inOut",
        onComplete: tweening,
        onCompleteParams: [target, nameElement, count + 1, dx, dy],
      });
    } else {
    }
  };

  const returnAboveComp = (curr, target) => {
    const currRect = curr.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top;
    const currX = currRect.left + currRect.width / 2;
    const currY = currRect.top + currRect.height / 2;

    const shiftX = targetX - currX;
    const shiftY = targetY - currY;
    console.log(currX, currY, targetX, targetY, shiftX, shiftY);
    if (shiftX !== 0 || shiftY !== 0)
      gsap.to(curr, {
        x: shiftX,
        y: shiftY,
        scale: 0.2,
        rotation: 360,
        duration: 1,
        ease: "power1.inOut",
      });
  };

  useEffect(() => {
    const dx = window.innerWidth * 0.1;
    const dy = window.innerHeight * 0.1;
    const birdElement = birdRef.current; // Access the DOM element
    const nameElement = nameRef.current; // Access the DOM element

    tweening(birdElement, nameElement, 0, dx, dy);
  }, []);

  const handleOnClick = () => {
    console.log("Clicked");
    gsap.killTweensOf(birdRef.current);
    returnAboveComp(birdRef.current, nameRef.current);
  };

  return (
    <>
      <Wrapper>
        <BirdWrapper>
          <Bird ref={birdRef} />
        </BirdWrapper>
        <Content>
          <Section id="intro">
            <HeroName ref={nameRef} onClick={handleOnClick}>
              S<ArrivalPos>D</ArrivalPos>
            </HeroName>
          </Section>
        </Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const BirdWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
`;

const Bird = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 50px;
  height: 30px;
  background-color: green;
`;

const Content = styled.div``;

const ArrivalPos = styled.span``;
const HeroName = styled.div`
  width: 100%;
  margin-top: 20%;
  text-align: center;
  font-size: 20pxpx;
  font-weight: 600;
  &:hover {
    color: #00ff08;
  }
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
