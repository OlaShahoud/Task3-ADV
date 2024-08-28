
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope,faMap,faCalendar, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import NavBar1 from '../NavBar1/NavBar1'
import { Link } from 'react-router-dom'

const NavBar = () => {
 const[responsevNav,setResponsevnav]=useState('false')
    function handleNav(){
        setResponsevnav(responsevNav=='true')
    }
    function handleCancelNav(){
        setResponsevnav(!responsevNav)
    }
    const listNav=[
   {
      content:'Home',
      link:'/'
    },
    {
      content:'Properites',
      link:'/Properties'
    },
    {
      content:'Property Details',
      link:'/PropertyDetails'
    },
    {
      content:'Contact Us',
      link:'/ContactUs'
    },]
  return (
    <div>
      <NavBar1/>
      <nav className='nav'>
        <h1 className='Logo'>Villa</h1>
        <div className='div-respo'>
        <div className=' divIcon'>
          <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={handleNav}  />
          <FontAwesomeIcon  className= {responsevNav?'listNav':' cancel-icon'} icon={faCircleXmark} onClick={handleCancelNav}  />
        </div>
       <ul className= {responsevNav?'listNav':' list-nav'}>
        {listNav.map((item,id)=>{
          return<li className= 'list-item' key={id}> <Link to={item.link}>{item.content} </Link></li>})}
         <li className='list-item icon'>
        <button className='Schedual'>Scheduale a visit 
        <div className='FaCalendar center'><FontAwesomeIcon icon={faCalendar} /></div>
        </button>
    </li>
   </ul>
   </div>
   </nav>
    </div>
  )
}

export default NavBar
