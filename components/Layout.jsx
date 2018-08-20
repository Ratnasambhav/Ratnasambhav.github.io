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
    background-color: #E8EBEC;
    font-family: 'Roboto', sans-serif;
    color: #222;
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
`;

const Main = styled.div`
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const Layout = ({ children, title = '\\RP' }) => (
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
