import React from 'react'
import "../Styles/Getstarted1.css"
import { Link } from 'react-router-dom'

const Getstarted1 = () => {
  return (
    <div className='Get1body'>
      <form className='get1'>
        <h1>Welcome</h1>
        <div className='individual'>
          <div className='individual1' >
            <p>
              Individual
            </p>
          </div >
          <Link className='indbus' to='/getstarted2'>
            Business
          </Link>          
        </div>
        
        <input className='getinput' placeholder='username' type="text" />
        
        <input className='getinput' placeholder='Full Name' type="text" />
        
        <input className='getinput' placeholder='Email' type="text" />
        
        <input className='getinput' placeholder='Phone Number' type="number" />
        
        <input className='getinput' placeholder='Referral Code (optional)' type="password" />
        <div className='gt1mreq'>
            <h6>By clicking the up button below, you agree to TradExpress </h6>
            <h5>terms and service</h5>
        </div>
        <Link className='getlog' to='/login'>
         Log in
        </Link>
        <div className='get1nav'>
            <h6>Already have an account?</h6>
            <h5>Click here</h5>
        </div>
      </form>
    </div>
  )
}

export default Getstarted1