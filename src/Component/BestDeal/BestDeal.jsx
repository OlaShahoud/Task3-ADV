import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar } from '@fortawesome/free-solid-svg-icons'
import imgBestDeal from './../../assets/images/deal-01.jpg'
import imgBestDeal2 from './../../assets/images/deal-02.jpg'
import imgBestDeal3 from './../../assets/images/deal-03.jpg'

import './BestDeal.css'

import CardBestDeal from '../CardBestDeal/CardBestDeal'
const BestDeal = () => {
    const [isactivebtn1,setIsactivebtn1]=useState(false);
    const [isactivebtn2,setIsactivebtn2]=useState(false);
    const [isactivebtn3,setIsactivebtn3]=useState(false);
    function handlebtn1(){
        setIsactivebtn1(true)
        setIsactivebtn2(false)
        setIsactivebtn3(false)
}
function handlebtn2(){
    setIsactivebtn2(true)
    setIsactivebtn1(false)
    setIsactivebtn3(false)
}
function handlebtn3(){
    setIsactivebtn3(true)
    setIsactivebtn2(false)
    setIsactivebtn1(false)
}
    const dataBestDeal=[
    {infoPar:'TotalFlat Space',
    infoTitle:' 185m2'
    },
    {infoPar:'Floor number',
     infoTitle:' 26th'
    },
    {infoPar:'Number of rooms',
     infoTitle:' 4'
    },
    {infoPar:'Parking Available' ,
    infoTitle:' Yes'
    },
    {infoPar:'Payment Process', 
    infoTitle:' Bank'
    },]
    const villaHouse=[
        {infoPar:'Total Flat Space',
        infoTitle:' 250 m2'
        },
        {infoPar:'Floor number',
         infoTitle:' 26th'
        },
        {infoPar:'Number of rooms',
         infoTitle:' 5'
        },
        {infoPar:'Parking Available' ,
        infoTitle:' Yes'
        },
        {infoPar:'Payment Process', 
        infoTitle:' Bank'
        },]
        const pintHouse=[
            {infoPar:'Total Flat Space',
            infoTitle:'320 m2'
            },
            {infoPar:'Floor number',
             infoTitle:'34th'
            },
            {infoPar:'Number of rooms',
             infoTitle:'6'
            },
            {infoPar:'Parking Available' ,
            infoTitle:' Yes'
            },
            {infoPar:'Payment Process', 
            infoTitle:' Bank'
            },]
  return (
    <>
    <div className='BestDeal '>
        <div className='BestDealOne'>
            <div className='BestDealOneTitle'>
            <p  className='BestDealOneTitleP'> BEST DEAL</p>
            <h1  className='BestDealOneTitleH1'>
                Find Your Best Deal Right Now!
            </h1>
            </div>
            <div className='BestDealOneAllButton'> 
            <button  className='BestDealOneButton button1' onClick={()=>handlebtn1() }> Appartement</button>
            <button  className='BestDealOneButton button2' onClick={()=>handlebtn2()}>Villa House</button>
            <button  className='BestDealOneButton button3' onClick={()=>handlebtn3()}> Penthouse</button>
            </div>
        </div>
     <div className= {isactivebtn1==true ?'BestDealTwo':'bestParNone'}>
            <div className=' BestDealTwoCard'>
                {dataBestDeal.map((item,id)=>{return<CardBestDeal key={id} infoPar={item.infoPar} infoTitle={item.infoTitle}/>})}
            </div>
            <div className='BestDealTwoImg'> <img src={imgBestDeal} alt="imgBestDeal" /></div>
            <div className='BestDealTwoTitle'>
                <h1 className='BestDealTwoTitleH1'>Extra Info About Property </h1>
                <p className='BestDealTwoTitleP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique earum est architecto dicta id aperiam voluptate tenetur veniam laborum dolorem. Vel doloremque laudantium porro possimus aliquid similique deleniti fuga incidunt.</p>
                <p className='BestDealTwoTitleP'>When you need free CSS templates, you can simply type temlateMo in any search engine website.In addition, you can type TemplateMo Portolio, TemplateMo One Page Layouts,etc.</p>
                <div className='BestDealTwoTitleDiv'>
                <button className='Schedual'>Scheduale a visit
                <div className='FaCalendar center'><FontAwesomeIcon icon={faCalendar} /></div> </button>
                </div>
            </div>
        </div>
        <div className= {isactivebtn2==true ?'BestDealTwo':'bestParNone'}>
            <div className=' BestDealTwoCard'>
                {villaHouse.map((item,id)=>{return<CardBestDeal key={id} infoPar={item.infoPar} infoTitle={item.infoTitle}/>})}
            </div>
            <div className='BestDealTwoImg'> <img src={imgBestDeal2} alt="imgBestDeal" /></div>
            <div className='BestDealTwoTitle'>
                <h1 className='BestDealTwoTitleH1'>Detail info About Villa </h1>
                <p className='BestDealTwoTitleP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique earum est architecto dicta id aperiam voluptate tenetur veniam laborum dolorem. Vel doloremque laudantium porro possimus aliquid similique deleniti fuga incidunt.</p>
                <p className='BestDealTwoTitleP'>When you need free CSS templates, you can simply type temlateMo in any search engine website.In addition, you can type TemplateMo Portolio, TemplateMo One Page Layouts,etc.</p>
                <div className='BestDealTwoTitleDiv'>
                <button className='Schedual'>Scheduale a visit
                <div className='FaCalendar center'><FontAwesomeIcon icon={faCalendar} /></div> </button>
                </div>
            </div>
        </div>
        <div className= {isactivebtn3==true ?'BestDealTwo':'bestParNone'}>
            <div className=' BestDealTwoCard'>
                {pintHouse.map((item,id)=>{return<CardBestDeal key={id} infoPar={item.infoPar} infoTitle={item.infoTitle}/>})}
            </div>
            <div className='BestDealTwoImg'> <img src={imgBestDeal3} alt="imgBestDeal" /></div>
            <div className='BestDealTwoTitle'>
                <h1 className='BestDealTwoTitleH1'>Extra Info About Penthouse </h1>
                <p className='BestDealTwoTitleP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique earum est architecto dicta id aperiam voluptate tenetur veniam laborum dolorem. Vel doloremque laudantium porro possimus aliquid similique deleniti fuga incidunt.</p>
                <p className='BestDealTwoTitleP'>When you need free CSS templates, you can simply type temlateMo in any search engine website.In addition, you can type TemplateMo Portolio, TemplateMo One Page Layouts,etc.</p>
                <div className='BestDealTwoTitleDiv'>
                <button className='Schedual'>Scheduale a visit
                <div className='FaCalendar center'><FontAwesomeIcon icon={faCalendar} /></div> </button>
                </div>
            </div>
        </div>
      
          
       

    </div>
      
    </>
  )
}

export default BestDeal