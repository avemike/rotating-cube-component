import styled from "styled-components";

// Side texts in NavRect - left and right side *articles and contact us*
const SideText = styled.div`
  position: absolute;

  ${(props) => props.positioned} : 4vw;

  writing-mode: ${({ positioned }) =>
    (positioned === "left" && "vertical-rl") ||
    (positioned === "right" && "vertical-rl")};

  transform: ${({ positioned }) => positioned === "left" && "rotate(180deg)"};
`;

export default SideText;
