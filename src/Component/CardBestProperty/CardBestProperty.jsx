import React from 'react'
import './CardBestProperty.css'

const CardBestProperty = (props) => {
  return (
    <div className={props.className}>
      <div className='CardBestPropertyimg'><img src={props.imgSrc} alt={props.imgAlt} /></div>
      <div className='CardBestPropertyRoom CardBestPropertyTitle'>
        <p className='typeRoom CardBestPropertyTitlep'>{props.TypeRoom}</p>
        <p className='priceRoom CardBestPropertyTitlep'>{props.PriceRoom}</p>
      </div>
       <h2 className='DescriptionRoom'>{props.DescriptionRoom}</h2>
      <div className='Desc'>
        <div className='OneDes'> 
          <p className=' size bedrooms'>Bedrooms : <span className=' weight numberBedrooms'>{props.NumberBedrooms}</span></p>
          <p className=' size area'>Area : <span className=' weight areaSpan'> {props.Area} </span></p>
          <p className=' size parking'>Parking : <span className=' weight parkingSpan'>{props.parking} </span></p>
       </div>
        <div  className='TwoDes'>
            <p className=' size bathrooms'> Bathrooms : <span className=' weight bathroomsSpan'>{props.Bathrooms} </span></p>
            <p className=' size area floor'> Floor :  <span className=' weight floorSpan'>{props.Floor}</span></p>
        </div>
      </div>
      <div className=' SchedualDiv'>
        <button className='Schedual btnSchedule'>Schedule a visit</button>
     </div>
    </div>
  )
}

export default CardBestProperty