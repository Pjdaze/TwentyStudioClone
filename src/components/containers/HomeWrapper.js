import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: 100%;

  .logo {
    width: 75%;
    margin: 0 auto;
    max-width: 600px;
    height: auto;
    display: none;
    @media only screen and (max-width: 580px) {
      display: block;
    }
    img {
      width: 100%;
    }
  }

  .editor-logo,
  .txt {
    font-size: calc(1.8em + 0.6vw);
    color: #3a3939;
    font-family: oswald;

    text-shadow: 3px 2px 2px #222;
  }
  .studio {
    color: #ff3300;
  }
`;

export default HomeWrapper;
