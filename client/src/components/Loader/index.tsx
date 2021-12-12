import React from "react";

import { Wrapper, Content, Bar} from './Loader.styles'

export default function Loader() {

return (
<Wrapper>
    <Content>
        <Bar delay="253ms"/>
        <Bar delay="742ms"/>
        <Bar delay="547ms"/>
        <Bar delay="25ms"/>
        <Bar delay="194ms"/>
    </Content>
</Wrapper>


    )
}


