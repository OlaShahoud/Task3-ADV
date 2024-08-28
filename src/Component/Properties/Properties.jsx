import React from 'react'
import Heropages from '../HeroPages/Heropages'

import BodyProprites from '../BodyProprties/BodyProprites'


const Properties = () => {
  const Home='HOME / PROPERTIES'
  const title='PROPERTIES'
  return (
    <>
       <Heropages paragraf = {Home} title={title} />
      <BodyProprites/>
     
     </>
  )
}

export default Properties
