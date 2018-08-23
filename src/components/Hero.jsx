import React from 'react';
import styled from 'styled-components';

const HeroText = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
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
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

export default () => (
  <div>
    <HeroText>
      Hello!
    </HeroText>
    <HeroText>
      I&apos;m Ratnasambhav Priyadarshi.
    </HeroText>
    <SubHeroText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi proin sed. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Feugiat in ante metus dictum at. Egestas sed sed risus pretium quam vulputate.
    </SubHeroText>
  </div>
);
