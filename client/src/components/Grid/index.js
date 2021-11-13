import { Link } from "react-router-dom";

import { Wrapper, Content, Image } from "./Grid.styles.js";

// import Playlist from "../Playlist/index.js";


const Grid = ({playlists}) => {

console.log(playlists)

return (
  <Wrapper>
    <Content>
{playlists && playlists.length ? (
      <>
        {playlists.map((playlist, i) => (
          <li key={i}>
            <Link to={`/playlist/${playlist.id}`}>
              {playlist.images.length && playlist.images[0] && (
                <div >
                  <Image src={playlist.images[0].url} alt={playlist.name} />
                </div>
              )}
              <h3 className="playlist_name">{playlist.name}</h3>
            </Link>
          </li>
        ))}
      </>
    ) : (
      <p>No playlists available</p>
    )}

    </Content>
  </Wrapper>
)
};

export default Grid;