
import React, { useState } from 'react'
import './Value.css'

const Accordions = ({question, answer}) => {
    const [show, setShow] = useState(false);
  return (
    <>
   <div className='accordionItem'>
   <div className='main-heading accordionButton '>
      <h3>{question}</h3>
      <p className='icon' onClick={()=> setShow(!show)}>{show? '-': '+'}</p>
    </div>
    <div className='accordion__panel'>
    {show && <p className='secondaryText'>{answer}</p>}
    </div>
   </div>
    </>
  )
}

export default Accordions
