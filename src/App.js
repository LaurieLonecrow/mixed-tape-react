import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//stylesheet
import { GlobalStyle } from "./GlobalStyle";

//components
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => (
  <>
    <Router>
      <Header />
      <Home />

      <GlobalStyle />
    </Router>
  </>
);
export default App;
