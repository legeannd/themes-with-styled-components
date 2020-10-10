import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    width: 100%;
    background: ${props => props.theme.colors.primary};
  }

  h1 {
    width: 100%;
    margin: 50px 0;
    text-align: center;
    color: ${props => props.theme.colors.black};
  }
`;