import './App.css';
import React,{useState, useEffect} from "react";
import {Switch, Route,} from "react-router-dom";
import Heading from "./cmpnts/Heading";
import NavBar from "./cmpnts/NavBar";
import Home from "./cmpnts/Home";
import Cat from "./cmpnts/Cat";
import CardForm from "./cmpnts/CardForm";


function App() {

  return (
    <div className="App">
      <div className="main">
        <div className="Heading">
          <Heading/>
        </div>
        <div className="NavBar">
          <NavBar/>
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
        </Switch>
      </div>
    </div>
  );
}

export default App;
