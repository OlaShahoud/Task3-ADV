import React, { useState } from 'react'
import './BodyProprties.css'
import CardImgOne from './../../assets/images/property-01.jpg'
import CardImgTwo from './../../assets/images/property-02.jpg'
import CardImgThree from './../../assets/images/property-03.jpg'
import CardImgFour from './../../assets/images/property-04.jpg'
import CardImgFive from './../../assets/images/property-05.jpg'
import CardImgSix from './../../assets/images/property-06.jpg'
import CardBestProperty from '../CardBestProperty/CardBestProperty'

const BodyProprites = () => {
    const arraybtn=[{name:'Show All'},{name:'Apartment'},{name:'VillaHouse'},{name:'Penthouse'}]
    let dataBestProprty1=[
      {
      className:' CardBestProperty1 CardBestProperty' ,
      imgSrc:CardImgOne,
      imgAlt:'CardImgOne',
      TypeRoom:'Luxury Villa',
      PriceRoom:'$2.264.000',
      DescriptionRoom:'18 New Street Miami,Or 97219',
      NumberBedrooms:'8',
      Area:'545m2',
      parking:'6 spots',
      Bathrooms:'8',
      Floor:'3'  
      },
      {
      className:'CardBestProperty2 CardBestProperty',
      imgSrc:CardImgTwo,
      imgAlt:'CardImgTwo',
      TypeRoom:'Luxury Villa',
      PriceRoom :'$1.180.000',
      DescriptionRoom:'54 Mid Street Florida,Or 27001',
      NumberBedrooms:'6', 
      Area:'450m2',
      parking:'8 spots',
      Bathrooms:'5',
      Floor:'3' 
      },
      {
      className:'CardBestProperty3 CardBestProperty',
      imgSrc:CardImgThree,
      imgAlt:'CardImgThree',
      TypeRoom:'Luxury Villa',
      PriceRoom:'$1.460.000',
      DescriptionRoom:'26 Old Street Miami,Or 38540',
      NumberBedrooms:'5',
      Area:'225m2',
      parking:'10 spots',
      Bathrooms:'4',
      Floor:'3'},      {className:'CardBestProperty4 CardBestProperty',
        imgSrc:CardImgFour,
        imgAlt:'CardImgFour',
        TypeRoom:'Appartment',
        PriceRoom:'$584.000',
        DescriptionRoom:'12 New Street Miami,Or 12650',
        NumberBedrooms:'4',
        Area:'125m2',
        parking:'2 cars',
        Bathrooms:'3',
        Floor:'25th'
        },
        {
        className:'CardBestProperty5 CardBestProperty',
        imgSrc:CardImgFive,
        imgAlt:'CardImgFive',
        TypeRoom:'Penthouse',
        PriceRoom:'$925.000',
        DescriptionRoom:'34 Beach Street Miami,Or 42680',
        NumberBedrooms:'4',
        Area:'180m2',
        parking:'2 cars',
        Bathrooms:'4',
        Floor:'38th'   
        },
        {
        className:'CardBestProperty6 CardBestProperty',
        imgSrc:CardImgSix,
        imgAlt:'CardImgSix',
        TypeRoom:'Modern Condo',
        PriceRoom:'$450.000',
        DescriptionRoom:'22 New Street Portland,Or 16540',
        NumberBedrooms:'3',
        Area:'165m2',
        parking:'3 cars',
        Bathrooms:'2',
        Floor:'26th'  
        }, {className:'CardBestProperty4 CardBestProperty',
          imgSrc:CardImgFour,
          imgAlt:'CardImgFour',
          TypeRoom:'Appartment',
          PriceRoom:'$584.000',
          DescriptionRoom:'12 New Street Miami,Or 12650',
          NumberBedrooms:'4',
          Area:'125m2',
          parking:'2 cars',
          Bathrooms:'3',
          Floor:'25th'
          },
          {
          className:'CardBestProperty5 CardBestProperty',
          imgSrc:CardImgFive,
          imgAlt:'CardImgFive',
          TypeRoom:'Penthouse',
          PriceRoom:'$925.000',
          DescriptionRoom:'34 Beach Street Miami,Or 42680',
          NumberBedrooms:'4',
          Area:'180m2',
          parking:'2 cars',
          Bathrooms:'4',
          Floor:'38th'   
          },
          {
          className:'CardBestProperty6 CardBestProperty',
          imgSrc:CardImgSix,
          imgAlt:'CardImgSix',
          TypeRoom:'Modern Condo',
          PriceRoom:'$450.000',
          DescriptionRoom:'22 New Street Portland,Or 16540',
          NumberBedrooms:'3',
          Area:'165m2',
          parking:'3 cars',
          Bathrooms:'2',
          Floor:'26th'  
          }
  ]
  const[items,setItems]=useState(dataBestProprty1)
    
  const filterItems=(index)=>{
    console.log(index)
    if(index==0){setItems(dataBestProprty1)}
    if (index==1){
      const updateItem=dataBestProprty1.filter((element)=>element.TypeRoom=='Appartment')
      setItems(updateItem)
    }
     else if(index==2){
      const updateItem=dataBestProprty1.filter((element)=>element.TypeRoom=='Luxury Villa')
      setItems(updateItem)
    }
     else if(index==3){ 
    const updateItem=dataBestProprty1.filter((element)=>element.TypeRoom=='Penthouse')
    setItems(updateItem)
  }
   
  }
  const databtn=[{content:'1'},{content:'2'},{content:'3'},{content:'>>'}]
  
    return (
    <div className='BodyProprites'>
    <div className='BodyPropritesbtn'>
        {arraybtn.map((element,id)=>{
        return<button className='BestDealOneButton btn-proprities'key={id} value={element.name} onClick={()=>filterItems(id)}>{element.name} </button>})}
      </div>
     <div className='AllCardBestProperty'>
        {items.map((item,id)=>{
         return<CardBestProperty key={id} className={item.className} imgSrc={item.imgSrc} imgAlt={item.imgAlt} TypeRoom={item.TypeRoom} PriceRoom={item.PriceRoom}  DescriptionRoom={item.DescriptionRoom} NumberBedrooms={item.NumberBedrooms} Area={item.Area} parking={item.parking}Bathrooms={item.Bathrooms}Floor={item.Floor}   />})}
      </div>
      <div className='contaner-btn'>
       {databtn.map((element,id)=>{
        return<>
        <button key={id} className='number-btn'>{element.content}</button>
        </>})}
      </div>
    </div>
  )
}

export default BodyProprites
