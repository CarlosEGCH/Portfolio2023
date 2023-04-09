import React from 'react'
import "./Skills.css"

export default function Skills() {
  return (
    <div className="skills-wrapper">
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
                        <div style={{width: "90%"}} className="bar-progress">
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <p>Back<span className='detail'>-</span>End</p>
                    <div className="bar-container">
                        <div style={{width: "70%"}} className="bar-progress">
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <p>Databases</p>
                    <div className="bar-container">
                        <div style={{width: "80%"}} className="bar-progress">
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <p>Web Design</p>
                    <div className="bar-container">
                        <div style={{width: "85%"}} className="bar-progress">
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <p>UI<span className='detail'>/</span>UX</p>
                    <div className="bar-container">
                        <div style={{width: "88%"}} className="bar-progress">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
