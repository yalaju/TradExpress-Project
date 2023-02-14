import React from 'react'
import "../Styles/Section6.css"
import sec6img1 from "../Images/Group 203.png"
import sec6img2 from "../Images/Group 204.png"
import sec6img3 from "../Images/Group 205.png"
const Section6 = () => {
  return (
    <div className='Sec6body'>
        <h4>
          Customer's Review
        </h4>
        <div className='sec3btnjj'>
            <img src={sec6img1} alt="" />
            <img src={sec6img2} alt="" />
            <img src={sec6img3} alt="" />
        </div>

    </div>
  )
}

export default Section6