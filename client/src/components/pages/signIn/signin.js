import React, {useEffect, useState, useContext } from "react"
import "./stylesheet.css"
import API from "../../utils/API"
import { Link } from "react-router-dom";
import loggedContext from "../../utils/loggedContext"
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";

function SignIn(){ 
  
  const [state,setState]=useState({
    email:"",
    password:"",
 
  });

  const [passwordError,setPasswordError]=useState({
    passwordError:""
});

const [emailError,setEmailError]=useState({
    emailError:""
});

  const onChange = e => {
    setState({...state,[e.target.id]: e.target.value });
  };

  const [loggedin,setLogin] = useContext(loggedContext)

  const history = useHistory();
  const onSubmit = e => {
    e.preventDefault();

    setEmailError({});
    setPasswordError({});

    const userData = {
      email: state.email,
      password: state.password
    };
    console.log(userData)
    API.postSignIn(userData)
    .then(res=>{
      console.log(res)
    if(res.status===203){
      console.log(res)
      if (res.data.emailnotfound){
          setEmailError({emailError:res.data.emailnotfound})
          
      };
      if (res.data.passwordincorrect){
        setPasswordError({passwordError:res.data.passwordincorrect})
      }
    }
    
    else{
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
       setAuthToken(token);
      // Decode token to get user data
        const decoded = jwt_decode(token);
      // Set current user
        setLogin({decoded})
        console.log(loggedin)
        
        history.push({pathname:"/"})
        window.location.reload(false)
    }
   })
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
              <p class="warninglabel"> {emailError.emailError}</p>
              <input onChange={onChange} value={state.password} type="password" id="password" class="form-control" placeholder="Password" required=""/>
              <p class="warninglabel"> {passwordError.passwordError}</p>
              
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