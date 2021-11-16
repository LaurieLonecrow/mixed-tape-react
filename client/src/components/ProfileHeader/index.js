import React from "react";

import { Wrapper, Content, ImageWrapper, Image } from "./ProfileHeader.styles";


const ProfileHeader = ({source}) => {

  return (
  <Wrapper>
      <Content>
          
      {source ?
      <>
      <ImageWrapper>
         <Image src={source.images[0].url} alt="cover-art"/> 
      </ImageWrapper>
        </>

                                          : null}
        </Content>
    </Wrapper>
  )};
  
  export default ProfileHeader;