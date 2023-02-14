import React from 'react'
import "../Styles/Getstarted2.css"
import { Link } from 'react-router-dom'

const Getstarted2 = () => {
  return (
    <div className='Get2body'>
      <form className='get2'>
        <h1>Welcome</h1>
        <div className='individual'>
          <Link className='indbus2' to='/getstarted1'>
           individual
          </Link>  

          <div className='individual2' >
            <p>
             Business
            </p>
          </div>
           
        </div>
        
        <input className='getinput2' placeholder='username' type="text" />
        
        <input className='getinput2' placeholder=' Business Name' type="text" />
        
        <input className='getinput2' placeholder='Email' type="text" />
        
        <input className='getinput2' placeholder='Phone Number' type="number" />
        
        <input className='getinput2' placeholder='Referral Code (optional)' type="password" />
        <div className='gt2mreq'>
            <h6>By clicking the up button below, you agree to TradExpress </h6>
            <h5>terms and service</h5>
        </div>
        <Link className='get2log' to='/login'>
         Log in
        </Link>
        <div className='get2nav'>
            <h6>Already have an account?</h6>
            <h5>Click here</h5>
        </div>
      </form>
    </div>
  )
}

export default Getstarted2