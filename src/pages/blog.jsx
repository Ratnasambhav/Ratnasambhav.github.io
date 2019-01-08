import React from 'react';
import { Link } from 'gatsby';
import SEOTags from '../components/SEOTags';

export default () => (
  <div className="blog">
    <SEOTags
      title="Blog | Ratnasambhav Priyadarshi"
      URL="https://ratnasambhav.github.io/blog"
    />
    <p className="blog--header">Coming soon...</p>
    <Link to="/" className="blog--link">Home</Link>
  </div>
);
