import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const logoEnter = keyframes`
  0% {
    height: 2px;
    width: 0px;
  }
  50% {
    height: 2px;
    width: 130.5px;
  }
  100% {
    height: 52px;
    width: 130.5px;
  }
`;

const linkEnter = keyframes`
  0% {
    height: 2px;
    width: 0px;
  }
  50% {
    height: 2px;
    width: 44.52px;
  }
  100% {
    height: 26px;
    width: 44.52px;
  }
`;

const Nav = styled.nav`
  max-width: 960px;
  min-height: 52px;
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
  padding: 0 4px;
  font-weight: 500;
  transition: box-shadow 150ms, color 150ms;
  height: 2px;
  width: 0px;
  overflow: hidden;
  box-shadow: 0 2px 0 0 #222;
  &:hover {
    box-shadow: 0 6px 0 0 #000;
    color: #000;
  }
  animation: ${props => props.animation} 700ms ease-out forwards;
`;

export default () => (
  <Nav>
    <NavLink
      to="/"
      animation={logoEnter}
    >
      Ratnasambhav
      <br />
      Priyadarshi
    </NavLink>
    <NavLink
      to="/blog"
      animation={linkEnter}
    >
      Blog
    </NavLink>
  </Nav>
);
