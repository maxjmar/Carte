import React from 'react';
import {NavLink} from "react-router-dom";

function Home({ authUser }) {
    if (authUser===authUser.id) {
      return <p>Welcome!</p>;
    } else {
      return <p>Please <NavLink to="/login">Login</NavLink></p>;
    }
  }
  
  export default Home;