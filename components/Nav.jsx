import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px auto;
`;

const Logo = styled.a`
  color: #222;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  padding: 0 2px;
  transition: box-shadow 150ms ease-in;
  &:hover {
    box-shadow: 0 4px 0 0px #222;
  }
`;

const NavLink = styled.a`
  color: #222;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  transition: box-shadow 150ms ease-in;
  &:hover {
    box-shadow: 0 2px 0 0 #222;
  }
`;

export default () => (
  <Nav>
    <Link href="/">
      <Logo href="/">
        Ratnasambhav<br />Priyadarshi
      </Logo>
    </Link>
    <Link prefetch href="/blog">
      <NavLink href="/blog">Blog</NavLink>
    </Link>
  </Nav>
);
