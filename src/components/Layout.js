import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/style.css'

export default ({ children }) => (
  <div className="container headings--one-size">
    <Header />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
)