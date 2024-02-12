import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: 20px;
  height: 60px;
  
  path {
    fill: none;
    stroke: #39f039;
    stroke-width: 20px;
  }
  
  #wheel {
    animation: scroll ease 1.5s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(100px);
    }
  }
`;

const ScrollDownSVG = () => {
  return (
    <StyledSVG viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path id="wheel" d="M123.359,79.775l0,72.843"/>
      <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"/>
    </StyledSVG>
  );
}

export default ScrollDownSVG;
