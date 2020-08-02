import React, { useState ,useEffect} from "react"
import API from "../../utils/API.js";
import Carcontainer from "./carcontainer"
import "./stylesheet.css"


function CarDisplay(){
    
    const [state,setCars] = useState([]);

    const getData =() =>{
      API.getCars()
      .then(res => {
        setCars(res.data)
      })
      .catch(err => console.log(err));
    }

      useEffect(() => {
        getData();
      }, []);

     return( 
         <div >
           <div class="displaycontainer ">
                <div class="row">
                {state.map(car =>(
                  <Carcontainer props={car}/>
                ))}
                </div>
          
           </div>
        
            
         </div>
     )
} 
export default CarDisplay