import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Hero from '../components/Hero';

export default () => (
  <Container>
    <Helmet>
      <title>Ratnasambhav Priyadarshi</title>
      <link rel="canonical" href="https://ratnasambhav.github.io" />
      <meta property="og:title" content="Ratnasambhav Priyadarshi" />
      <meta property="og:description" content="Blog written by Ratnasambhav Priyadarshi" />
      <meta property="og:image" content="https://ratnasambhav.github.io/icons/icon-512-512.png" />
      <meta property="og:url" content="https://ratnasambhav.github.io" />
      <meta property="og:site_name" content="ratnasambhav.github.io" />
    </Helmet>
    <Hero />
  </Container>
);
