import React from 'react'
// import firebase from './auth/config'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'

function Login() {

    const history=useHistory()
   const loginSuccess=(response)=>{
    
    console.log(response)
       history.push('/homepage')
   }
   const loginFailure=(response)=>{
       console.log(response)
       alert('Some Error')
   }
    return (
      
         <center>
         <h1>Google Login</h1>
            
            <GoogleLogin
            clientId="969612057847-6tvca3nmlnh6omihkf2ajpo9s48phepg.apps.googleusercontent.com"      
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            cookiePolicy={'single_host_origin'}
        
            />
         </center>

    )
}

export default Login
