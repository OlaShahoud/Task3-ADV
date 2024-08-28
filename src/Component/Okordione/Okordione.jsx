import React, { useState } from 'react'
import './Okordion.css'

const Okordione = ({className,id,Quetion,ParagrafOk,spanParagrafOk,ParagrafOk1,spanParagrafOk1,ParagrafOk2}) => {
    const[toggle,setToggle]=useState('false')
    const[currentEdit,setCurrentEdit]=useState();
    function handleOkordion(index){
    
        setCurrentEdit(index)
         setToggle(!toggle)
         
      }
    return (
    <div>
      <p className={className} key={id} onClick={()=>handleOkordion(id)} id={id}>{Quetion}</p>
      <p className={currentEdit==id?toggle?'besthi':'bestPar':'besthi'}>{ParagrafOk}              
     <span className='bestparspan'>{spanParagrafOk} </span> {ParagrafOk1}
      <span className='bestparspann'>{spanParagrafOk1}</span>{ParagrafOk2}</p>
    </div>
  )
}

export default Okordione

