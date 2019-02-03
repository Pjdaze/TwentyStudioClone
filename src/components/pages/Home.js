import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../containers/HomeWrapper';
import Logo from '../../images/TwentyLogo.png';
import Header from '../Header';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <div className="flex-center">
          <Header />
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="txt">
            <span className="editor-logo">
              TWENTY <span className="studio">STUDIO</span>
            </span>
          </div>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
