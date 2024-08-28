import React from 'react'
import './Heropages.css'

const Heropages = ({paragraf,title}) => {
  return (
    <div className='Heropages'>
        <p className='ParHeroPages ParHeroPagesRes'>{paragraf}</p>
        <h1 className='TitleHeroPages TitleHeroPagesRes'>{title}</h1>
        
    </div>
  )
}

export default Heropages
