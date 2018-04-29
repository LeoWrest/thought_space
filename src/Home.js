import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import './Home.css'
 
class Home extends Component {
  render() {
    return (
        <div>
            <div id="logo-container">
                <img id="logo" src="resource/logo-12.png" />
                <h2>Howdy</h2>
                <p>Thought space is a site that allows you to deposit a random thought into our vault, 
                    but your thought can be randomly withdrawn from anywhere by anyone! </p>
                <p> Start sharing your awesome thoughts! </p>
            </div>  
            <div id="buttons">
                <NavLink to="/deposit"><button>Deposit</button></NavLink>
                <NavLink to="/withdraw"><button>Widthdraw</button></NavLink>
                <button>Login/Sign up</button>
            </div>
       </div>
    );
  }
}
 
export default Home;