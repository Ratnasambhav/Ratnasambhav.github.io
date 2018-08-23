import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = styled.nav`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px auto;
  @media (max-width: 960px) {
    width: 98%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 0 0 #222;
  padding: 0 4px;
  font-weight: 500;
  transition: box-shadow 150ms, color 150ms;
  &:hover {
    box-shadow: 0 6px 0 0 #000;
    color: #000;
  }
`;

export default () => (
  <Nav>
    <NavLink to="/">
      Ratnasambhav
      <br />
      Priyadarshi
    </NavLink>
    <NavLink to="/blog">Blog</NavLink>
  </Nav>
);
