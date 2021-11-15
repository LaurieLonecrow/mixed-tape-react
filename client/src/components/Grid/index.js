import { Link } from "react-router-dom";

import { Wrapper, Content, Card, Image } from "./Grid.styles.js";


const Grid = ({playlists}) => {

console.log(playlists, 'Grid')

return (
  
  <Wrapper>
{playlists && playlists.length ? (
  <>
  <Content>
        {playlists.map((playlist, i) => (
          <Card key={i}>
            <Link className="playlist_name" to={`/playlist/${playlist.id}`}>
              {playlist.images.length && playlist.images[0] && (
                <div >
                  <Image src={playlist.images[0].url} alt={playlist.name} />
                </div>
              )}
              <h3 >{playlist.name}</h3>
            </Link>
          </Card>
        ))}
  </Content>
  </>
    ) : ( <p>No playlists available</p> )}

  </Wrapper>
    
)
};

export default Grid;