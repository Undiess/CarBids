import Carinfo from './carinfo.js'
import React, { useState, useEffect } from 'react';

function CarDetails(){
    const [cardetails,setcardetails]= useState({})
    useEffect(()=>{ 
    const carinfo = localStorage.getItem("carinfo")
    const info= JSON.parse(carinfo)
    setcardetails(info)
    console.log(cardetails)
    },[])
     return(
    <Carinfo props={cardetails}/>
     )
};
export default CarDetails;