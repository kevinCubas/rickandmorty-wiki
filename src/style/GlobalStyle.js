import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right top, #002505, #003d0d, #00560f, #00710c, #138c00) fixed;
  }
`