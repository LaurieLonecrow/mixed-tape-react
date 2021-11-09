import React from "react";

import { Wrapper, Content, Input } from "./Playlist.styles.js";

const Playlist = ({name, link}) => (
  <Wrapper>
    <Content>
      <Input>
        <h1 type="text">{name}</h1>
        <button onClick={link}>View Playlist</button>
      </Input>
    </Content>
  </Wrapper>
);

export default Playlist;
