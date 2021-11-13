import React from "react";

import Navbar from "../NavBar";
import HeroImage from "../HeroImage";

import { Wrapper, Content } from "./Header.styles.js";

const Header = () => (
  <Wrapper>
    <HeroImage />
    <Content>
      <Navbar />
    </Content>
  </Wrapper>
);

export default Header;
