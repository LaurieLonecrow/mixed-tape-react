//Grid
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 20px;
  flex: 4;
  display: flex;
  flex-direction: column;
  background-color: var(--medGrey);
  height: 100%;
  overflow-y: scroll;


    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  list-style: none;
  margin: 0;
  padding: 20px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  .playlist_name {
    text-decoration: none;
    color: var(--white);
  }
`;

export const Card = styled.li`
 background-color: var(--darkGrey);
 border-radius: 8px;
 padding: 16px;

 :hover {
  opacity: 0.8;
}

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  object-fit: cover;

`;