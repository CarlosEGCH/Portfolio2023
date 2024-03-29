import React from 'react'
import "./Projects.css"

import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
import cat from "../../assets/github.png"

export default function Projects() {
  return (
    <div className='projects-wrapper' id="projects">
        <div className='main-title'>
            <p className='subtitle'>Check it out</p>
            <p className='title'>Featured Projects</p>
        </div>
        <div className='projects-container'>
            <div className='img-container'>
                <img src={proj1} alt="test" />
                <div className='img-overlay'>
                    <a href="https://github.com/CarlosEGCH/weUMa">
                        Visit Project
                    </a>
                </div>
            </div>
            <div className='img-container'>
                <img src={proj2} alt="test" />
                <div className='img-overlay'>
                    <a href="https://mirnaamaya.com/">
                        Visit Project
                    </a>
                </div>
            </div>
            <div className='img-container'>
                <img src={proj3} alt="test" />
                <div className='img-overlay'>
                    <a href="https://madeiradentalcenter.pt/">
                        Visit Project
                    </a>
                </div>
            </div>
            <div className='img-container'>
                <img src={proj4} alt="test" />
                <div className='img-overlay'>
                    <a href="https://github.com/CarlosEGCH/ScamOverflow">
                        Visit Project
                    </a>
                </div>
            </div>
            <div className='img-container'>
                <img src={proj5} alt="test" />
                <div className='img-overlay'>
                    <a href="https://airobotblog.web.app/">
                        Visit Project
                    </a>
                </div>
            </div>
            <div className='advertisement'>
                <p className='subtitle'>More on my Github...</p>
                <p className='title'>Visit my profile</p>
                <div className='link'>
                    <img src={cat} alt="cat" />
                    <a href="https://github.com/CarlosEGCH">https://github.com/CarlosEGCH</a>
                </div>
            </div>
        </div>
    </div>
  )
}
