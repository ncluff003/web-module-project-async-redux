import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*:after {
  margin: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  box-sizing: inherit;
  font: inherit;
  vertical-align: baseline;
}

html {
  font-size: 62.5%;
  font-family: Purely Me, Century Gothic, Verdana, Sans-Serif;
  font-variant-ligatures: none;
  scroll-behavior: smooth;
}

body {
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: #f0f0f0;
  overflow-x: hidden;
}

body > #root {
  height: 100vh;
  width: 100vw;
}
  `;

export default GlobalStyle;
