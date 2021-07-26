import React from "react";

import Playlist from "../Playlist";

import { Wrapper, Content } from "./Grid.styles.js";

const Grid = () => (
  <Wrapper>
    <Content>
      <Playlist />
    </Content>
  </Wrapper>
);

export default Grid;
