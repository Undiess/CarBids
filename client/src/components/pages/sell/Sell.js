import React,{useState} from "react";
import background from "./longgtr.jpg";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import "./stylesheet.css"

import API from "../../utils/API"




function SellmyCar (){

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );

     const [state,setState]=useState({});

      const onChange = e => {
        setState({...state,[e.target.id]: e.target.value });
      };

    const submit=()=>{
        const rego = {"rego":state.rego,"State":state.State}
        console.log(rego)
        // API.regoInfo(rego).then(res=>{ 
        //     console.log(res.data)
        // })
        const data = {state,startDate}
        API.postinfo(data).then(res=>{
            console.log(res)
        })
        
    }


return(

    <div>
        <div className="imgdiv" > <img className="backgroundgtr"src={background}></img></div>
        <div> <h3 className="sellmycartxt">SELL YOUR CAR</h3></div>
        

        <div className="container carsellinfo">

            <form className="well form-horizontal" action=" " method="post"  id="contact_form"/>
            <fieldset/>

            
            <legend><center><h2><b>Car Details</b></h2></center></legend><br/>


            <div className="form-group">
            <label className="col-md-4 control-label">Car Brand/Model</label>  
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <input  onChange={onChange} id="title" placeholder=" Car Brand/Model" className="form-control"  type="text"/>
            </div>
            </div>
            </div>

            


            <div className="form-group">
            <label className="col-md-4 control-label">Registration Number</label>  
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">

            <input  onChange={onChange} id="rego" placeholder="Registration Number" className="form-control"  type="text"/>

            <input  name="rego" placeholder="Registration Number" className="form-control"  type="text"/>

            </div>
            </div>
            </div>


            <div className="form-group"> 
            <label className="col-md-4 control-label">State Registered </label>
            <div className="col-md-4 selectContainer inputGroupContainer">
            <div className="input-group ">
               
            <select onChange={onChange} id="State" className="form-control selectpicker">
            <option value="">State Registered</option>
            <option>SA </option>
            <option>QLD </option>
            <option>WA</option>
            <option>VIC </option>
            <option>NSW </option>
            <option>ACT </option>
            <option>TAS </option>
            </select>
            </div>
            </div>
            </div>

            


            <div className="form-group">
            <label className="col-md-4 control-label" >Kilometers</label> 
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>

            <input onChange={onChange} id="km" placeholder="Kilometers" className="form-control"  type="text"/>

            <input name="km" placeholder="Kilometers" className="form-control"  type="text"/>

            </div>
            </div>
            </div>

            <div className="form-group"> 
            <label className="col-md-4 control-label">Transmission </label>
            <div className="col-md-4 selectContainer inputGroupContainer">
            <div className="input-group ">
               

            <select onChange={onChange} id="transmission" className="form-control selectpicker">

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
               
            <select onChange={onChange} id="Drivetrain" className="form-control selectpicker">
            <option value="">Select Drive Train</option>
            <option>RWD </option>
            <option>FWD </option>
            <option>4WD )</option>
            <option>AWD </option>

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
            <input onChange={onChange} id="Engine" placeholder="Engine" className="form-control"  type="text"/>

            <input name="Engine" placeholder="Engine" className="form-control"  type="text"/>
            </div>
            </div>
            </div>

            
            <div className="form-group">
            <label className="col-md-4 control-label">Image URL </label>  
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
          
 
            <input onChange={onChange} id="URL" placeholder="Image URL" className="form-control"  type="text"/>

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
               

            <select onChange={onChange} id="Body" className="form-control selectpicker">

            <select name="department" className="form-control selectpicker">
-         <option value="">Select Body Type</option>
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
                className ="datetime"
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

            <input onChange={onChange} id="minprice" placeholder="Price" className="form-control"  type="text"/>

            <input name="minprice" placeholder="Price" className="form-control"  type="text"/>

            </div>
            </div>
            </div>


            <div className="form-group">
                <div> Short Description (max 120 characters)</div>
                <div className=" col-md-6 control-label inputGroupContainer">
                

                <textarea onChange={onChange} id="description"className="form-control" maxlength= "120"aria-label="With textarea"></textarea>

                <textarea className="form-control" maxlength= "120"aria-label="With textarea"></textarea>

                </div>
            </div>

            <div className="form-group">
                <div> Car Overview</div>
                <div className=" col-md-6 control-label inputGroupContainer">

                <textarea onChange={onChange} id="overview"className="form-control " aria-label="With textarea"></textarea>
                </div>
            </div>

            <div className="btncontainersell">  <button onClick={submit}className="sellcarbtn btn btn-outline-secondary my-2 my-sm-0" type="submit">Submit</button></div>
          

                <textarea className="form-control " aria-label="With textarea"></textarea>
                </div>
            </div>

    
           
    
            </div>
            </div>
)
           



   

    

}

export default SellmyCar