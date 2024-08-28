import React from 'react'
import './Title.css'
const Title = ({TitleP,TitleH1,classNamep,classNameh,classNamediv}) => {
  return (
    <div className={classNamediv}>
      <p className={classNamep}>{TitleP}</p>
      <h1 className={classNameh}>{TitleH1}</h1>
     </div>
  )
}

export default Title