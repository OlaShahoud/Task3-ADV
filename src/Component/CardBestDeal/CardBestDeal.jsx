import React from 'react'
import './CardBestDeal.css'
const CardBestDeal = (props) => {
  return (
    <div className='CardBestDeal'>
        <p className='CardBestDealParagraf'>{props.infoPar}</p>
        <h2 className='CardBestDealTitle'>{props.infoTitle}</h2>
    </div>
  )
}

export default CardBestDeal