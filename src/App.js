import React from 'react';
import styled from 'styled-components';
import './App.css';

import Routes from './Routes';
import Hamburger from './components/Hamburger';

const MainLayout = styled.div`
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Hamburger />
        <Routes />
      </MainLayout>
    );
  }
}

export default App;
