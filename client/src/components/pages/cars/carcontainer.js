import React, {useEffect, useState, useContext } from "react"
import "./stylesheet.css"
import moment, {duration} from 'moment'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import carContext from "../../utils/carContext";

function Carcontainer(props){
    
    const  carid  = useContext(carContext)
    

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
    
        const  numberWithCommas= (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


      useEffect(() => {
        const interval = setInterval(() => {
            setCountdown()
        
        }, 1000);
        return () => clearInterval(interval);
      }, [setCountdown]);
      

     return( 
        
      
         <div class="col-3 carcontainer">
             <img class="carimage"src={props.props.imgURL}/>
            <h4>{props.props.title}</h4>
            <p className="descriptiontext">{props.props.description}</p>
            <br></br>
             
            <Link to="/cardetails"><a className="viewmorebtn"><button onClick={()=>{carid(props.props)}} type="button" class="detailsbtn btn btn-secondary">Details</button></a></Link>
             
             <p className="locationtext">{props.props.location}</p>
            <div className="countdownbox"><FontAwesomeIcon icon="dollar-sign" /> {numberWithCommas(props.props.highest_bid)}<FontAwesomeIcon className="dollarsign"icon="clock"/> {time.days}d {time.hours}h {time.mins}m {time.seconds}s </div>
            
            
         </div>
                 
      
         
                 
     )
} 
export default Carcontainer