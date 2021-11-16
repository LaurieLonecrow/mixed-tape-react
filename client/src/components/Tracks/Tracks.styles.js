import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  .main-container {
    flex: 4;
      display: flex;
      flex-direction: column;
  }
`;

export const Content = styled.ul`
list-style: none;
background-color: black;
margin: 0;
height: 100%;
overflow-y: scroll;
flex: 4;

.list_item {
    position: relative;
    display: flex;
    background-color: var(--darkGrey);
    margin-bottom: 10px;


  :hover {
    background-color: var(--medGrey);
  }
}
`;

