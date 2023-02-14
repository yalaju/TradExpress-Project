import React from 'react'
import "../Styles/Section4.css"
import img1 from "../Images/Section4num1img.png"
import img3 from "../Images/Sec4img1.png"
import img6 from "../Images/Sec4num2img1.png"
import img7 from "../Images/Sec4num2img2.png"
import img8 from "../Images/emojione-monotone_keycap-3.png"
import img9 from "../Images/cuate.png"

const Section4 = () => {
  return (
    <div className='Sec4body'>
      <h4>
        Buy and Sell your Cryptocurrency in 3 simple steps
      </h4>
      <h6>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Est lectus faucibus et nunc 
        id sollicitudin pretium nulla. Et nunc tempus 
        mauris ullamcorper mauris, rhoncus sed magna. 
        Eu consectetur nulla aliquam consectetur lectus. 
        Rutrum feugiat et, tellus mattis donec et odio 
        molestie amet.
      </h6>
      <div className='first'>
        <div className='Sec4pat1'>
          <div className='img1img'>
            <img src={img1} alt="" id="" />
          </div>
          <div className='pat1text'>
            <h1>
              Create a free Account           
            </h1>
            <p>
            Sign up for your free
            TradExpress Wallet on web, iOS,
            or Android devices and follow our
            easy process to set up your profile.
            </p>
          </div>
        </div>
          <img className='bigimg1' src={img3} alt="" />
      </div>



      <div className='second'>
          <img className='pat2img' src={img6} alt="" />
        <div className='Sec4pat2'>
          <div className='img2img'>
            <img src={img7} alt="" id="" />
          </div>
          <div className='pat2text'>
            <h1>
              Create a free Account           
            </h1>
            <p>
            Sign up for your free
            TradExpress Wallet on web, iOS,
            or Android devices and follow our
            easy process to set up your profile.
            </p>
          </div>
        </div>
      </div>


      <div className='threed'>
        <div className='Sec4pat3'>
          <div className='img3img'>
            <img src={img8} alt="" id="" />
          </div>
          <div className='pat3text'>
            <h1>
              Buy/ Sell Crypto           
            </h1>
            <p>
            Sign up for your free 
            TradExpress Wallet on web, iOS,
            or Android devices and follow our
            easy process to set up your profile.
            </p>
          </div>
        </div>
          <img className='bigimg3' src={img9} alt="" />
      </div>
      

    
    </div>
  )
}

export default Section4