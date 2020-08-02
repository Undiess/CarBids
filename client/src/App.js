import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auction from "./components/pages/auctions/Auctions"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component = {Auction}/>
        
    </div></Router>
    
  );
}

export default App;
