import React, {useEffect, useState } from "react"
import "./stylesheet.css"
import moment, {duration} from 'moment'

function Carcontainer(props){
    
    
    

    const [time, setTime] = useState([]);

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
        
             
         <div class="col-3 carcontainer">
             <img class="carimage"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2004_Nissan_350Z_3.5_Front.jpg/280px-2004_Nissan_350Z_3.5_Front.jpg"/>
            <h5>{props.props.title}</h5>
            <p>{props.props.description}</p>
            <h1>{time.days}</h1>
            
            
         </div>
                 
             
         
         
     )
} 
export default Carcontainer