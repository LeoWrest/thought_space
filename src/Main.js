import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/deposit" component={Deposit}/>
            <Route path="/withdraw" component={Withdraw}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;