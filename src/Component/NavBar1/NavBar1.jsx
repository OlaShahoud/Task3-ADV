import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faMap} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import './NavBar.css'


const NavBar1 = () => {
    const dataNavBar1 =[
        { 
          iconName:faEnvelope,
          paragraf:'info @company.com',
          className:'faEnvelope',
          DivClassName:'navItem nav1-item1'

        },
        {
          iconName:faMap,
          paragraf:'Sunny isles Beach,FL 33160',
          className:'faMap',
          DivClassName:'navItem nav1-item2'
        }]
        const dataNavBarIcon =[
            { 
              iconName:faFacebook,
              className:'iconItem',
            },
            {
              iconName:faTwitter,
              className:'iconItem',
            },
            {
            iconName:faLinkedin,
            className:'iconItem',
            },        
            {
            iconName:faTwitter,
            className:'iconItem',
            }]
  return (
    <nav className='nav1 Flex Container-Top'>
        <div className='nav1-item'>
     {dataNavBar1.map((item,id)=>{return<div className={item.DivClassName} key={id}>
      <FontAwesomeIcon className={item.className} icon={item.iconName} />
       <p className='dataNavBar1Par'>{ item.paragraf}</p>
     </div>})}
       </div>
       <ul className='icon-list'>
        {dataNavBarIcon.map((item,id)=>{
            return<li key={id} className={item.className}><FontAwesomeIcon icon={item.iconName} /></li>
        })}
       </ul>
   
 
    </nav>
  )
}

export default NavBar1
