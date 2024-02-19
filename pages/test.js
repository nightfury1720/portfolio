import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
const MyComponent = () => {
  const textRefs = useRef([]);
  const testref = useRef(null);
  useGSAP(() => {
    const textElements = textRefs.current;
    if (!textElements.length) return;

    const timeline = gsap.timeline();

    textElements.forEach((textElement, index) => {
      timeline.to(textElement, {
        rotationX: 360,
        duration: 0.4,
        ease: "none",
        delay: index * 0.001,
        color: "#00ff08",
        onComplete: () => {
          // Change color back to original after animation completes
          gsap.to(textElement, { color: 'white' });
        },
      });
    });
  }, []);

  return (
    <div>
      <Heading>
        <div ref={(el) => (textRefs.current[0] = el)}>s</div>
        <div ref={(el) => (textRefs.current[1] = el)}>i</div>
        <div ref={(el) => (textRefs.current[2] = el)}>l</div>
        <div ref={(el) => (textRefs.current[3] = el)}>k</div>
        <div ref={(el) => (textRefs.current[4] = el)}>y</div>
        <div ref={(el) => (textRefs.current[5] = el)}>-</div>
        <div ref={(el) => (textRefs.current[6] = el)}>s</div>
        <div ref={(el) => (textRefs.current[7] = el)}>m</div>
        <div ref={(el) => (textRefs.current[8] = el)}>o</div>
        <div ref={(el) => (textRefs.current[9] = el)}>o</div>
        <div ref={(el) => (textRefs.current[10] = el)}>t</div>
        <div ref={(el) => (textRefs.current[11] = el)}>h</div>
      </Heading>
      {/* Add more text elements as needed */}
    </div>
  );
};

const Heading = styled.div`
  display: flex;
  color: white;
`;
export default MyComponent;
