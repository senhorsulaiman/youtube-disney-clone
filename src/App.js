
import React  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

          <Switch>
              <Route>
                  <Login/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
