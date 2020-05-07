import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import styled, { createGlobalStyle } from "styled-components";
import Background from "./Background";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #0e0f10;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <AppContainer>
      <Background />
      <HomePage />
    </AppContainer>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
