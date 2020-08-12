import React from "react"
import { Link } from "react-router-dom";

function Footer(){
return(
   
<footer className="page-footer font-small unique-color-dark">

  <div className="footerbc">
    <div className="container">

   
      <div className="row py-4 d-flex align-items-center">

    
        <div className="col-md-1 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0"></h6>
        </div>
       
      </div>
    

    </div>
  </div>

  
  <div className="container text-center text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">

     
        <Link to="/"><h6 className="text-uppercase linkfooter font-weight-bold">home</h6></Link>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
      </div>
  
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">

      <Link to="/"><h6 className="text-uppercase linkfooter font-weight-bold">Sell My Car</h6></Link>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
    

      </div>
   

     
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">

       
      <Link to="/"><h6 className="text-uppercase linkfooter font-weight-bold">About CarBids</h6></Link>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"style= {{width: "60px;"}}/>


      </div>
    

 
     

    </div>
   

  </div>

</footer>
)}

export default Footer