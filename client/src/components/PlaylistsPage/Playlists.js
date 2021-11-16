import {useState, useEffect} from "react";

//components
import Header from '../Sidebar'
import Grid from '../Grid';

// API calls
import { getUser, getPlaylists } from "../../APIs"

import {Wrapper} from './Playlists.styles';

const Playlists = () => {
  const [user, setUser] = useState(null)
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser();
      setUser(userData.data)
    //   console.log(userData.data)

      const userPlaylists = await getPlaylists();
      setPlaylists(userPlaylists.data.items)
    //   console.log(userPlaylists.data)
    }   
    getUserData();
   
    },[])

    return (
        <Wrapper>
            <Header /> 
            <Grid playlists = {playlists} source={`playlist`}/>
        </Wrapper>
        
    )
}

export default Playlists;


