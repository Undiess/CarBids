import React from 'react';
import "./stylesheet.css"
import speed from "./speedometer.jpg"
import shifter from "./shifter.png"
import body from "./body.png"
import engine from "./engine.png"
import drivetrain from "./drivetrain.png"


function Carinfo(props){ 

    const  numberWithCommas= (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div>
            
            <h1 className="titledescription">{props.props.props.title}</h1>
            <div className="contentcontainer"> 
                    <img className="detailimg"src={props.props.props.imgURL}/> 
                   
                    <div class="container infobar">
                        <div class="row">
                            <div class="col-sm">
                                <img className="speedometer"src={speed} alt="speedometer"></img> 
                                <p className="kmtext"> {numberWithCommas(props.props.props.kilometers)} km</p>
                            </div>

                            <div class="col-sm">
                                <img className="shifter"src={shifter} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.props.transmission}</p>
                            </div>

                            <div class="col-sm">
                                <img className="car"src={body} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.props.body_type}</p>
                            </div>

                            <div class="col-sm">
                                <img className="engineicon"src={engine} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.props.body_type}</p>
                            </div>

                            <div class="col-sm">
                                <img className="transmissionicon"src={drivetrain} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.props.drivetrain}</p>
                            </div>
                        
                        </div>
                    </div>

                    
                    <h4>Highest Bid: {props.props.props.highest_bid}</h4>
                    <p>{props.props.props.overview}</p>
                   
                   
                    <input type="number" id="quantity" placeholder={props.props.props.highest_bid} min={props.props.props.highest_bid} ></input>
                    <button type="button" className="signinbtn placebidbtn btn btn-secondary">PlaceBid</button>

            </div>
           
        </div>
    )
}
export default Carinfo