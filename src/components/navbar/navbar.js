import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.PNG';
import './stylesheet.css'

function Navbar(){ 

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img class = "navlogo" src={logo} alt="Car Bids"/>
        </a>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Auctions<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sell My Car</a>
            </li>
         
            <li class="nav-item">
              <a class="nav-link " href="#">About Car Bids</a>
            </li>
          </ul>
          <form class="searchbar form-inline my-2 my-lg-0">
            <input style ={{width:"400px"}} class="  form-control mr-sm-2" type="search" placeholder="Search " aria-label="Search"/>
            <button class="searchbtn btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
         
          <a class="sign-in-button"><button class="signinbtn btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign In</button></a>
            
        </div>
      </nav>
  
  
  )


}
export default Navbar