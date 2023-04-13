import React, { useEffect, useRef, useState } from 'react'
import "./Skills.css"

import { useInView, motion } from "framer-motion"

export default function Skills() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const [bars, setBars] = useState(0);

    useEffect(() => {
        if(!isInView){
            setBars(0);
        }
        // console.log("Bars:" + bars)
    }, [isInView])

    const frontendVar = {
        visible: { 
            width: "90%",
            transition: {
                duration: 2,
                type: "spring",
                stiffness: 30
            }
        },
        hidden: { width: 0 },
        }

    const backendVar = {
        visible: { 
            width: "75%",
            transition: {
                delay: 0.5,
                duration: 2,
                type: "spring",
                stiffness: 30
            }
        },
        hidden: { width: 0 },
        }
    
    const databasesVar = {
        visible: { 
            width: "80%",
            transition: {
                delay: 1,
                duration: 2,
                type: "spring",
                stiffness: 30
            }
        },
        hidden: { width: 0 },
        }

    const webDesignVar = {
        visible: { 
            width: "85%",
            transition: {
                delay: 1.5,
                duration: 2,
                type: "spring",
                stiffness: 30
            }
        },
        hidden: { width: 0 },
        }

    const uiuxVar = {
        visible: { 
            width: "88%",
            transition: {
                delay: 2,
                duration: 2,
                type: "spring",
                stiffness: 30
            }
        },
        hidden: { width: 0 },
        }

  return (
    <div className="skills-wrapper" ref={ref} id="skills">
        <div className="left">
            <p className="title">Skills and <br/> Experience</p>
            <p className="subtitle">Junior Front-End Web Developer <span className="detail">|</span> Software Engineer <span className="detail">|</span> <br/>
HTML<span className="detail">/</span>CSS<span className="detail">/</span>Javascript & React <span className="detail">|</span> Designs and Develops <br/> Websites and apps.</p>

            <div className="list-container">
                <div className="list-item">
                    <div className="list-triangle">
                    </div>
                    <p>
                        Design, develop, test and integrate custom Web Applications.
                    </p>
                </div>
                <div>
                    <div className="list-item">
                        <div className="list-triangle">
                        </div>
                        <p>
                            Design technical architecture and Front-end code structure of a
    cloud-based web application.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="list-item">
                        <div className="list-triangle">
                        </div>
                        <p>
                            Designs and leads implementation of scalable, secure, cross platform
    web applications.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="list-item">
                        <div className="list-triangle">
                        </div>
                        <p>
                            Optimize web pages for maximum speed and scalability.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="list-item">
                        <div className="list-triangle">
                        </div>
                        <p>
                            Resolve complex design, implementation and performance needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="right">
            <div className="list-container">
                <div className="list-item">
                    <p>Front<span className='detail'>-</span>End</p>
                    <div className="bar-container">
                        <motion.div
                        variants={frontendVar}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bar-progress">
                        </motion.div>
                    </div>
                </div>
                <div className="list-item">
                    <p>Back<span className='detail'>-</span>End</p>
                    <div className="bar-container">
                        <motion.div 
                        variants={backendVar}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bar-progress">
                        </motion.div>
                    </div>
                </div>
                <div className="list-item">
                    <p>Databases</p>
                    <div className="bar-container">
                        <motion.div 
                        variants={databasesVar}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bar-progress">
                        </motion.div>
                    </div>
                </div>
                <div className="list-item">
                    <p>Web Design</p>
                    <div className="bar-container">
                        <motion.div 
                        variants={webDesignVar}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bar-progress">
                        </motion.div>
                    </div>
                </div>
                <div className="list-item">
                    <p>UI<span className='detail'>/</span>UX</p>
                    <div className="bar-container">
                        <motion.div 
                        variants={uiuxVar}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bar-progress">
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
