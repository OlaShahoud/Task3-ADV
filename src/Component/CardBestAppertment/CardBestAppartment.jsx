import React from 'react'
import'./CardBestAppartment.css'

const CardBestAppartment = (props) => {
  return (
  
    <div className='Card'>
     <div>
      <img src={props.img} alt={props.alt} />
      <p className='paragraf'>{props.title}</p>
      </div>
      <div className='information'>
        <h2 className='informationTitle'>{props.infoTitle}</h2>
        <p className='informationParagraf'>{props.infoPar}</p>
      </div>

    </div>
   
  )
}

export default CardBestAppartment
