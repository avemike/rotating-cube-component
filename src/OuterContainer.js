import React from "react";
import styled from "styled-components";

const OuterContainerDiv = styled.div`
  width: calc(100% - 4.15vw);
  height: calc(100% - 4.15vw);

  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";

    position: absolute;
    left: 2.075vw;
    top: 2.075vw;

    width: calc(100% - 4.15vw);
    height: calc(100% - 4.15vw);

    border: 1px solid #dff2f2;
    pointer-events: none;
  }
`;
const OuterContainer = ({ children }) => (
  <OuterContainerDiv>{children}</OuterContainerDiv>
);

export default OuterContainer;
