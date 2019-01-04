import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export default () => (
  <div className="blog">
    <Helmet>
      <title>Blog | Ratnasambhav Priyadarshi</title>
      <link rel="canonical" href="https://ratnasambhav.github.io/blog" />
      <html lang="en" />
      <meta name="Description" content="Blog of Ratnasambhav Priyadarshi" />
      <meta property="og:title" content="Ratnasambhav Priyadarshi" />
      <meta property="og:description" content="Blog of Ratnasambhav Priyadarshi" />
      <meta property="og:image" content="https://ratnasambhav.github.io/icons/icon-512x512.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:url" content="https://ratnasambhav.github.io/blog" />
      <meta property="og:site_name" content="ratnasambhav.github.io" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Ratnasambhav Priyadarshi" />
      <meta name="twitter:description" content="Blog of Ratnasambhav Priyadarshi" />
      <meta name="twitter:image" content="https://ratnasambhav.github.io/icons/icon-512x512.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <p className="blog--header">Coming soon...</p>
    <Link to="/" className="blog--link">Home</Link>
  </div>
);
