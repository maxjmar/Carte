import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
      <div className="NavBar">
        <NavLink className="navLinks" to="/">
          Home
        </NavLink>
        <NavLink className="navLinks" to="/categories">
          My Cards
        </NavLink>
        <NavLink className="navLinks" to="/add-card">
          Add Card
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;