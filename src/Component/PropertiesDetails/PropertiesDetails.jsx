import React from 'react'
import Heropages from '../HeroPages/Heropages'
import Okordione from '../Okordione/Okordione'
import ImgSingle from '../../assets/images/property-01.jpg'
import IconeOne from './../../assets/images/info-icon-01.png'
import IconeTwo from './../../assets/images/info-icon-02.png'
import IconeThree from './../../assets/images/info-icon-03.png'
import IconeFour from './../../assets/images/info-icon-04.png'
import BestDeal from '../BestDeal/BestDeal'
import CardBestAppartment from '../CardBestAppertment/CardBestAppartment'
import './PropertiesDetails.css'


const PropertiesDetails = () => {
   const Home='HOME / SINGLE PROPERTIES'
  const title=' SINGLE PROPERTIES'
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
    const dataCardBest=[
      {img:IconeOne,
      infoTitle:'Total Flat Space',
      infoPar:'450 m2'
      },
      {img:IconeTwo,
      infoTitle:'Contract Ready',
      infoPar:'Contract '
      },  
      {img:IconeThree,
      infoTitle:'Payment Process',
      infoPar:'Payment',
    
      },  
      {img:IconeFour,
      infoTitle:'24/7 Under',
      infoPar:'Safety ',
    
      },]
  return (
    <div>
    
     <Heropages title={title} paragraf={Home}/>
     <div className='ContainerSingle'>
     <div className='SectionTwo sectionTwwo'> 
      <div className='PartOne'>
        <div className='ImgSingle'><img src={ImgSingle} alt="ImgSingle" /></div>
        <p className='typeRoom Singlepar'>Apparment</p>
        <h1 className='Singleh1'>24 New Street Miami, OR 24560</h1>
        <p className='lorem lorem1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dicta praesentium neque reiciendis harum tempora fugit deleniti sequi? Consequuntur possimus sint excepturi, incidunt consectetur fugit. Ipsam ipsum odit eius nulla animi quod et quidem. Beatae ratione vel odio? Tempore deserunt quas harum deleniti autem quo quis asperiores aliquam natus. Reprehenderit modi omnis hic enim perferendis unde saepe nulla nobis commodi totam provident, veritatis fugiat voluptatem tenetur temporibus ducimus corrupti ipsam error praesentium fugit nihil eveniet nostrum illum sunt. Vel porro nulla, enim quasi odio, impedit qui labore expedita laborum dolores ullam saepe laboriosam, sequi quod consectetur repudiandae repellendus ab sapiente.</p>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, autem cumque odio sapiente pariatur possimus debitis aliquid explicabo animi distinctio consequatur molestias veritatis numquam perspiciatis hic quia culpa reprehenderit quos voluptates iste necessitatibus ut soluta repellat dolor? Deleniti, ea unde molestias sequi deserunt dolorum soluta debitis voluptate in, aperiam pariatur?</p>
      </div>
      <div className='features PartTwo'>
            {dataCardBest.map((element,id)=>{
            return<>
            <CardBestAppartment key={id} img={element.img} infoTitle={element.infoPar} infoPar={element.infoTitle} title={element.title} />
            </>})}
       </div>
     </div>
   <div className='Best'> 
            {dataOkordione.map((item,id)=>{
               return<>
                <Okordione key={id} className={item.className} id={id} Quetion={item.Quetion} spanParagrafOk={item.spanParagrafOk} spanParagrafOk1={item.spanParagrafOk1} ParagrafOk={item.ParagrafOk} ParagrafOk1={item.ParagrafOk1} ParagrafOk2={item.ParagrafOk2}/> 
              </>
              })}
    </div>
 </div>
 <BestDeal/>
    </div>
  )
}

export default PropertiesDetails
