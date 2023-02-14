import React from 'react'
import '../Styles/Section5.css'
import sec5img from "../Images/Group 201.png"


const Section5 = () => {
  return (
    <div className='Sec5body'>
        <h5>
            Ready to trade Buy/Sell cryptocurrencies
            in just 10 minutes?
        </h5>
        <h3>
            Create your account for free
            and start trading today!
        </h3>
        <div>
            <button>
                Get Started
            </button>
        </div>
        {/* <div className='sec5img'> */}
            <img src={sec5img} alt="" />
        {/* </div> */}
    </div>
  )
}

export default Section5