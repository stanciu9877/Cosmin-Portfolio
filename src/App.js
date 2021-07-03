import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

import SmoothScrollbar from "./components/SmoothScrollbar";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Home />
          </Switch>
        </SmoothScrollbar>
      </Router>
    </>
  );
}
