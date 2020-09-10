import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: '#312E38';
    color: '#F4EDE8';
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, button {
    font-family: 'Poppins';
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button: {
    cursor: pointer;
  }
`;
