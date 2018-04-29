import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class Menu extends Component {
  
  render() {
    return (
      <div id="buttons">
        <NavLink to="/deposit"><button>Deposit</button></NavLink>
        <NavLink to="/withdraw"><button>Widthdraw</button></NavLink>
        <button>Login/Sign up</button>
      </div>
    );
  }
}
 
export default Menu;