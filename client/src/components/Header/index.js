import React from "react";

import Navbar from "../NavBar";

import { Wrapper, Content } from "./Header.styles.js";

const Header = () => (
  <Wrapper>
    <Content>
      <Navbar />
    </Content>
  </Wrapper>
);

export default Header;
