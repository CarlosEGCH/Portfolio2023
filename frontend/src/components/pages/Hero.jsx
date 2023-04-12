import React, { useState } from 'react'
import logo from "../../assets/bigLogo.png"
import "./Hero.css"

import{ motion } from "framer-motion"

export default function Hero() {

  const [hlineText, setHlineText] = useState(false);
  const [mainText, setMainText] = useState(false);
  const [description, setDescription] = useState(false);
  const [contact, setContact] = useState(false);
  const [knowMore, setKnowMore] = useState(false);

  return (
    <div className="hero-wrapper">

      <motion.div className="left">

        <div className="subtitle">
          <motion.div 
          initial={{width: 0}} 
          animate={{width: 200}} 
          transition={{ ease: "easeInOut", duration: 1}}
          onAnimationComplete={() => {setHlineText(!hlineText)}}
          className="hline"></motion.div>
          { hlineText &&
            <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ease: "easeInOut", duration: 1.2}}
            onAnimationComplete={() => {setMainText(!mainText)}}
            >Front-End Developer <span className="detail">/</span> React Expert</motion.p>
          }
        </div>
        <div 
        className="title">
          {mainText &&
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ease: "easeInOut", duration: 1.2}}
            onAnimationComplete={() => {setDescription(!description)}}>
            Hello There! <br/> I'm <span className="detail">C</span>arlos <span className="detail">G</span>omes
          </motion.p>
          }
        </div>
        <div className="description">
          {description &&
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.2}}
            onAnimationComplete={() => {setContact(!contact)}}>
            Hi, I'm Carlos Gomes, a 22-year-old software developer based in Madeira. I specialize in React development and have a passion for building innovative and user-friendly web applications. With my strong technical skills and creative mindset, I strive to create solutions that exceed expectations and drive business success. Welcome to my portfolio!
          </motion.p>
          }
        </div>
        <div className="buttons-container">
          {contact &&
          <motion.a 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{ease: "easeInOut", duration: 1}}
            onAnimationComplete={() => {setKnowMore(!knowMore)}}
            className="contactme">Contact Me</motion.a>
          }
          {knowMore &&
          <motion.a 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{ease: "easeInOut", duration: 1}}
            className="knowmore">Know More</motion.a>
          }
        </div>

      </motion.div>

      <div className="right">
        <img src={logo} alt="Logo" />
        <div className="orbit">
          <div className="satellite"></div>
        </div>
      </div>

    </div>
  )
}
