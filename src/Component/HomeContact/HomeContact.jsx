import React from 'react'
import './HomeContact.css'
import ContactImg from './../../assets/images/contact-bg.jpg'
import PhoneIcone from './../../assets/images/phone-icon.png'
import EmailIcone from './../../assets/images/email-icon.png'
import Form from '../Form/Form'
import ContactMe from '../ContactMe/ContactMe'
import Title from '../Title/Title'
const HomeContact = () => {
  const dataContactMe=[{
    img:PhoneIcone,
    alt:"PhoneIcone",
    ConNumber:"010-020-0340",
    ConPar:"Phone Number",
    className:" ContactMeOne"
},
{
  img:EmailIcone,
  alt:"EmailIcone",
  ConNumber:"info@villa.co",
  ConPar:"Business Email",
  className:"ContactMeOne ContactMeOneleft"
}]
 const TitleP='contactUs'
  const TitleH1='Get In Touch With Our Agents'
  return (
    <div>
       <div  className='allContact' id='Contact'>
        <div className='imgProDetials ContactImg'>
            <img src={ContactImg} alt="ContactImg" className='imgPropereties ContactImg1' />
            <div className='proDetailsTitle ccolor'>
              <Title  TitleH1={TitleH1} TitleP={TitleP} classNamep='TitleP' classNameh='Titleh1 Titleh11'/>
            </div>
            <div>     
               <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28702.997109514476!2d-80.12518881137693!3d25.93934070193674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723910395380!5m2!1sar!2s" frameborder="0"  ></iframe>
            </div>
           <Form className='ContactTow ContactTow1' classNameinput='name input1' classNameTextErea='message input1 '/>
          </div>
        <div  className='ContactMe'>
        {dataContactMe.map((item,id)=>{return<>
          <ContactMe key={id} className={item.className} imgSrc={item.img} altImg={item.alt} ConNumber={item.ConNumber} ConPar={item.ConPar}/>
          </>})}
          </div>
            
        </div>
      
    </div>
  )
}

export default HomeContact
