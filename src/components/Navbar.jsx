import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div className="navbar">
    <Link to="/" className="navbar--logo">RP</Link>
    <Link to="/blog" className="navbar--link">Blog</Link>
  </div>
);
