import React from "react";
import "./stylesheet.css"
import CarDisplays from "../cars/CarDisplay"

function Auction(){
     return(
         <div> 
             <nav class="navbar auctionsbar navbar-expand-lg navbar-light ">
                <h4 class ="auctiontitletext">Auctions</h4>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Ending Soon <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Recently Listed</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">No Reserve</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>

            <CarDisplays/>
         </div>
     )
}
export default Auction