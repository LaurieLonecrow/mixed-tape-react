import React from "react";


import { Wrapper, Content } from "./Playlist.styles.js";

const Playlist = ({track}:any) => {

  return (
  <>
  <Wrapper>
    <Content>
                <div>
                  <img className="album_img"src={track.track.album.images[0].url} alt="album-cover"/>
                </div>
                <div className="left_box">
                  <h3 className="track_name">{track.track.name}</h3>
                  <div className="artist_name" >
                  {track.track.artists.map((artist:any, i:string) => (
                      <li key={i}>{artist.name}</li>
                  ))}
                  </div>
                </div>
                <h3 className="album_name">{track.track.album.name}</h3>


    </Content>
  </Wrapper>
  </>
  )
};

export default Playlist;
