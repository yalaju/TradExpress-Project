import React, { useRef } from 'react'
import { useState } from 'react'
import img1 from "../Images/Sec2img1.png"
import img2 from "../Images/Sec2img2.png"
import img3 from "../Images/Sec2img3.png"
import "../Styles/Section3.css"



const Section3 = () => {
    const [data, setData] = useState('See Less')
    const ref1 = useRef()
  return (
    <div className='Sec3body'>
        <h4>
            Why do people get involved with Cryptocurrencies? 
        </h4>
        <div className='sec3btn'>
            <div>
            <button onClick={()=>{
                if (ref1.current.classList.contains('active')){
                    ref1.current.classList.remove('active')
                    setData('See Less')
                }
                else{
                    ref1.current.classList.add('active')
                    setData('See More')
                }
            }}>
                {data}
            </button>
            </div>
            <div ref={ref1} className='sec3btnjj'>
                {/*<div> */}
                    <img src={img1} alt=""/>
                {/* </div>
                <div> */}
                    <img src={img2} alt=""/>
                {/* </div>
                <div> */}
                    <img src={img3} alt=""/>
                {/* </div> */}
            </div>  
        </div>
    </div>
  )
}

export default Section3