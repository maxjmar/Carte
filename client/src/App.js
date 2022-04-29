import './App.css';
import React,{useState, useEffect} from "react";
import {Switch, Route,} from "react-router-dom";
import Heading from "./cmpnts/Heading";
import NavBar from "./cmpnts/NavBar";
import Home from "./cmpnts/Home";
import Current from "./cmpnts/Current";
import Recent from "./cmpnts/Recent";
import Login from "./cmpnts/Login";
import Mine from "./cmpnts/Mine"


function App() {
  const [authUser, setAuthUser] = useState([]);

  useEffect(()=>{
    fetch("/me")
    .then(r => r.json())
    .then(setAuthUser)
}, [])

  // function logout(e) {
  //   e.preventDefault()

  //   fetch("/logout", {
  //   method: 'DELETE'})
  //   .then(r=>r.json())
  //   .then(setAuthUser)
  //   document.location.reload(true)
  // }

  return (
    <div className="App">
      <div className="main">
        <div className="Heading">
          <Heading/>
        </div>
        <div className="NavBar">
          <NavBar authUser={authUser} setUser={setAuthUser}/>
        </div>
        <Switch>
          <Route exact path="/">
            <Home authUser={authUser} setUser={setAuthUser}/>
          </Route>
          <Route exact path="/mine">
            <Mine authUser={authUser} setUser={setAuthUser}/>
          </Route>
          <Route exact path="/current">
            <Current authUser={authUser} setUser={setAuthUser}/>
          </Route>
          <Route exact path="/recent">
            <Recent authUser={authUser} setUser={setAuthUser}/>
          </Route>
          <Route path="/login">
              <Login authUser={authUser} setUser={setAuthUser}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
