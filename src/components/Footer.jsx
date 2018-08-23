import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Footer = styled.div`
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #333;
`;

export default () => (
  <Footer>
    Made with&nbsp;
    <Link href="https://gatsbyjs.org/">
      <FooterLink href="https://gatsbyjs.org/">Gatsby</FooterLink>
    </Link>
    ,&nbsp;
    <Link href="https://www.styled-components.com/">
      <FooterLink href="https://www.styled-components.com/">styled-components</FooterLink>
    </Link>
    ,&nbsp;
    <Link href="https://reactjs.org">
      <FooterLink href="https://reactjs.org">React</FooterLink>
    </Link>
    &nbsp;& ❤️.
  </Footer>
);
