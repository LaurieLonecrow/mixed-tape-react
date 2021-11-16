import React from "react";

//components
import HeroImage from "../HeroImage/index.js";

import { Wrapper, Content, Image, Text } from "./Hero.styles.js";


const Hero = ({source, playlists}) => {

  return (
  <>

    <Wrapper>
      <Content>
        <HeroImage source={source} alt="playlist"/>
        <Text>
        <h1>{playlists.name}</h1>
        <div className="bottom_text">
        <p className="display_name">{playlists.owner.display_name}</p>
        <p className="track_total">{`: ${playlists.tracks.total} songs`}</p>
        </div>
        </Text>
      </Content>
    </Wrapper>
    </>
  )};
  
  export default Hero;