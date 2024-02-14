import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
export default function Home() {
  const nameRef = useRef(null);
  const birdRef = useRef(null);
  const [changes, setChanges] = useState(false);
  const [isOpenWing, setIsOpenWing] = useState(true);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const toggleWings = () => {
      setIsOpenWing((prev) => !prev);
      const randomNumber = getRandomNumber(200, 1000);
      setTimeout(toggleWings, randomNumber);
    };
    if (changes) {
      var id = window.setTimeout(function () {}, 0);

      while (id--) {
        console.log(id);
        window.clearTimeout(id); // will do nothing if no timeout with id is present
      }
    } else {
      toggleWings(); // Start toggling immediately
    }

    return () => clearTimeout(toggleWings); // Cleanup on unmount
  }, [changes]);

  const calculateShift = (curr, target) => {
    const currRect = curr.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top;
    const currX = currRect.left + currRect.width / 2;
    const currY = currRect.top + currRect.height / 2;

    const shiftX = targetX - currX;
    const shiftY = targetY - currY;
    const delta = MotionPathPlugin.getRelativePosition(
      curr,
      target,
      [0, 0],
      [0, 0]
    );
    console.log(currX, currY, targetX, targetY, shiftX, shiftY, delta);
    return delta;
  };

  useGSAP(() => {
    const dx = window.innerWidth * 0.2;
    const dy = window.innerHeight * 0.2;
    const birdElement = birdRef.current;
    const nameElement = nameRef.current;
    const delta = calculateShift(birdElement, nameElement);

    const tweening = (dx, dy) => {
      gsap.to(birdElement, {
        x: gsap.utils.random(-dx, dx),
        y: gsap.utils.random(-dy, dy),
        scale: gsap.utils.random(0.2, 0.8),
        duration: 4,
        ease: "power1.inOut",
        onComplete: tweening,
        onCompleteParams: [dx, dy],
      });
    };

    console.log("Chnages: ", delta, changes);
    if (changes === true)
      gsap.to(birdElement, {
        x: "+=" + delta.x,
        y: "+=" + delta.y,
        scale: 1,
        duration: 3,
        ease: "power1.inOut",
      });
    else tweening(dx, dy);
  }, [changes]);

  const handleOnClick = () => {
    setChanges((count) => {
      gsap.killTweensOf(birdRef.current);
      return !count;
    });
  };

  return (
    <>
      <Wrapper>
        {/* <BirdWrapper> */}
        <Bird ref={birdRef}>
          <svg
            id="bird01"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 117.75 28.61"
            width="117.75"
            height="28.61"
          >
            <g id="layer1" fill="#a3a3a3">
              {/* Define your bird SVG here */}
              {/* Open wing path */}
              <path
                id="open-wing"
                fill="green"
                d="M.28 12.2c-.94.75.64 1.28 2.32 1.78 3.47 1.07 8.2-.65 11.58-1.1 8.3-1.1 16.94.82 23.9 5.44.75.53 1.63 1.13 2.14 1.93 1.4 2.23.3 5.6 2.37 7.24 1.6 1.2 4 .3 5.7-.7 4.2-2.4 8.1-5.5 11.4-8.9 3.3-3.5 6.4-7.3 10.7-9.2 3.12-1.4 6.8-1.4 10.2-1.2C93.8 8 95.7 10 106.1 15c4.05.5 8.8.85 11.53-2.1-.77-.96-2.08-1.25-3.2-1.58C101.03 8.1 99.35 5.6 86.8.9c-4.38-1.63-9.5-.86-13.94.8-3.6 1.22-6.6 3.64-9.86 5.82-3.46 2.22-7.18 4.2-11.03 5.7-1.04.38-2.08.75-3.1.8-1.84.06-3.45-.98-5-1.82-7.1-3.86-15.17-5.6-23.25-5.3-4.1.12-8.05.82-11.97 2.03-1.9.6-3.8 1.28-5.64 2.16-.1.1-2.4.9-2.7 1.1z"
                style={{ display: isOpenWing ? "block" : "none" }}
              />
              {/* Closed wing path */}
              <path
                id="close-wing"
                fill="green"
                d="M3.46 20.5c-.34 1.15 1.26.67 2.92.13 3.46-1.1 5.86-7.16 8.38-9.47 6.18-5.64 16.5 3.07 23.45 7.7.8.52 1.7 1.12 2.2 1.92 1.4 2.22.3 5.6 2.4 7.24 1.7 1.23 4 .32 5.7-.64 4.3-2.42 8.1-5.47 11.5-8.9 3.4-3.45 10.4-5.66 14.9-7.04 3.3-1 6.3-2.77 8.9-.5 4.78 2.32 12.4 5.68 17.6 11.3 2.85 2.95 6.33 6.18 10.33 5.58 0-1.2-.84-2.25-1.5-3.2-8.5-11.1-4.66-6-14.7-15.82-3.4-3.28-9.44-8.55-14-7.36-3.7.86-15 4.43-18.26 6.6-4.85 2.3-9.07 6.18-14.12 6.5-1.8.07-3.42-.97-5-1.8-7.2-3.88-21-15.04-27.5-10.17C13.32 5 11 9.77 8.45 13.02c-1.22 1.58-2.37 3.22-3.4 5-.03.22-1.45 2.16-1.57 2.46z"
                style={{ display: !isOpenWing ? "block" : "none" }}
              />
            </g>
          </svg>
        </Bird>
        {/* </BirdWrapper> */}
        <Content>
          <Section id="intro">
            <HeroName onClick={handleOnClick}>
              S<ArrivalPos ref={nameRef}>D</ArrivalPos>
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
  width: fit-content;
  height: fit-content;
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
