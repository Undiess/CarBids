import React from "react"
import carContext from '../../utils/carContext'
import Carinfo from './carinfo.js'


function CarDetails(){
   
     return(
         <carContext.Consumer>
             {car => (
                 <Carinfo props ={car}/>
             )}



         </carContext.Consumer>
         
     )
};
export default CarDetails;