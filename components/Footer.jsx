import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const FooterLink = styled.a`
  color: #000;
`;

export default () => (
  <Footer>
    Made with&nbsp;
    <Link href="https://nextjs.org">
      <FooterLink href="https://nextjs.org">Next.js</FooterLink>
    </Link>
    ,&nbsp;
    <Link href="https://www.styled-components.com/">
      <FooterLink href="https://www.styled-components.com/">styled-components</FooterLink>
    </Link>
    ,&nbsp;
    <Link href="https://reactjs.org">
      <FooterLink href="https://reactjs.org">React</FooterLink>
    </Link>
    &nbsp;& ♥.
  </Footer>
);
