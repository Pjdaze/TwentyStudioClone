import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const Header = styled.div`
  width: 100%;
  color: #000;
`;

export default props => (
  <Header className="header" id="header">
    <Nav />
  </Header>
);
