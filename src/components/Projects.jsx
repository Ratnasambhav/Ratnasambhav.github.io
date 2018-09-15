import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectTitleEnter = keyframes`
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

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const Title = styled.h1`
  opacity: 0;
  animation: ${ProjectTitleEnter} 500ms 1500ms ease-out forwards;
`;

export default () => (
  <ProjectSection>
    <Title>Projects</Title>
  </ProjectSection>
);
