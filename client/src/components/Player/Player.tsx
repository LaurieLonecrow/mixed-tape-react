import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({uri, accessToken}) {

// check out WDS spotify clone YT
// https://www.youtube.com/watch?v=Xcet6msf3eE

    if (!{accessToken}) return null;
    return <SpotifyPlayer
            token={accessToken}
            uri={trackUri? [uri]: []}
            play
            
            />
}