import React from 'react'
import './Form.css'
const Form = ( {className,classNameinput,classNameTextErea}) => {
  return (
    <form  className={className}>
    <div className='input'>
    <label htmlFor="name">Full Name</label>
    <input className={classNameinput} id='name' type="text"  placeholder='Your Name...' />
    </div>
    <div  className='input'>
    <label htmlFor="email"> Email Address</label>
    <input className={classNameinput}id='email' type="text"  placeholder='Your E-mail...' />
    </div>
    <div  className='input'>
    <label htmlFor="subject"> Subject</label>
    <input className={classNameinput} id='subject' type="text" placeholder='Subject...' />
    </div>
    <div  className='input'>
    <label htmlFor="message">Message</label>
    <textarea className={classNameTextErea} id='message'   placeholder='Your Message' />
    </div>
    <button className='Schedual MessageBtn'>Send Message</button>
 </form>
  )
}

export default Form
