import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: 100%;

  .logo {
    width: 75%;
    margin: 0 auto;
    max-width: 600px;
    height: auto;
  }

  .editor-logo,
  .txt {
    color: #3a3939;
    font-family: oswald;
    font-size: 2.3em;
    text-shadow: 3px 2px 2px #222;
  }
  .studio {
    color: #ff3300;
  }
`;

export default HomeWrapper;
