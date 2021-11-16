import styled, {keyframes} from "styled-components";

const fadeIn = keyframes `
0% { opacity: 0; }
100% { opacity: 1; }
`

export const PageWrapper = styled.div`
 background-color: var(--darkGrey);
 background-image: url("https://res.cloudinary.com/lonecrow/image/upload/v1636917959/stage_dyjbzz.jpg");
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 width: 100vw;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;  

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Content = styled.div`
    position: absolute;
    top: 60%;
    left: auto;
    padding: 20px 40px;
    border-radius: 99px;
    background-color: #1db954;
    animation: ${fadeIn} 3s linear forwards;;
    
    &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);

  }

  a {
    color: white;
    font-weight: 300;
    font-size: 2rem;
    text-decoration: none;
  }
    `;
  