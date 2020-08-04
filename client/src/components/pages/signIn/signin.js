import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


function SignIn(){ 
    const responseGoogle = (response) => {
        console.log(response);
      }

  return(
    
    <div>
        <GoogleLogin
    clientId="839892437797-0o8uo79prti7qo2kaokogj3gdh76v6ki.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default SignIn