import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Zafari from "./pages/Zafari";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
      <div>
          <Router basename="/pokeapp">
              <Switch>
                  <Route path="/pokedex">
                      <Pokedex/>
                  </Route>
                  <Route path="/">
                      <Zafari/>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
