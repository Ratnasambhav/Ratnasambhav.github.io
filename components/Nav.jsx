import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  margin: 0;
`;

const Logo = styled.a`
  font-size: 4em;
  font-weight: 700;
  font-family: Rokkitt;
  color: #000;
  text-decoration: none;
`;

const NavLink = styled.a`
  font-family: Rokkitt;
  color: #000;
  text-decoration: none;
`;

export default () => (
  <Nav>
    <Link href="/">
      <Logo href="/">//rp</Logo>
    </Link>
    <Link href="/blog">
      <NavLink href="/blog">Blog</NavLink>
    </Link>
  </Nav>
);
