import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../components/Container'
import Hero from '../components/Hero'

export default () => (
  <Container>
    <Helmet>
      <title>Ratnasambhav Priyadarshi</title>
      <link rel="canonical" href="https://ratnasambhav.github.io" />
    </Helmet>
    <Hero />
  </Container>
)
