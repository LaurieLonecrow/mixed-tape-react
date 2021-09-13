import React from "react";

import { Wrapper, Content, Text } from "./NavBar.styles";

const Navbar = () => (
  <Wrapper>
    <Content>
    <h1>Mixed Tape</h1>
      <Text>
        <li>Home</li>
        <li>Login</li>
      </Text>
    </Content>
  </Wrapper>
);

export default Navbar;
