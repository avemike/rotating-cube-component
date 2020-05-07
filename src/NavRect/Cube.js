import styled from "styled-components";
const Cube = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1.2s ease-in-out;

  ${({ rotation }) =>
    rotation &&
    `
    transform: rotateY(${rotation}deg)
    translate3d(${rotation < 0 ? "-" : ""}${
      (window.innerHeight * 35) / 100
    }px, 0, ${(window.innerHeight * 35) / 100}px);
  `}
`;

export default Cube;
