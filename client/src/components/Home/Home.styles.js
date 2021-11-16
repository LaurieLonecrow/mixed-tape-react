import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .hero_container {
    width: 70%;
  }
`;

export const ImageWrapper = styled.div`
display: flex;
width: 200px;
height: 200px;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
object-fit: cover;

`;
