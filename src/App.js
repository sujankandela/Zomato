import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

 
class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Zomato</h1>
            <ul className="header">
              <li><NavLink to="/">About</NavLink></li>
              <li><NavLink to="/stuff">OrderNow</NavLink></li>
              <li><NavLink to="/contact">Help</NavLink></li>
            </ul>
            <div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/stuff" component={Stuff}/>
  <Route path="/contact" component={Contact}/>
</div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default App;