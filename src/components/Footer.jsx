import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

const footerEnter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Footer = styled.div`
  text-align: center;
  opacity: 0;
  animation: ${footerEnter} 500ms 1500ms ease-out forwards;
`;

const FooterLink = styled(Link)`
  color: #333;
`;

export default () => (
  <Footer>
    Made with&nbsp;
    <FooterLink to="https://gatsbyjs.org/">Gatsby</FooterLink>
    ,&nbsp;
    <FooterLink to="https://www.styled-components.com/">styled-components</FooterLink>
    ,&nbsp;
    <FooterLink to="https://reactjs.org">React</FooterLink>
    &nbsp;& ❤️.
  </Footer>
);
