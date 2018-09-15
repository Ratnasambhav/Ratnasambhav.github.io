import React from 'react';
import styled, { keyframes } from 'styled-components';

const heroEnter = keyframes`
  0% {
    opacity: 0.01;
    transform: translateY(-70%);
  }
  60% {
    opacity: 0.8;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const HeroText = styled.h1`
  margin: 0;
  opacity: 0;
  animation: ${heroEnter} 500ms 700ms ease-out forwards;
  @media (max-width: 450px) {
    font-size: 35px;
  }
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const SubHeroText = styled.p`
  font-weight: 300;
  max-width: 500px;
  margin-top: 20px;
  opacity: 0;
  transform: translateY(-100%);
  animation: ${heroEnter} 500ms 900ms ease-out forwards;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

export default () => (
  <div>
    <HeroText>
      Hi, I&apos;m Ratnasambhav Priyadarshi.
    </HeroText>
    <SubHeroText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi proin sed. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Feugiat in ante metus dictum at. Egestas sed sed risus pretium quam vulputate.
    </SubHeroText>
  </div>
);
