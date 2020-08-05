import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import "./stylesheet.css"
import API from "../../utils/API"
import { Link } from "react-router-dom";

function SignIn(){ 
  
  const [state,setState]=useState({
    email:"",
    password:"",
 
  });

  const onChange = e => {
    setState({...state,[e.target.id]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password
    };
    console.log(userData)
    API.postSignIn(userData)
  }

  return(
    
    <div id="logreg-forms ">
      <div class="signin-div">
            <form class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal"> Sign in</h1>
              <div class="social-login">

                  <button className="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
              </div>
              <p > OR  </p>
              <input onChange={onChange} value={state.email} id="email" class="form-control" placeholder="Email address" required="" autofocus=""/>
              <input onChange={onChange} value={state.password} type="password" id="password" class="form-control" placeholder="Password" required=""/>
              
              <button onClick={onSubmit}class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
              <a href="#" id="forgot_pswd">Forgot password?</a>
              
              <p>Don't have an account!</p>  
              <Link to="/signup"><button class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</button></Link> 
          </form>

             
      </div>
        
            
    </div>
  );
}

export default SignIn