import React from 'react'
import "./Footer.css"

import logo from "../../assets/Logo.png";
import github from "../../assets/githubsmall.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='top'>
            <div className='left'>

                <img src={logo} alt="logo" />
                <div className='socials'>
                    <div className='icon-container'>
                        <img src={whatsapp} alt="icon" />
                    </div>
                    <div className='icon-container'>
                        <img src={github} alt="icon" />
                    </div>
                    <div className='icon-container'>
                        <img src={instagram} alt="icon" />
                    </div>
                </div>

            </div>
            <div className='right'>

                <div className='info-container'>
                    <div className='link'>
                        <div className='triangle'></div><p>+351 926 432 597</p>
                    </div>
                    <div className='link'>
                        <div className='triangle'></div><p>carlitosgch4@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='bottom'>
            <p>© Designed and built by Carlos Gomes</p>
        </div>
    </div>
  )
}
