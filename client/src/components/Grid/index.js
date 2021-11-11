import { Link } from "react-router-dom";

import { Wrapper, Content } from "./Grid.styles.js";

import Playlist from "../Playlist/index.js";


const Grid = ({playlists}) => {

return (
  <Wrapper>
    <Content>
    {playlists.map(playlist => (
              <Playlist 
                key={playlist.id}
                name={playlist.name}
                onClick={
                  <Link to={`/${playlist.id}`}/> }
                />
    ))}
    </Content>
  </Wrapper>
)
};

export default Grid;