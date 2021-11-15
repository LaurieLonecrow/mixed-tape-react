import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  border-radius: 5px;
  
`;


export const Content = styled.div`
  color: var(--white);
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  width: 50%vw;

  .album_img {
    width: 40px;
    margin: 10px;

  }

  .left_box {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    overflow: scroll;
    white-space: nowrap;
    width: 200px;
  }

  .track_name {
    margin: 0
    flex: 1;
  }

  .artist_name {
    display: flex;
    gap: 8px;
    font-size: .8rem;
    line-height: 1.8;
    color: var(--lightGrey);
    
  }

  .album_name {
    flex: 3;
    padding-left: 40px;

  }

`;
