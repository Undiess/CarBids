import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){ 

    return(
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Car Bids </li>
                <li>
                <Link to="/" >
                Auctions
                </Link>
                </li>
                <li>
                    <Link to="/" >
                     Auctions
                    </Link></li>
                <li><a href="#">About Car Bids</a></li>
            </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
                <li><input type="search" placeholder="Search"/></li>
                <li><button type="button" className="button">Search</button></li>
            </ul>
        </div>
    </div>
  
  
  )


}
export default Navbar