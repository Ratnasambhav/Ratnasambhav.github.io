import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const FooterLink = styled.a`
  color: #222;
`;

export default () => (
  <Footer>
    Made with&nbsp;
    <Link to="https://nextjs.org">
      <FooterLink href="https://nextjs.org">Next.js</FooterLink>
    </Link>
    ,&nbsp;
    <Link to="https://www.styled-components.com/">
      <FooterLink href="https://www.styled-components.com/">styled-components</FooterLink>
    </Link>
    &nbsp;&&nbsp;
    <Link to="https://reactjs.org">
      <FooterLink href="https://reactjs.org">React</FooterLink>
    </Link>
  </Footer>
);
