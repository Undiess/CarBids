import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auction from "./components/pages/auctions/Auctions";
import"./components/fontawesome/fontawesome";
import CarDetails from "./components/pages/cardetails/cardetails"
import carContext from "./components/utils/carContext"

function App() {

  const [car, setid] = useState({
    
  });

  function carid(props){
    car.props=props
    console.log(car)
  }
  

  
  return (
    <Router>
      <carContext.Provider value={carid}> 
        <div className="App">
          <Navbar/>
          <Route exact path="/" component = {Auction}/>
          <carContext.Provider value={car}>
            <Route exact path="/cardetails" component={CarDetails}/>
           </carContext.Provider>
        </div>
      </carContext.Provider>
    </Router>
    
  );
}

export default App;
