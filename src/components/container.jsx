import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../sass/style.css';

export default ({ children }) => (
  <main className="container">
    <Navbar />
    {children}
    <Footer />
  </main>
);
