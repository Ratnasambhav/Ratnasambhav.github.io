import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    <Main>
      {children}
    </Main>
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
