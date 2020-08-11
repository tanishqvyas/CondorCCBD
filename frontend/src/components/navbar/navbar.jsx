import React, { useRef } from "react";
import "./navbar.css";

import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
//   let menuContainer = useRef(null);

    

  const toggleMenu = () => {
    
    let menuContainer = document.querySelector('#sidenav-container');

    if (menuContainer.style.left === "-239px") {
      menuContainer.style.left = "0px";
    } else {
      menuContainer.style.left = "-239px";
    }

  };

  return (
    <div  id="sidenav-container">
      <button onClick={toggleMenu}>
        {" "}
        <TiThMenu />{" "}
      </button>
      <div id="sidenav-header">
        <img src={require("../../assets/logo192.png")} />
        <h3>CCBD Project</h3>
      </div>

      <div id="sidenav">
        <a className="nav-ele" href="#">
          <h3>HOME</h3>
        </a>
        <a className="nav-ele" href="#">
          <h3>ABOUT</h3>
        </a>
        <a className="nav-ele" href="#">
          <h3>CONTACT US</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
