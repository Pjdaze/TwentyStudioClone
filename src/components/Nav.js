import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../images/LogoTwenty.jpg';

const Nav1 = styled.nav`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  padding: 35px;
  height: 0;
  transition: all 0.2s ease-in-out;

  .logox {
    h1 {
      font-size: 1.2em;
      font-family: 'Titan One', cursive;
      &.active {
        opacity: 0.5;
        transition: all 2s ease-in-out;
      }
    }

    .brakets {
      font-family: 'Titillium Web', sans-serif;
      margin: 0 5px;
    }

    .ux {
      font-family: 'Fascinate Inline', cursive;

      letter-spacing: -2px;
    }
    .jd {
    }
  }
  &.open {
    height: 100vh;
    padding-top: 25%;
    background-color: rgba(000, 000, 000, 0.9);

    li:nth-child(2) {
      display: block;
    }

    li:nth-child(3) {
      display: block;
    }
  }

  ul {
    display: flex;
    width: 100%;
    list-style: none;
    font-size: 0.9em;

    img {
      height: 125px;
      width: 125px;
      align-self: center;
    }
  }

  li {
    display: block;
    font-family: 'Titillium Web', sans-serif;

    font-weight: 300;
    color: #222;

    a {
      color: #222;
    }
    &.activex {
      color: #fcfaea;
      font-weight: bold;
    }
    &:hover {
      font-weight: bold;
      zoom: 1.01;
      transition: all 180ms ease-in-out;
    }

    &:first-child {
      margin-right: auto;
      margin-top: -20px;
      zoom: 1;
      &:hover {
        text-shadow: 0 0 50px #f2f2f2;
      }
    }

    &:nth-child(3) {
      margin-left: 20px;
    }

    &:nth-child(5) {
      display: none;
    }
  }
  // media queries//

  @media only screen and (max-width: 550px) {
    margin: 0;
    padding: 0;
    overflow: hidden;

    ul {
      display: flex;

      flex-direction: column;
      height: 100vh;
    }
    li {
      font-size: 1.5em;
      margin-bottom: 15px;
      width: 100%;
      text-align: center;
      margin-top: 28px;
      padding: 15px;

      a {
        color: #222;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
      }

      &:nth-child(3) {
        margin-left: 0;
        zoom: 1;
        &:hover {
          text-shadow: 0 0 50px #f2f2f2;
        }
      }
      &:nth-child(2) {
        zoom: 1;
        &:hover {
          text-shadow: 0 0 50px #f2f2f2;
        }
      }
      &:last-child {
        zoom: 1;
      }

      &:nth-child(5) {
        display: block;
        font-size: 12px;
        zoom: 1;
      }
    }
  }
  //end of query

  .social-nav {
    height: 100px;
    width: 200px;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background: transparent;
    }

    .fa {
      transition: all 0.1s ease-in-out;
      color: #8c8c8c;
      &:hover {
        color: #f1f1f1;
      }
    }
    @media only screen and (min-width: 567px) {
      display: none;
    }
  }
`;

export default class Nav extends React.Component {
  render() {
    const { isOpen } = this.props;
    console.log('Nav is open', isOpen);
    const NavClass = isOpen ? 'open' : 'nav1';
    return (
      <Nav1 className={NavClass}>
        <ul>
          <li>
            <div className="logox">
              <NavLink activeClassName="activex" to="/Home">
                <img src={Logo} />
              </NavLink>
            </div>
          </li>
          <li>
            {' '}
            <NavLink activeClassName="activex" to="/Contact">
              <p>Contact</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activex" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onUpdate={() => window.scrollTo(0, 0)}
              activeClassName="activex"
              to="/Projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink activeClassName="activex" to="/Contact">
              <p>Talk to me -></p>
            </NavLink>
          </li>
        </ul>
      </Nav1>
    );
  }
}
