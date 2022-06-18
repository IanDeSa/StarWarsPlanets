import { createGlobalStyle } from 'styled-components';
import img from '../bg.jpg';

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}


body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

body {
  display: flex;
  justify-content: center;
  background-image: url(${img});
  z-index: 1000;
}

main {
  margin-top: 50px;
  padding: 20px 5px;
  background-color: #1c1c1c;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles;
