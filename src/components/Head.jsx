import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({
  title,
  URL,
  description,
  imageURL,
  imageWidth,
  imageHeight,
}) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <link rel="canonical" href={URL} />
    <meta name="Description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageURL} />
    <meta property="og:image:width" content={imageWidth} />
    <meta property="og:image:height" content={imageHeight} />
    <meta property="og:url" content={URL} />
    <meta property="og:site_name" content="ratnasambhav.github.io" />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageURL} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageURL: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
};

Head.defaultProps = {
  description: 'The blog of Ratnasambhav Priyadarshi',
  imageURL: 'https://ratnasambhav.github.io/icons/icon-512x512.png',
  imageWidth: '512',
  imageHeight: '512',
};

export default Head;
