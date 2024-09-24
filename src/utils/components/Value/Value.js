import React, { useState } from 'react'
import questions  from "../../Accordion";
import Accordion from './Accordions'
import Accordions from './Accordions';
import Image from "../../../assets/hero-image.png";

const Value = () => {
  const [data, setData] = useState (questions);
  return (
    <div>
     <section className='v-wrapper'>
     <div className='paddings innerWidth flexCenter v-container'>
      <div className='v-left'>
        <div className='image-container'>
          <img src={Image} alt="" />
        </div>
      </div>
     <div className='flexColStart v-right'>
        <span className='orangeText'>Our Value</span>
        <span className='primaryText'>Value We Give to You</span>
        <br />
        {
        data.map((curElem)=>{
          const {id, question, answer } = curElem;
          return <Accordions key={id} {...curElem}/>  
        })
      }
      </div>
      
     </div>
     </section>
    </div>
  )
}

export default Value
