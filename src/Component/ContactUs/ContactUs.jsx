import React from 'react'
import PhoneIcone from './../../assets/images/phone-icon.png'
import EmailIcone from './../../assets/images/email-icon.png'
import Heropages from '../HeroPages/Heropages'
import Title from '../Title/Title'
import Form from '../Form/Form'
import './ContactUs.css'
import ContactMe from '../ContactMe/ContactMe'

const ContactUs = () => {
  const Home='HOME / CONTACT US'
  const title=' CONTACT US'
  const TitleP='CONTACT US'
  const TitleH1='Get In Touch With Our Agents'
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
  className:"ContactMeOne ContactMeOneMargin"
}]
  return (
    <div>
       <Heropages title={title} paragraf={Home}/>
       <div className='ContainerSingle'>
       <div className='SectionTwo'>
        <div className='Part-one'>
          <Title TitleP={TitleP} TitleH1={TitleH1} classNamep='TitleP' classNameh='Titleh1 Titleh1Res'/>
          <p className='ContactPar'>When you really need to download free CSS templates, please remember our website TemplateMo. Also,tellyour friends about our website.Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information,please contact us.</p>
          {dataContactMe.map((item,id)=>{return<>
          <ContactMe key={id} className={item.className} imgSrc={item.img} altImg={item.alt} ConNumber={item.ConNumber} ConPar={item.ConPar}/>
          </>})}
        </div>
        <Form className='ContactTow1 part-two' classNameinput='name input1 inputContact' classNameTextErea='message input1 message1'/>
       </div>
       <div className='ContactMeMapDiv'> 
       <iframe className='ContactMeMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28702.997109514476!2d-80.12518881137693!3d25.93934070193674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723910395380!5m2!1sar!2s" frameborder="0"  ></iframe>
       </div>
       </div>
      
    </div>
  )
}

export default ContactUs
