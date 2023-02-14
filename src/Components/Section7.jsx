import React from 'react'
import "../Styles/Section7.css"
import img1 from "../Images/Fut1.png"
import img2 from "../Images/Fut2.png"
import img3 from "../Images/Fut3.png"
import img4 from "../Images/Fut4.png"
import img5 from "../Images/Fut5.png"
import img6 from "../Images/social.png"

function Section7() {
  return (
      <div className='futter'>

        <div className='fut1'>
          <p><b>products</b></p>
          <p>Alt</p>
          <p>Fiat</p>
          <p>Refill</p>
          <p>P2P</p>
        </div>

        <div className='fut2'>
          <p><b>Learn</b></p>
          <p>Blog</p>
          <p>Help Center</p>
        </div>

        <div className='fut3'>
          <p><b>Contact</b></p>
          <p>hello@tradexpress.com</p>
          <p>support@tradexpress.com</p>
          <img src={img6} alt="" />
        </div>

        <div className='fut4'>
          <p><b>Company</b></p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>
        
        <div className='fut5'>
          <p><b>Legal</b></p>
          <p>Privacy Policy</p>
          <p>Anti-Money Laundering</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
        
  )
}

export default Section7