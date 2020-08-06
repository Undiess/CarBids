import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.js"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Auction from "./components/pages/auctions/Auctions";
import"./components/fontawesome/fontawesome";
import CarDetails from "./components/pages/cardetails/cardetails"
import carContext from "./components/utils/carContext"
import loggedContext from "./components/utils/loggedContext"
import SignIn from "./components/pages/signIn/signin"
import SignUp from './components/pages/signIn/signup';

function App() {

  const [car, setid] = useState({
    
  });

  const [loggedin,setLogin]= useState({})
  

  function carid(props){
    car.props=props
    console.log(car)
  }
  

  
  return (
    <Router>
    
      <loggedContext.Provider value={[loggedin,setLogin]}>
      <carContext.Provider value={carid}> 
        <div className="App">
          <Navbar/>
          <Route exact path="/" component = {Auction}/>
          <carContext.Provider value={car}>
            <Route exact path="/cardetails" component={CarDetails}/>
           </carContext.Provider>
           
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>\
        </div>
        </carContext.Provider>
        </loggedContext.Provider>
     
           
   
      
    </Router>
    
  );
}

export default App;
