import React from 'react'
import { Title, Link, Meta } from 'react-head'

const Head = ({
  title,
  URL,
  description,
  imageURL,
  imageWidth,
  imageHeight,
}) => (
  <>
    <html lang="en" />
    <Title>{title || 'Ratnasambhav Priyadarshi'}</Title>
    <Link rel="canonical" content={URL} />
    <Meta name="Description" content={description || 'The blog of Ratnasambhav Priyadarshi'} />
    <Meta property="og:title" content={title || 'Ratnasambhav Priyadarshi'} />
    <Meta property="og:description" content={description || 'The blog of Ratnasambhav Priyadarshi'} />
    <Meta property="og:image" content={imageURL || 'https://ratnasambhav.github.io/icons/icon-512x512.png'} />
    <Meta property="og:image:width" content={imageWidth || '512'} />
    <Meta property="og:image:height" content={imageHeight || '512'} />
    <Meta property="og:url" content={URL} />
    <Meta property="og:site_name" content="ratnasambhav.github.io" />
    <Meta property="og:type" content="website" />
    <Meta name="twitter:title" content={title || 'Ratnasambhav Priyadarshi'} />
    <Meta name="twitter:description" content={description || 'The blog of Ratnasambhav Priyadarshi'} />
    <Meta name="twitter:image" content={imageURL || 'https://ratnasambhav.github.io/icons/icon-512x512.png'} />
    <Meta name="twitter:card" content="summary_large_image" />
  </>
);

export default Head;
