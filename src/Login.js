import React from 'react'
// import firebase from './auth/config'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'

function Login() {

    const history=useHistory()
   const loginSuccess=(response)=>{
    
       history.push('/homepage')
   }
   const loginFailure=()=>{
       alert('Some Error')
   }
    return (
      
         <center>
         <h1>Google Login</h1>
            
            <GoogleLogin
            clientId="674937423242-rn4d54buti5q7kv5ckpu4hrp97unf8be.apps.googleusercontent.com"      
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            cookiePolicy={'single_host_origin'}
        
            />
         </center>

    )
}

export default Login
