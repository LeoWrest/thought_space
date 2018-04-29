import React, { Component } from "react";
import Menu from './Menu';
 
class Deposit extends Component {
  render() {
    return (
      <div id="before-menu"></div>,
      <Menu/>,
      <div>
        <h2>Deposit</h2>
        <textarea></textarea>
        <button>Deposit</button>
      </div>
    );
  }
}
 
export default Deposit;