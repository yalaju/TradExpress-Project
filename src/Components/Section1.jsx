import React from 'react'
import "../Styles/Section1.css"
import fleximg1 from "../Images/Sec1imgflex1.png"
import fleximg2 from "../Images/Sec1imgflex.png"
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <div className='sec1body'>
        <div className='sec1content'>
            <h4>
                Buy,Sell And Manage your <br />
                Crypto on TradExpress.
            </h4>
            <br />
            <p>Easily Trade Cryptocurrencies Like BTC, USDT, ETH, LTC <br />
                & XRP With NGN.
            </p>
            <Link className='sec1btnn' to='/login' >
                Get Started
            </Link>
            <div className='sec1flex'>
                <div>
                    <img src={fleximg1} alt="" />
                </div>
                <div>
                    <img src={fleximg2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1