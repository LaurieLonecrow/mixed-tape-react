import {useState, useEffect} from "react";

//components
import Grid from "./Grid";
import Header from "./Header";
// import Playlist from "./Playlist";


//hooks
import { useLogin } from "../hooks/useLogin"

//spotify
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();

const Home = () => {
  const {token} = useLogin();
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
  if(token) {
    getPlaylists();
  }
}, [token]);

  return (
    <>
      <Header /> 
      <Grid playlists = {playlists}
              />

    </>
  );
};

export default Home;
