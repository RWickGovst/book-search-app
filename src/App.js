import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path ="/" component = {Home} />
        <Route exact path ="/saved" component = {Saved} />
      </Switch>
    </Router>

  )

}
export default App;