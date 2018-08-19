import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled, { injectGlobal } from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';

injectGlobal`
  body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css?family=Rokkitt:700');
`;

const Main = styled.div`
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const Layout = ({ children, title = '\\RP' }) => (
  <Fragment>
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
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
