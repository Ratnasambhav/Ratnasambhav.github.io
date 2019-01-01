import React, { Component } from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Hero />
        <Footer />
      </Container>
    );
  }
}

export default App;
