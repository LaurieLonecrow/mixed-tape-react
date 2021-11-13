import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

//components
import Form from './Form'
import Header from './Header'

import { getTracks } from "../APIs";
import Playlist from "./Playlist";


const Tracks = () => {
    const { id } = useParams();
    const [playlistData, setPlaylistData] = useState(null);
    const [tracksData, setTracksData] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [text, setTexts]=useState([]);


  const getAllText = async () => {
    await fetch('http://localhost:3001/tracks')
    .then(res => res.json())
    .then(data => setTexts(data))
}
  
  const createText = async (newText) => {
    const request ={
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newText)
    }
    await fetch('http://localhost:3001/tracks', request)
        .then(res => res.text())
        .then((text) => setTexts(textList => [...textList, text]));
        getAllText();
  }

  useEffect(() => {
    getAllText();
  },[])

//get the playlist Object with track data etc.
    useEffect(() => {
        const getPlaylistData = async () => {
            const playlist = await getTracks(id);
            setPlaylistData(playlist.data);
            setTracksData(playlist.data.tracks)
        }
        getPlaylistData();
    },[id]);

//get track listing and next set of tracks
    useEffect(() => {
        if(!tracksData) {
        return;
    }
    const getMoreTracks = async () => {
        if (tracksData.next) {
            const nextTracks = await axios.get(tracksData.next);
            setTracksData(nextTracks.data)
        }
    };
    setTracks(tracks => ([
        ...tracks ? tracks : [],
        ...tracksData.items
    ]));
    getMoreTracks()
    },[tracksData])

    console.log(tracksData.items)
return (

    <div>
        <Header/>
        {/* This is the main Making a Playlist Page,
        include Tracks Listings, Inputs areas, and Footer with Player,
        include ability to change Fonts/Background image */}
        {tracksData ? (
        <ul>
            {tracksData.items.map((track, i) => (
            <li key={i}>
                <h3>{track.track.name}</h3>
                <Form onSubmit={createText}
                      trackId={track.track.id}
                      
                       />
                <Playlist text={text} />
            </li>))}
        </ul>
        ) : <p>No Tracks Available</p>}

    </div>

)
}

export default Tracks;