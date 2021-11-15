import styled, { keyframes } from "styled-components"

const move = keyframes`
from { height: 10px; }
to { height: 100%; }
`;

const fadeIn = keyframes `
0% { opacity: 0; }
50% { opacity: 1; }
100% { opacity: 0; }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: transparent;
  position: absolute;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 200px;
  height: 100px;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
  margin: 0 auto;
  animation: ${fadeIn} 4s linear forwards;
`;

export const Bar = styled.div`
background-color: #1db954;
width: 20px;
height: 350px;
margin: 0 2px;
animation-name: ${move};
animation-duration: 400ms;
animation-play-state: running;
animation-direction: alternate;
animation-iteration-count: infinite;
animation-delay: ${props => props.delay || '0ms'}
`;
