import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import Route from '../Routes';

const Hamburger = styled.div`
  .line-wrap {
    width: 30px;
    height: 45px;
    position: fixed;
    top: 50px;
    right: 35px;
    z-index: 10;
  }

  width: 100%;

  position: fixed;
  height: 0;
  top: 0;
  right: 0;
  z-index: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  .line {
    position: absolute;
    display: block;

    height: 3px;
    width: 100%;
    background: #3a3939;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    box-shadow: -1px 1px 2px #222;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    z-index: 50;
    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }
    &:nth-child(4) {
      top: 18px;
    }
  }

  &.menuActive .line:nth-child(1) {
    top: 9px;
    width: 0%;
    left: 50%;
  }

  &.menuActive .line:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.menuActive .line:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.menuActive .line:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  @media only screen and (min-width: 550px) {
    display: none;
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuActive: false
    };

    console.log(this.state);
  }

  toggleMenu() {
    this.setState({ menuActive: !this.state.menuActive });

    console.log(this.state);
  }

  render() {
    const { menuActive } = this.state;

    return (
      <Hamburger className={(menuActive && 'menuActive') || 'open'} onClick={this.toggleMenu}>
        <div className="line-wrap">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>

        <Nav isOpen={menuActive} />
      </Hamburger>
    );
  }
}

export default () => <Menu />;
