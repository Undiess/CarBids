import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import logo from './logo.PNG';
import './stylesheet.css'
import loggedContext from "../utils/loggedContext"

function Navbar(){ 

    const [loggedin,setLogin] = useContext(loggedContext)

    return(
        <nav className="navbar navbartop navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <Link to="/"><img className = "navlogo" src={logo} alt="Car Bids"/></Link>
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/"> <a className="nav-link" href="#">Auctions<span className="sr-only">(current)</span></a></Link>
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
        
             {loggedin.login === "false" ? (
            <Link to="/signin"><a className="sign-in-button"><button className="signinbtn btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign In</button></a></Link>
            ) : (
            <span className="wlcome">   <h5>{loggedin.name}</h5></span>
            )}
          
            
        </div>
      </nav>
  
  
  )


}
export default Navbar