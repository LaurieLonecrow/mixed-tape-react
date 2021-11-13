//Grid
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;

  .playlist_name {
    text-decoration: none;
  }
`;

export const Image = styled.img`
width: 100%;
  height: 100%;
  max-width: 250px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;

  :hover {
    opacity: 0.8;
  }

`;