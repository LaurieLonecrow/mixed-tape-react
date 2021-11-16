import {useState, useEffect} from "react";

//components
import Sidebar from "../Sidebar";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import ProfileHeader from "../ProfileHeader";

//styles
import {Wrapper, Content, ImageWrapper, Image} from './Home.styles';


import { getUser, getPlaylists, getTopArtists } from "../../APIs"

const Home = () => {
  const [user, setUser] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [topArtists, setTopArtists] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser();
      setUser(userData.data)
      console.log(userData.data, 'userData')

      const userTopArtists = await getTopArtists();
      setTopArtists(userTopArtists.data.items)
      console.log(userTopArtists.data.items, 'userTopArtist')

      const userPlaylists = await getPlaylists();
      setPlaylists(userPlaylists.data.items)
      console.log(userPlaylists.data, 'userPlaylist')

      
    }   
    getUserData();
   
    },[])

    

  return (
    <Wrapper >
      <Sidebar /> 
        <Content>
            {/* <ImageWrapper>
            <Image src={user.images[0].url} alt="cover-art"/> 
            </ImageWrapper> */}
          <ImageCarousel items={topArtists} heading={'Top Artists'}/>
        </Content>
                
    </Wrapper >
  );
};

export default Home;
