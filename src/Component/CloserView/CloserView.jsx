import React from 'react'
import Background from './../../assets/images/img.jpg'
import imgVideo from './../../assets/images/video-frame.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPlay} from '@fortawesome/free-solid-svg-icons'
import './CloserView.css'


const CloserView = () => {
    const data=[
        { number:'34',
          paragraf:'Buildings ',
          paragraf1:'Finished Now',
          className:' DetailsCard DetailsCard1'
         
        },
        {
          number:'12',
          paragraf:'Years',
          paragraf1:'Experience',
          className:' DetailsCard DetailsCard2'
         
        },
        {
          number:'24',
          paragraf:'awwards',
          paragraf1:'Won 2023',
          className:' DetailsCard DetailsCard3'
       
        }]
  return (
    <div className='PropertyDetails' id='PropertyDetails'>
    <div className='imgProDetials'>
    <img src={Background} alt="img" className='imgPropereties' />
    <div className='proDetailsTitle'>
    
      <p className='proDetailsPar'>VIDEO VIEW</p>
      <h1 className='proDetailsH1'>Get Closer View & Different Feeling</h1>
    </div>
    <div className='divImgVideo'>
    <img src={imgVideo} alt="Video" />
    <div className='FaCirclePlay'>
    <FontAwesomeIcon   icon= {faPlay} />
    </div>
    </div>
    </div>
    <div className='DetailsAllCard'>
      {data.map((item,id)=>{
        return(
          <div className={item.className} key={id}>
          <h1 className='DetailsCardNumber'>{item.number}</h1>
          <div className='devDetailsCardParagraf'>
          <p className='DetailsCardParagraf'>{item.paragraf}</p>
          <p className='DetailsCardParagraf1'>{item.paragraf1}</p>
          </div>
          <div className='FaCilcle'> <FontAwesomeIcon   icon= {faCircle} /></div>
          </div>
      )
       
      })}
    </div>
</div>
  )
}

export default CloserView
