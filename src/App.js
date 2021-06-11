import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";


function App() {
  return (
      <Router>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/dashboard/:name">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
