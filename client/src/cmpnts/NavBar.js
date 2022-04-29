import React from 'react';
import {NavLink} from "react-router-dom";
// import Login from "./Login"

function NavBar({ authUser, setAuthUser }) {
  function logout(e) {
    e.preventDefault()

    fetch("/logout", {
    method: 'DELETE'})
    .then(r=>r.json())
    .then(setAuthUser)
    // document.location.reload(true)
    // window.localStorage.clear()
  }
    return (
      <div className="NavBar">
        <div className="navLinks">
          <div className="links">
            <NavLink  to="/login">
              login
            </NavLink>
          </div>
          <div className="links">
            <NavLink  to="/mine">
              My Cards
            </NavLink>
          </div>
          <div className="links">
            <NavLink  to="/current">
              Current Coworkers
            </NavLink>
          </div>
          <div className="links">
            <NavLink  to="/recent">
              Recently Met
            </NavLink>
          </div>
          <div className="links">
            {authUser ? (
              <button onClick={(e) => logout(e)}>Logout</button>
            ) : (
                <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
        
      </div>
    );
  }
  
  export default NavBar;