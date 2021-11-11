import {useState, useEffect} from "react";
import { accessToken } from "../hooks/getToken"


//components
import Grid from "./Grid";
import Header from "./Header";
// import Playlist from "./Playlist";


//hooks

//spotify
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();


const Home = () => {
  const [playlists, setPlaylists] = useState(null);

  const getPlaylists = async() => {
    try {
      await spotify.getUserPlaylists()
      .then((playlists) => {
        setPlaylists(playlists.items);
      });
    } catch (e) {
        console.log('error in playlist loading', e)
    } 
} 
console.log(playlists)

useEffect(()=> {
  if(accessToken) {
    spotify.setAccessToken(accessToken);
    getPlaylists();
;
  }
}, []);

  return (
    <>
      <Header /> 
      <Grid playlists = {playlists}
              />

    </>
  );
};

export default Home;
