import React, { useState } from 'react'
import Room from './../../assets/images/featured.jpg'
import RoomIcon from './../../assets/images/featured-icon.png'
import IconeOne from './../../assets/images/info-icon-01.png'
import IconeTwo from './../../assets/images/info-icon-02.png'
import IconeThree from './../../assets/images/info-icon-03.png'
import IconeFour from './../../assets/images/info-icon-04.png'
import './BestAppartment.css'
import CardBestAppartment from '../CardBestAppertment/CardBestAppartment'
import Title from '../Title/Title'
import Okordione from '../Okordione/Okordione'



const BestAppartment = () => {
    const[toggle,setToggle]=useState('false')
    const[currentEdit,setCurrentEdit]=useState();
    function handleOkordion(index){
      setCurrentEdit(index)
       setToggle(!toggle)
       
    }
    const dataCardBestAppartment=[
    {img:IconeOne,
    infoTitle:'250 m2',
    infoPar:'Total Flat Space'
    },
    {img:IconeTwo,
    infoTitle:'Contract',
    infoPar:'Contract Ready'
    },  
    {img:IconeThree,
    infoTitle:'Payment',
    infoPar:'Payment',
    title:"Process"
    },  
    {img:IconeFour,
    infoTitle:'Safety',
    infoPar:'24/7 Under',
    title:"Control"
    },]
    const dataOkordione=[
        { id:1,
          Quetion:'Best useful links?',
          ParagrafOk:"Get ",
          ParagrafOk1:" website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the ",
          ParagrafOk2:" in the world Please tell your friends about it. ",
          spanParagrafOk:"the best villa",
          spanParagrafOk1:"best free CSS templates",
          className:"best bestQu"
        },
        { id:2,
          Quetion:'How does this work?',
          ParagrafOk:"Get ",
          ParagrafOk1:" website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the ",
          ParagrafOk2:" in the world Please tell your friends about it. ",
          spanParagrafOk:"the best villa",
          spanParagrafOk1:"best free CSS templates",
          className:"best  bestParag"
        },
        { id:3,
          Quetion:'Why is Villa Agency the best?',
          ParagrafOk:"Get ",
          ParagrafOk1:" website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the ",
          ParagrafOk2:" in the world Please tell your friends about it. ",
          spanParagrafOk:"the best villa",
          spanParagrafOk1:"best free CSS templates",
          className:"best "
        }]
  return (
   <div className='BestAppartment container' id='BestAppartment'>
        <div className='Room'>
          <img src={Room} alt="Room" className='RoomImg' />
           <div className='DivRoomIcon'>
            <img src={RoomIcon} alt="RoomIcon" className='RoomIcon' />
            </div>
        </div>
      
        <div className='View'>
          <Title TitleP='FEATURED' TitleH1='Best Appartment & Sea View' classNamep='TitleP' classNameh='Titleh1'/>
          
            <div className='Best'> 
            {dataOkordione.map((item,id)=>{
               return<>
              <Okordione key={id} className={item.className} Quetion={item.Quetion} ParagrafOk={item.ParagrafOk} ParagrafOk1={item.ParagrafOk1} ParagrafOk2={item.ParagrafOk2} id={item.id} spanParagrafOk={item.spanParagrafOk} spanParagrafOk1={item.spanParagrafOk1}/>
               </>
              })}
               
            </div>
        </div>
        <div className='features'>
            {dataCardBestAppartment.map((element,id)=>{
            return<>
            <CardBestAppartment key={id} img={element.img} infoTitle={element.infoPar} infoPar={element.infoTitle} title={element.title} />
            </>})}
    
        </div>
      
      </div>
  
  )
}

export default BestAppartment
