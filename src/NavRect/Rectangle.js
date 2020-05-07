import styled from "styled-components";

// Greater rectangle - cube plane
const Rectangle = styled.div`
  width: 70vh;
  height: 70vh;

  position: absolute;

  background-color: #fff;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  ${({ front }) =>
    front &&
    `
      z-index: 2;
      transform: translate3d(0, 0, 0);`}

  ${({ left }) =>
    left &&
    `
      transform: rotateY(-90deg)
      translate3d(-${(window.innerHeight * 35) / 100}px, 0, ${
      (window.innerHeight * 35) / 100
    }px);`}
    ${({ right }) =>
      right &&
      `
      transform: rotateY(90deg)
      translate3d(${(window.innerHeight * 35) / 100}px, 0, ${
        (window.innerHeight * 35) / 100
      }px);`}
  h2 {
    cursor: pointer;
    user-select: none;
    z-index: 1000;
  }
`;

export default Rectangle;
