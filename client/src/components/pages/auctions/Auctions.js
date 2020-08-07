import React from "react";
import "./stylesheet.css"
import CarDisplays from "../cars/CarDisplay"

function Auction(){
     return(
         <div> 
             <nav className="navbar auctionsbar navbar-expand-lg navbar-light ">
                <h4 className ="auctiontitletext">Auctions</h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Ending Soon <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Recently Listed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">No Reserve</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>

            <CarDisplays/>
         </div>
     )
}
export default Auction