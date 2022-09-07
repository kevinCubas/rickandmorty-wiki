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
    background: linear-gradient(to bottom, #010e00, #152c15, #234b22, #336d2e, #459039) fixed;
    font-family: sans-serif;
  }
`