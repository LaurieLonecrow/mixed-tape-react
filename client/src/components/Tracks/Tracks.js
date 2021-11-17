import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { getTracks } from "../../APIs";

//components
import Form from '../Form'
import Sidebar from '../Sidebar'
import Playlist from "../Playlist";
import Text from "../Text";
import Hero from "../Hero";
import Loader from "../Loader";


//styles 
import {Wrapper, Content} from './Tracks.styles';


const Tracks = () => {
    const { id } = useParams();
    const [playlistData, setPlaylistData] = useState(null);
    const [tracksData, setTracksData] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [texts, setTexts]=useState([]);

    const getAllText = async () => {
        await fetch('http://localhost:3001/tracks')
        .then(res => res.json())
        .then(data => setTexts(data))
    }

    const createText = async (newText) => {
        // console.log(newText, 'newText')
        const request ={
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(newText)
        }
        await fetch('http://localhost:3001/tracks', request)
            .then(res => res.json())
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

return (

    <Wrapper>
        <Sidebar/>
        {tracksData ? (
        <div className="main-container">
        <Hero source={playlistData.images[0].url}
                    playlists={playlistData}/>
        <Content>
            {tracksData.items.map((track, i) => (
            <li  key={i}>
                <div className="list_item">
                <Playlist track={track}/>
                {texts? (
                    <>
                    {texts.map(text => 
                        text.trackId === track.track.id ? <Text text={text.content}/> : 
                            null)}
                    </>
                        ) : null}
                <Form onSubmit={createText} trackId={track.track.id}/>
               </div>
            </li>))}
        </Content>
        </div>
        ) : <Loader />}
    </Wrapper>
)
}

export default Tracks;