import Carinfo from './carinfo.js'
import React, { useState, useEffect } from 'react';
import API from '../../utils/API.js';

function CarDetails(){
    const [cardetails,setcardetails]= useState({})
    useEffect(()=>{ 
        const carinfo = localStorage.getItem("carinfo")
        const info= JSON.parse(carinfo)
        const id = info._id;
        console.log("hi")
        console.log(id)
        API.getCarInfo(id)
        .then(resp=>{
            console.log(resp)
           setcardetails(resp.data)
        })
        .catch(
            console.log("didnt work")
        )
        
    
   
    },[])
     return(
    <Carinfo props={cardetails}/>
     )
};
export default CarDetails;