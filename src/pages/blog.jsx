import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export default () => (
  <div className="blog">
    <Helmet>
      <title>Blog | Ratnasambhav Priyadarshi</title>
      <link rel="canonical" href="https://ratnasambhav.github.io/blog" />
      <meta property="og:title" content="Ratnasambhav Priyadarshi" />
      <meta property="og:description" content="Blog written by Ratnasambhav Priyadarshi" />
      <meta property="og:image" content="https://ratnasambhav.github.io/icons/icon-512-512.png" />
      <meta property="og:url" content="https://ratnasambhav.github.io/blog" />
      <meta property="og:site_name" content="ratnasambhav.github.io" />
    </Helmet>
    <p className="blog--header">Coming soon...</p>
    <Link to="/" className="blog--link">Home</Link>
  </div>
);
