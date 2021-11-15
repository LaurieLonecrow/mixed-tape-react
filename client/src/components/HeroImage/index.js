import React from "react";

import { Wrapper, Content } from "./HeroImage.styles.js";


const HeroImage = ({playlists}) => {

  console.log(playlists, "Hero")
  return (
  <>

    <Wrapper>
      <Content>
        {/* <img/>
        <p></p>
        <h1>Title</h1>
        <p>user name</p>
        <p>number of songs</p>
        <p>playlist duration</p> */}

    <img src={playlists.images[0].url}/>

        {/* {playlists[0].images.map((image, i) => (
          <>
          <img src={image[0].url}/>
          </>
                  ))} */}
      
      </Content>
    </Wrapper>
    </>
  )};
  
  export default HeroImage;