import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Ratnasambhav Priyadarshi - Official Website" />
      <title>Home | Ratnasambhav Priyadarshi</title>
      <link rel="canonical" href="https://github.ratnasambhav.io" />
    </Helmet>
    <Hero />
    <Projects />
  </Layout>
);
