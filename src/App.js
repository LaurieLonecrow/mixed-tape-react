import React from "react";
import { Route } from "react-router";

//stylesheet
import { GlobalStyle } from "./GlobalStyle";

//components
import Home from "./components/Home";
import Tracks from "./components/Tracks";

const App = () => (
  <>

      <Home />
      <Route path="/:playlistId" element={<Tracks />} />
      <GlobalStyle />
  </>
);
export default App;
