import './App.css';
import React,{useState, useEffect} from "react";
import {Switch, Route,} from "react-router-dom";
import Heading from "./cmpnts/Heading";
import NavBar from "./cmpnts/NavBar";
import Home from "./cmpnts/Home";
import Cat from "./cmpnts/Cat";
import CardForm from "./cmpnts/CardForm";
import Login from "./cmpnts/Login";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="main">
        <div className="Heading">
          <Heading/>
        </div>
        <div className="NavBar">
          <NavBar user={user} setUser={setUser}/>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/categories">
            <Cat/>
          </Route>
          <Route exact path="/add-card">
            <CardForm/>
          </Route>
          <Route path="/login">
              <Login setUser={setUser} />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
