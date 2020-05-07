import React from "react";
import OuterContainer from "./OuterContainer";
import NavRect from "./NavRect/NavRect";
import styled from "styled-components";

const HomePageDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomePage = () => (
  <HomePageDiv>
    <OuterContainer>
      <NavRect />
    </OuterContainer>
  </HomePageDiv>
);

export default HomePage;
