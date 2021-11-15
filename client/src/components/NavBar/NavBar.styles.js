import styled from "styled-components";
import {BsGear} from "react-icons/bs";


export const Wrapper = styled.div`
display: flex;
max-width: 1280px;
margin: 0 ;
background: var(--darkGrey);
color: #fff;
`;

export const Content = styled.div`

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-decoration: none;
  list-style-type: none;
`;

export const Dropdown = styled(BsGear)`
  
`;
