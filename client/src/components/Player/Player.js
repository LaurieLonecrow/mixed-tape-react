import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({uri, accessToken}) {

    if (!{accessToken}) return null;
    return <SpotifyPlayer
            token={accessToken}
            uri={trackUri? [uri]: []}
            play
            
            />
}