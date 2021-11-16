import styled, { keyframes } from "styled-components"

const move = keyframes`
from { height: 10px; }
to { height: 100%; }
`;

const fadeIn = keyframes `
0% { opacity: .2; }
50% { opacity: 1; }
100% { opacity: .2; }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 200px;
  height: 100px;
  left: 0;
  top: 0;
  overflow: hidden;
  margin: 0 auto;
  animation: ${fadeIn} 2s forwards infinite;
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
