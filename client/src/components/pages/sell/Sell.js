import React,{useState} from "react";
import background from "./longgtr.jpg";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import "./style.css"


function SellmyCar (){

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );

return(

    <div>
        <div className="imgdiv" > <img classNameName="backgroundgtr"src={background}></img></div>
        <div> <h3 classNameName="sellmycartxt">SELL YOUR CAR</h3></div>
        

        <div className="container carsellinfo">

            <form className="well form-horizontal" action=" " method="post"  id="contact_form"/>
            <fieldset/>

            
            <legend><center><h2><b>Car Details</b></h2></center></legend><br/>

            

            <div className="form-group">
            <label className="col-md-4 control-label">Registration Number</label>  
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <input  name="rego" placeholder="Registration Number" className="form-control"  type="text"/>
            </div>
            </div>
            </div>

            

            <div className="form-group">
            <label className="col-md-4 control-label" >Kilometers</label> 
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input name="km" placeholder="Kilometers" className="form-control"  type="text"/>
            </div>
            </div>
            </div>

            <div className="form-group"> 
            <label className="col-md-4 control-label">Transmission </label>
            <div className="col-md-4 selectContainer inputGroupContainer">
            <div className="input-group ">
               
            <select name="department" className="form-control selectpicker">
            <option value="">Select Transmission</option>
            <option>Automatic</option>
            <option>Manual</option>
           
            </select>
            </div>
            </div>
            </div>

            <div className="form-group"> 
            <label className="col-md-4 control-label">Drive Train </label>
            <div className="col-md-4 selectContainer inputGroupContainer">
            <div className="input-group ">
               
            <select name="department" className="form-control selectpicker">
            <option value="">Select Drive Train</option>
            <option>RWD (Rear Wheel Drive)</option>
            <option>FWD (Front Wheel Drive)</option>
            <option>4WD (4 Wheel Drive)</option>
            <option>AWD (All Wheel Drive)</option>
            </select>
            </div>
            </div>
            </div>

            


            

            <div className="form-group">
            <label className="col-md-4 control-label" >Engine</label> 
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input name="Engine" placeholder="Engine" className="form-control"  type="text"/>
            </div>
            </div>
            </div>

            
            <div className="form-group">
            <label className="col-md-4 control-label">Image URL </label>  
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
          
            <input  name="URL" placeholder="Image URL" className="form-control"  type="text"/>
            </div>
            </div>
            </div>

            <div className="form-group">
            <label className="col-md-4 control-label" >Location</label> 
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input name="location" placeholder="Location" className="form-control"  type="text"/>
            </div>
            </div>
            </div>


            <div className="form-group"> 
            <label className="col-md-4 control-label">Body Type</label>
            <div className="col-md-4 selectContainer inputGroupContainer">
            <div className="input-group ">
               
            <select name="department" className="form-control selectpicker">
            <option value="">Select Body Type</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Coupe</option>
            <option>Convertible</option>
            <option>Wagon</option>
            </select>
            </div>
            </div>
            </div>
        <div>Ending Date/Time</div>
        <br/>
         <DatePicker 
                classNameName ="datetime"
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                minDate={subDays(new Date(),-5 )}
               
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            

            <div className="form-group">
            <label className="col-md-4 control-label" >Minimum Price</label> 
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input name="minprice" placeholder="Price" className="form-control"  type="text"/>
            </div>
            </div>
            </div>


            <div className="form-group">
                <div> Short Description (max 120 characters)</div>
                <div className=" col-md-6 control-label inputGroupContainer">
                
                <textarea className="form-control" maxlength= "120"aria-label="With textarea"></textarea>
                </div>
            </div>

            <div className="form-group">
                <div> Car Overview</div>
                <div className=" col-md-6 control-label inputGroupContainer">
                
                <textarea className="form-control " aria-label="With textarea"></textarea>
                </div>
            </div>

    
           
        
            </div>
            </div>
)
           



   

    

}

export default SellmyCar