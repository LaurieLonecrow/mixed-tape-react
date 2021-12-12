import {useState} from "react";
import { Link } from "react-router-dom";

import { logout } from "../../config";

import { Wrapper, Content, Text, Dropdown, Button } from "./NavBar.styles";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  function showDropdown(e: React.MouseEvent<HTMLButtonElement>){
    setDropDown(!dropDown)
  }

  return (
    
  <Wrapper>
    <Content>
    <h1>Mixed Tape</h1>
      <Text>

        <Link to={`/`}> <Button>Home</Button></Link>
        <Link to={`/playlists`}> <Button>Playlists</Button></Link>

        <Dropdown onClick={showDropdown}/>
          {dropDown
          ? (<Button onClick={logout}>Log Out</Button>)
          : null}
      </Text>
    </Content>
  </Wrapper>
  )
};

export default Navbar;
