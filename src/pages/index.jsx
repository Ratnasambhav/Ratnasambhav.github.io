import React from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';
import '../styles/normalize.css';

export default () => (
  <Container>
    <Navbar />
    <Hero />
    <Footer />
  </Container>
);
