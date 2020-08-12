import React, { useState, useEffect } from 'react';
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
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/utils/setAuthToken";
import Footer from "./components/navbar/footer"
import Sell from "./components/pages/sell/Sell"

function App() {
  const [loggedin,setLogin]= useState({
    login:"false"
  })
  useEffect(()=>{
    if(localStorage.jwtToken){
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      setLogin(decoded)
    }
    const currentTime = Date.now() / 1000; 
    if(loggedin.exp<currentTime){
      setLogin({
        login:false
      })
    }
  },[])
  
  const [car, setid] = useState({
    
  });




  

  function carid(props){
    car.props=props
    console.log(car)
    console.log(loggedin)
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
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/sellmycar" component={Sell}/>
            <Footer/>
        </div>
        </carContext.Provider>
        </loggedContext.Provider>
     
           
   
      
    </Router>
    
  );
}

export default App;
