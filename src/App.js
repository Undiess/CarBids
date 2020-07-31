import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/pages/navbar.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
    </div></Router>
    
  );
}

export default App;
