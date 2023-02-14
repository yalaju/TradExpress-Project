import React from 'react'
import "../Styles/Login.css"

const Login = () => {
  return (
    <div className='formbody'>
        <form className='form'>
            <h1>Welcome Back</h1>
            <input placeholder='username' type="text" />
            {/* <br/>
            <br/> */}
            <input placeholder='password' type="password" />
            <div className='formreq'>
                <h6>Remember Password</h6>
                <h5>Forgot Password?</h5>
            </div>
            <button>Log in</button>
            <div className='formnav'>
                <h6>New User?</h6>
                <h5>Click here</h5>
            </div>
        </form>
    </div>
  )
}

export default Login