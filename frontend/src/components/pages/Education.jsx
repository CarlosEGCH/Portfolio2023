import React, { useEffect, useRef, useState } from 'react'
import "./Education.css"

import { motion, useInView } from "framer-motion"

export default function Education() {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if(isInView){
            setLoaded(true);
        }
    }, [isInView])

    const variants = {
        visible: i => ({
            transform: "rotateY(0deg)",
            transition: {
            delay: i * 0.3,
            duration: 1,
            ease: "easeInOut"
            },
        }),
        hidden: { transform: "rotateY(-90deg)" },
    }

    const vlineVariants = {
        visible: i => ({
            height: 150,
            transition: {
            delay: i * 0.5,
            duration: 1
            },
        }),
        hidden: { height: 0 },
    }

  return (
    <div className='education-wrapper'>
        <div className='title-container'>
            <p className='title'>Education</p>
            <p className='subtitle'>All my formations and courses, which have helped me become an experienced Web Developer.</p>
        </div>

        <div className='timeline-container' ref={ref}>

            <div className='step'>
                <motion.p 
                custom={1}
                variants={variants}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                style={{transformOrigin: "left"}}
                className='year'>2020</motion.p>
                <div className='description top'>
                    <motion.div 
                    variants={vlineVariants}
                    custom={2}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{alignSelf: "flex-end"}}
                    className='vline'></motion.div>
                    <motion.div 
                    custom={5}
                    variants={variants}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{transformOrigin: "left"}}
                    className='right'>
                        <p className='step'>Step 01</p>
                        <p className='text'>Got accepted in the University of Madeira. I learned the basics of programming with <span className='detail'>Python</span>.</p>
                    </motion.div>
                </div>
            </div>

            <motion.div 
            custom={8}
            variants={variants}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            style={{transformOrigin: "left"}}
            className='hline'>
            </motion.div>

            <div className='step'>
                <motion.p 
                custom={11}
                variants={variants}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                style={{transformOrigin: "left"}}
                className='year'>2021</motion.p>
                <div className='description bottom'>
                    <motion.div 
                    variants={vlineVariants}
                    custom={9}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{alignSelf: "flex-start"}}
                    className='vline'></motion.div>
                    <motion.div 
                    custom={17}
                    variants={variants}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{transformOrigin: "left"}}
                    className='right'>
                        <p className='step'>Step 02</p>
                        <p className='text'>Learned Data Structures and Algorithms. Started learning <span className="detail">Web Development</span> by myself online.</p>
                    </motion.div>
                </div>
            </div>

            <motion.div 
            custom={19}
            variants={variants}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            style={{transformOrigin: "left"}}
            className='hline'>
            </motion.div>

            <div className='step'>
                <motion.p 
                custom={22}
                variants={variants}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                style={{transformOrigin: "left"}}
                className='year'>2022</motion.p>
                <div className='description top'>
                    <motion.div 
                    variants={vlineVariants}
                    custom={15}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{alignSelf: "flex-start"}}
                    className='vline'></motion.div>
                    <motion.div 
                    custom={27}
                    variants={variants}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{transformOrigin: "left"}}
                    className='right'>
                        <p className='step'>Step 03</p>
                        <p className='text'>Built 2 different websites for my first clients. Learned <span className="detail">advanced React</span> and <span className="detail">Front-End</span> technologies.</p>
                    </motion.div>
                </div>
            </div>

            <motion.div 
            custom={30}
            variants={variants}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            style={{transformOrigin: "left"}}
            className='hline'>
            </motion.div>

            <div className='step'>
                <motion.p 
                custom={33}
                variants={variants}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                style={{transformOrigin: "left"}}
                className='year'>2023</motion.p>
                <div className='description bottom'>
                    <motion.div 
                    variants={vlineVariants}
                    custom={21}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{alignSelf: "flex-start"}}
                    className='vline'></motion.div>
                    <motion.div 
                    custom={37}
                    variants={variants}
                    initial="hidden"
                    animate={loaded ? "visible" : "hidden"}
                    style={{transformOrigin: "left"}}
                    className='right'>
                        <p className='step'>Step 04</p>
                        <p className='text'>Got my <span className="detail">degree</span> and became a <span className="detail">software developer</span>. Also improved my Front-End skills and got new clients.</p>
                    </motion.div>
                </div>
            </div>

        </div>
    </div>
  )
}
