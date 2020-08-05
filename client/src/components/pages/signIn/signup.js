import React, { useState } from 'react';
import "./stylesheet.css"
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API"


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


    return(
        <div>
            <form action="/signup/" class="form-signup">
            <div class="social-login">
                <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
            </div>
            <div class="social-login">
                <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
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

