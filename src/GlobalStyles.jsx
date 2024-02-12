import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: hsl(200, 100%, 90%);
    max-width: 400px;
    padding: 1rem;
    margin: 0 auto;
  }
`;

export default GlobalStyles;