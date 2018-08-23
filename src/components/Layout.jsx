import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const Main = styled.div`
  max-width: 960px;
  padding: 0;
  margin: 100px auto;
  @media (max-width: 959px) {
    width: 95%;
  }
`;

const Layout = ({ children }) => (
  <>
    <Nav />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
