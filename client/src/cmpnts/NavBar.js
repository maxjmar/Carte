import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
    return (
      <div className="NavBar">
        <div>
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
        <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
            <NavLink to="/login">Login</NavLink>
        )}
      </div>
      </div>
    );
  }
  
  export default NavBar;