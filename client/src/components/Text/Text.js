import React from 'react'


import {Wrapper, Content} from './Text.styles';

const Text = ({text}) => {

    return (
        <Wrapper>
            <Content>
                <p>{text}</p>
            </Content>
        </Wrapper>
            
        
    )
}

export default Text;
