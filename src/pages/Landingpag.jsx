import React from 'react'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'
import Section7 from '../Components/Section7'
import Section8 from '../Components/Section8'

const Landingpag = ({rates}) => {
  return (
    <div>
      <Section1/>
      <Section2 newRate={rates} />
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>  
      
    </div>
  )
}

export default Landingpag