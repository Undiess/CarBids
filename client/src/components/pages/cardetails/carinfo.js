import React from 'react';
import "./stylesheet.css"
function Carinfo(props){ 
   
    
    return(
        <div>
            <div className="contentcontainer"> 
                    <img className="detailimg"src={props.props.props.imgURL}/> 
                    <h1>{props.props.props.title}</h1>
                    <h4>Highest Bid: {props.props.props.highest_bid}</h4>
                    <p>{props.props.props.overview}</p>
                   
                   
                    <input type="number" id="quantity" placeholder={props.props.props.highest_bid} min={props.props.props.highest_bid} ></input>
                    <button type="button" class="signinbtn placebidbtn btn btn-secondary">PlaceBid</button>

            </div>
           
        </div>
    )
}
export default Carinfo