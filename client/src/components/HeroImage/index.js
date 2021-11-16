import React from "react";

import { Wrapper, Image } from "./HeroImage.styles.js";


const HeroImage = ({source}) => {

  return (
  <Wrapper>
        <Image src={source} alt="cover-art"/>

    </Wrapper>
  )};
  
  export default HeroImage;