import React, { useState } from 'react';
import "./stylesheet.css"
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API"
import { GoogleLogin } from 'react-google-login';


function SignUp(){

    const [state,setState]=useState({
        name:"",
        email:"",
        password:"",
        password2:"",
      });

      const onChange = e => {
        setState({...state,[e.target.id]: e.target.value });
      };

    const [nameError,setNameError]=useState({
        nameError:""
    });

    const [emailError,setEmailError]=useState({
        emailError:""
    });

    const [passwordError,setPasswordError]=useState({
        passwordError:""
    });
      
  const onSubmit = e => {
     e.preventDefault();

        setNameError({});
        setEmailError({});
        setPasswordError({})

        const userData = {
            name: state.name,
            email: state.email,
            password: state.password,
            password2:state.password2
        };

        API.postRegister(userData).then(res =>{
            if (res.status==203){
                if (res.data.name){                  
                    setNameError({nameError:res.data.name})
                };
                if (res.data.email){
                    setEmailError({emailError:res.data.email})                  
                };
                if (res.data.password){
                    setPasswordError({passwordError:res.data.password})
                }
                if (res.data.password2){
                    setPasswordError({passwordError:res.data.password2})
                }  
            }

            

        })
    }

    const responseGoogle = (response) => {
        console.log(response);
      }

    return(
        <div>
           
            
            <form action="/signup/" class="form-signup">
            <p class="newcarbids" >New to Carbids? Sign up Here!</p>
            <div class="social-login">
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
            
            <p> OR</p>

            <input onChange={onChange} type="text" id="name" class="form-control" placeholder="Full name" required="" autofocus=""/>
            <p class="warninglabel"> {nameError.nameError}</p>
            <input onChange={onChange} type="email" id="email" class="form-control" placeholder="Email address" required autofocus=""/>
            <p class="warninglabel"> {emailError.emailError}</p>
            <input onChange={onChange} type="password" id="password" class="form-control" placeholder="Password" required autofocus=""/>
            <input onChange={onChange} type="password" id="password2" class="form-control" placeholder="Repeat Password" required autofocus=""/>
            <p class="warninglabel"> {passwordError.passwordError}</p>

            <button onClick={onSubmit} class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
            <Link to="/signin"><a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a> </Link>
            </form>
            <br></br>
        </div>
    )
};

export default SignUp

