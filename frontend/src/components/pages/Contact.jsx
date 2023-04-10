import React from 'react'
import "./Contact.css"

import emailIcon from "../../assets/email.png";

export default function Contact() {
  return (
    <div className='contact-wrapper'>
      <div className='left'>
        <p className='title'>Let's Chat. <br/> Tell me about your <br/> project.</p>
        <p className='subtitle'>Let's create comething together <span className='detail'>:)</span></p>
        <div className='mail-container'>
          <div className='img-container'>
            <img src={emailIcon} alt="email icon" />
          </div>
          <div className='mail-text'>
            <p>Mail me at:</p>
            <a><span className='detail'>carlitosgch4@gmail.com</span></a>
          </div>
        </div>
      </div>
      <div className='right'>
        <p>Send me a message</p>
        <input type="text" placeholder='Full name*' />
        <input type="email" placeholder='Email address*' />
        <input type="text" placeholder='Subject' />
        <p>Tell me about your project</p>
        <textarea name="project" id="message" cols="30" rows="10" placeholder='My project is about...'></textarea>
        <button>Send Message</button>
      </div>
    </div>
  )
}
