import React from "react";

import { Wrapper, Content, Input } from "./Playlist.styles.js";

const Playlist = (text) => (
  <Wrapper>
    <Content>
      <Input>
        <h1 type="text">{console.log(text)}</h1>
      </Input>
    </Content>
  </Wrapper>
);

export default Playlist;
