//components
import Loader from '../Loader'
import HeadingTitle from "../HeadingTitle/index.js";


import {Wrapper, Content, Card, Image} from './ImageCarousel.styles'

export default function ImageCarousel({items, heading}) {
    return (
    <Wrapper>
        {items && items.length ? (
            <>
            <HeadingTitle title = {`${heading}`}/>
        <Content>
            
        {items.map((item, i) => (
            
          <Card key={i} className="image_carousel_container">
              {item.images[0] && (
                  <Image className="carousel_image" src={item.images[0].url}/>
              )}
              <h3 className="item_name">{item.name}</h3>
          </Card>
          
        ))}
        </Content>
        </>
        ) : <Loader />}
    </Wrapper>
    
    
        )
    }