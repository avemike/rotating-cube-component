import styled from "styled-components";

// Smaller rectangles (represented by border) in NavRect
const SmallerRectangle = styled.div`
  width: calc(100% - 8vw);
  height: calc(100% - 8vw);

  border: 1px solid #707070;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export default SmallerRectangle;
