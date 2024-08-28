import React, { useState } from 'react'
import Sea from './../../assets/images/banner-01.jpg'
import Vella from './../../assets/images/banner-02.jpg'
import VellaSea from './../../assets/images/banner-03.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
const Hero = () => {
    const [slide,setSlide]=useState(0)
    const nextSlide =()=>{
        setSlide( slide === Slider.length-1?0:slide+1)
    }
    const preSlide =()=>{
        setSlide( slide === 0 ? Slider.length-1:slide-1)
    }
    const Slider=[
        {images:Sea,
        className:'Slider-one'
        },
        {images:Vella,
        className:'Slider-two'
        },
        {images:VellaSea,
        className:'Slider-three'
        }
]
  return (
    <>
  <div className='hero' >
  <div className='Slider' id='Home'>
    <div className='SliderIcon center left-icon' onClick={preSlide}>
    <FontAwesomeIcon className='left-icon' icon={faChevronLeft}   />
    </div>
    {Slider.map((item,id)=>{
        return<>
        <img className={slide === id ?'slide':'slide slide-hidden'} src={item.images} alt="pages" key={id} />
         <p className={slide === id ?'Paragraf':'Paragraf slide-hidden'} >Toronto ,  <span className='Canada'> Canada</span></p>
         <h1 className={slide === id ?'TitleHero':'TitleHero slide-hidden'}>HURRY! GET THE BEST VILLA FOR YOU </h1>
        </>
        })}
    <div className='SliderIcon Right-icon center' onClick={nextSlide}>
   <FontAwesomeIcon className='Right-icon' icon={faChevronRight}   />
   </div>
   <span className='indicators'>
    {Slider.map((_,id)=>{return<button key={id} className={slide === id ? 'indicator':'indicator indicator-inactive'} ></button>})}
   </span>
    </div>
  </div>
    </>
  )
}

export default Hero