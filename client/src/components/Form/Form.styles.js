import styled from "styled-components";
import {BsFillPencilFill, BsXCircle} from "react-icons/bs";

export const Wrapper = styled.div`
  
  
`;

export const Content = styled.div`
  
  
`;

export const TextIcon = styled(BsFillPencilFill)`
position: absolute;
top: 25%;
right: 5%;
color: var(--white);
width: 20px;
height: 20px;
cursor: pointer;
`;

export const CloseIcon = styled(BsXCircle)`
position: absolute;
top: 5%;
right: 1%;
color: var(--darkGrey);
width: 20px;
height: 20px;
cursor: pointer;
`;