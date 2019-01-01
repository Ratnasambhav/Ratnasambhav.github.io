import React from 'react';
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../sass/style.css"

export default ({ children }) => (
  <div className="container">
    <Navbar />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {children}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer />
  </div>
);
