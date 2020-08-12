import React,{useState, useContext,useEffect} from 'react';
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
import moment, {duration} from 'moment'


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
            return
        }
        
        const id = loggedin.id
        const data = {carId:props.props._id, bidAmount:state.bid, buyerId:id}
        API.placebid(data)
        window.location.reload(true)
    }

    const onChange = e => {
        setState({state,[e.target.id]: e.target.value });
      };
    
      const [time, setTime] = useState(
        {
            "days":0,
            "hours":0,
            "mins":0,
            "seconds":0
        
        }
    );

  

    const setCountdown=()=>{
        const futureDate = moment(props.props.ending_time)
        const today = moment();

        const clockduration = duration(futureDate.diff(today))
        
        const days = Math.floor(clockduration.asDays());
        const hours = clockduration.hours();
        const mins = clockduration.minutes();
        const seconds = clockduration.seconds();
        
        setTime(
            {
                "days":days,
                "hours":hours,
                "mins":mins,
                "seconds":seconds
            
            }
 
        )
        
    }
    

      useEffect(() => {
        const interval = setInterval(() => {
            setCountdown()
        
        }, 1000);
        return () => clearInterval(interval);
      }, [setCountdown]);
      
    
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

                    <div class="container">
                        <div class="row detailsrow">
                            <div class="col-8">
                                <h4>Car Overview</h4>
                            <p>{props.props.overview}</p>
                            </div>
                           
                            <div class="col bidscontainer">
                                <h4>Highest Bid: {props.props.highest_bid}</h4>
                                <p> Time remaining: {time.days}d {time.hours}h {time.mins}m {time.seconds}s</p>

                               {state.valid === "false" ? (
                                <p className="biderror">please enter a higher number</p>
                                ) : (
                                <div></div>
                                )} 
                                <input type="number" id="bid" onChange={onChange} placeholder={props.props.highest_bid} min={props.props.highest_bid} ></input>
                            
                                <button type="button" onClick={placebid} className="signinbtn placebidbtn btn btn-secondary">PlaceBid</button>
                                {props.props.highest_bidderid === loggedin.id ? (
                                <h5 className="highestbiddertxt">You are the highest bidder</h5>
                                ) : (
                                <div></div>
                                )} 
                                
                            </div>
                        </div>
                    </div>
                   
                    
                   
                    
                   

            </div>
           
        </div>
    )
}
export default Carinfo