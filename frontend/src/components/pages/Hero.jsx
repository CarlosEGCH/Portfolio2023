import React from 'react'
import logo from "../../assets/bigLogo.png"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero-wrapper">

      <div className="left">

        <div className="subtitle">
          <div className="hline"></div>
          <p>Front-End Developer <span className="detail">/</span> React Expert</p>
        </div>
        <div className="title">
          Hello There! <br/> I'm <span className="detail">C</span>arlos <span className="detail">G</span>omes
        </div>
        <div className="description">Hi, I'm Carlos Gomes, a 22-year-old software developer based in Madeira. I specialize in React development and have a passion for building innovative and user-friendly web applications. With my strong technical skills and creative mindset, I strive to create solutions that exceed expectations and drive business success. Welcome to my portfolio!</div>
        <div className="buttons-container">
          <a className="contactme">Contact Me</a>
          <a className="knowmore">Know More</a>
        </div>

      </div>

      <div className="right">
        <img src={logo} alt="Logo" />
        <div className="orbit">
          <div className="satellite"></div>
        </div>
      </div>

    </div>
  )
}
