import React from "react";
import styled from "styled-components";
import videoSrc from "./fire.mp4";

const VideoWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;

  display: flex;
  justify-content: center;
`;
const Video = styled.video`
  height: 85vh;
  margin-left: 32px;
`;
const Background = () => (
  <VideoWrapper>
    <Video loop autoPlay muted>
      <source src={videoSrc} type="video/mp4" />
      You does not support video tag
    </Video>
  </VideoWrapper>
);

export default Background;
