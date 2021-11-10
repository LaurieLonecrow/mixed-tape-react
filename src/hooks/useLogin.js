import {useState, useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-js";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID; 
// const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET; 
const redirectUri = 'http://localhost:3000/'; 

const spotify = new SpotifyWebApi();

const scopes = [
  "playlist-modify-private",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-read-collaborative",
  "user-read-playback-state",
  "user-modify-playback-state",
  "app-remote-control",
];

console.log(clientId)
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;


export const useLogin = () => {
const [token, setToken] = useState();
   
const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };

  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token) {
      setToken(_token);
      spotify.setAccessToken(_token)
    }
    console.log('[token]', token)
  }, [token]);

return {token, setToken}

};
