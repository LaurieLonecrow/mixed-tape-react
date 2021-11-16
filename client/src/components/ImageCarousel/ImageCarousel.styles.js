//Grid
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 20px;
  flex: 4;
  display: flex;
  flex-direction: column;
  background-color: var(--medGrey);
  overflow-y: scroll;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

export const Card = styled.div`
 display: inline-block;
 background-color: var(--darkGrey);
 border-radius: 8px;
 margin: 10px;
 padding: 16px;
 height: 250px;

 .item_name {
  text-decoration: none;
  color: var(--white);
}

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