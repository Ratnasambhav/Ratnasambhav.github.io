import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import SEOTags from '../components/SEOTags';

export default () => (
  <Container>
    <SEOTags
      URL="https://ratnasambhav.github.io/blog"
      title="Ratnasambhav Priyadarshi"
    />
    <Hero />
  </Container>
);
