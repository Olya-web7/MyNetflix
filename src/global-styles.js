import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #141414;
    color: #6bbbd8;
    font-size: 16px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    width: 210px;
    height: 295px;
    object-fit: cover;
  }
  
  .loader img {
    display: block;
    margin: 2rem auto;
  }
`;
