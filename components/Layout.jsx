import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled, { injectGlobal } from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #E8EBEC;
    font-family: 'Roboto', sans-serif;
    color: #222;
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
`;

const Main = styled.div`
  max-width: 960px;
  padding: 0;
  margin: 100px auto;

  @media (max-width: 959px) {
    width: 95%;
  }
`;

const Layout = ({ children, title = 'Ratnasambhav' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
