import {useState} from "react";

import { logout } from "../../config";

import { Wrapper, Content, Text, Dropdown } from "./NavBar.styles";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false)

  function showDropdown(e){
    setDropDown(!dropDown)
  }

  return (

  <Wrapper>
    <Content>
    <h1>Mixed Tape</h1>
      <Text>
        <li>Home</li>
        <li>Playlists</li>
        <Dropdown onClick={showDropdown}/>
          {dropDown
          ? (<button onClick={logout}>Log Out</button>)
          : null}
      </Text>
    </Content>
  </Wrapper>
  )
};

export default Navbar;
