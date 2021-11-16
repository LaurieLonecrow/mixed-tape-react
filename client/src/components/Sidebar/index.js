import React from "react";

import Navbar from "../NavBar";

import { Wrapper, Content } from "./Sidebar.styles.js";

const Sidebar = () => (
  <Wrapper>
    <Content>
      <Navbar />
    </Content>
  </Wrapper>
);

export default Sidebar;
