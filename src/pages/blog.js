import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export default () => (
  <div className="blog">
    <Helmet>
      <title>Blog | Ratnasambhav Priyadarshi</title>
      <link rel="canonical" href="https://ratnasambhav.github.io/blog" />
    </Helmet>
    <p className="blog--header">Coming soon...</p>
    <Link to="/" className="blog--link">Home</Link>
  </div>
)