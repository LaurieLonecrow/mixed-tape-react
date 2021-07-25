import React from "react";

import { Wrapper, Content, Text } from "./NavBar.styles";

const Navbar = () => (
  <Wrapper>
    <Content>
      <Text>
        <h1>Mixed Tape</h1>
        <li>Home</li>
        <li>Login</li>
      </Text>
    </Content>
  </Wrapper>
);

export default Navbar;
