import React from "react";
import styled from "styled-components";

const Rectangle = styled.div`
  width: 70vh;
  height: 70vh;

  position: relative;

  background-color: #fff;
  mix-blend-mode: exclusion;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    cursor: pointer;
    user-select: none;
    z-index: 1000;
  }
`;

const SmallerRectangle = styled.div`
  width: calc(100% - 8vw);
  height: calc(100% - 8vw);

  border: 1px solid #707070;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Side = styled.div`
  position: absolute;

  ${(props) => props.positioned} : 4vw;

  writing-mode: ${({ positioned }) =>
    (positioned === "left" && "vertical-rl") ||
    (positioned === "right" && "vertical-rl")};

  transform: ${({ positioned }) => positioned === "left" && "rotate(180deg)"};
`;

const NavRect = () => (
  <Rectangle>
    <Side positioned="left">
      <h2>Articles</h2>
    </Side>
    <SmallerRectangle>
      <SmallerRectangle>
        <h2>Home</h2>
      </SmallerRectangle>
    </SmallerRectangle>
    <Side positioned="right">
      <h2>Contact us</h2>
    </Side>
  </Rectangle>
);

export default NavRect;
