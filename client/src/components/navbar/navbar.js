import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.PNG';
import './stylesheet.css'

function Navbar(){ 

    return(
        <nav className="navbar navbartop navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img className = "navlogo" src={logo} alt="Car Bids"/>
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Auctions<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell My Car</a>
            </li>
         
            <li className="nav-item">
              <a className="nav-link " href="#">About Car Bids</a>
            </li>
          </ul>
          <form className="searchbar form-inline my-2 my-lg-0">
            <input style ={{width:"400px"}} className="  form-control mr-sm-2" type="search" placeholder="Search " aria-label="Search"/>
            <button className="searchbtn btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
         
          <a className="sign-in-button"><button className="signinbtn btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign In</button></a>
            
        </div>
      </nav>
  
  
  )


}
export default Navbar