import React,{useState, useContext} from 'react';
import "./stylesheet.css"
import speed from "./speedometer.jpg"
import shifter from "./shifter.png"
import body from "./body.png"
import engine from "./engine.png"
import drivetrain from "./drivetrain.png"
import NumberFormat from 'react-number-format';
import API from "../../utils/API"
import loggedContext from "../../utils/loggedContext"
import { useHistory } from "react-router";


function Carinfo(props){ 
    const history = useHistory();
    const [state,setState] = useState({})
    const [loggedin,setLogin] = useContext(loggedContext);

    const placebid=()=>{
        if (state.bid <= props.props.highest_bid){
            setState({"valid":"false"})
            return
        }
        if(loggedin.login === "false"){
            history.push({pathname:"/signin"})
        }
        const id = loggedin.id
        const data = {carId:props.props._id, bidAmount:state.bid, buyerId:id}
        API.placebid(data)
        window.location.reload(true)
    }

    const onChange = e => {
        setState({state,[e.target.id]: e.target.value });
      };
    

    
    return(
        <div>
            
            <h1 className="titledescription">{props.props.title}</h1>
            <div className="contentcontainer"> 
                    <img className="detailimg"src={props.props.imgURL}/> 
                   
                    <div class="container infobar">
                        <div class="row">
                            <div class="col-sm">
                                <img className="speedometer"src={speed} alt="speedometer"></img> 
                                <p className="kmtext"> <NumberFormat value={props.props.kilometers} displayType={'text'} thousandSeparator={true}  /> km</p>
                            </div>

                            <div class="col-sm">
                                <img className="shifter"src={shifter} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.transmission}</p>
                            </div>

                            <div class="col-sm">
                                <img className="car"src={body} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.body_type}</p>
                            </div>

                            <div class="col-sm">
                                <img className="engineicon"src={engine} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.body_type}</p>
                            </div>

                            <div class="col-sm">
                                <img className="transmissionicon"src={drivetrain} alt="speedometer"></img> 
                                <p className="kmtext">{props.props.drivetrain}</p>
                            </div>
                        
                        </div>
                    </div>

                    
                    <h4>Highest Bid: {props.props.highest_bid}</h4>
                    <p>{props.props.overview}</p>
                   
                    {state.valid === "false" ? (
                    <p>please enter a higher number</p>
                    ) : (
                    <div></div>
                    )} 
                    <input type="number" id="bid" onChange={onChange} placeholder={props.props.highest_bid} min={props.props.highest_bid} ></input>
                
                    <button type="button" onClick={placebid} className="signinbtn placebidbtn btn btn-secondary">PlaceBid</button>
                   

            </div>
           
        </div>
    )
}
export default Carinfo