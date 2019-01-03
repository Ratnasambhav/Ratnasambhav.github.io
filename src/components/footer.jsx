import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default () => (
  <div className="footer">
    <OutboundLink href="https://github.com/Ratnasambhav" className="footer--link">
      Github
    </OutboundLink>
    <OutboundLink href="https://linkedin.com/in/Ratnasambhav" className="footer--link">
      LinkedIn
    </OutboundLink>
    <OutboundLink href="https://twitter.com/ratnasambhav732" className="footer--link">
      Twitter
    </OutboundLink>
    <OutboundLink href="mailto:ratnasambhav@gmail.com" className="footer--link">
      Mail
    </OutboundLink>
  </div>
);
