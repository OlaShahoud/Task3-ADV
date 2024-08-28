import React from 'react'
import './ContactMe.css'
const ContactMe = ({imgSrc,altImg,ConNumber,ConPar,className }) => {
  return (
    <div className={className}> 
    <img src={imgSrc} alt={altImg} />
      <div className='ContactMeTwo'> 
      <p className='ConNumber'>{ConNumber}</p>
      <p className='ConPar'> {ConPar}</p>
      </div>
</div>
  )
}

export default ContactMe
