import {useState, useEffect} from "react";

import { BrowserRouter as Router, 
  Switch, 
  Route, 
  useLocation } from 'react-router-dom';

  //stylesheet
import { GlobalStyle } from "./GlobalStyle";

//components
import Home from "./components/Home";
import Login from "./components/Login"
import Grid from "./components/Grid";
import Tracks from "./components/Tracks";

import { accessToken } from './config';
import { getUser } from "./APIs"


const App = () => {
  const [access, setAccess] = useState(null);
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    setAccess(accessToken)
    const getUserData = async () => {
      const response = await getUser();
      setUser(response.data)
      console.log(response.data)
    }
    getUserData();
  },[access])

 return (
  <Router>
        {!user ? <Login/> :

        <Switch>
            <Route path="/search"/>
            <Route path="/playlists"><Grid/></Route>
            <Route path="/playlist/:id"><Tracks/></Route> 
            <Route path="/"><Home/></Route>
        </Switch>
                    }
      <GlobalStyle />
  </Router>

 )
  
};
export default App;
