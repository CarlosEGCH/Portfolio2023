import React from 'react'
import "./Education.css"

export default function Education() {
  return (
    <div className='education-wrapper'>
        <div className='title-container'>
            <p className='title'>Education</p>
            <p className='subtitle'>All my formations and courses, which have helped me become an experienced Web Developer.</p>
        </div>

        <div className='timeline-container'>

            <div className='step'>
                <p className='year'>2020</p>
                <div className='description top'>
                    <div className='vline'></div>
                    <div className='right'>
                        <p className='step'>Step 01</p>
                        <p className='text'>Got accepted in the University of Madeira. I learned the basics of programming with <span className='detail'>Python</span>.</p>
                    </div>
                </div>
            </div>

            <div className='hline'>
            </div>

            <div className='step'>
                <p className='year'>2021</p>
                <div className='description bottom'>
                    <div className='vline'></div>
                    <div className='right'>
                        <p className='step'>Step 02</p>
                        <p className='text'>Learned Data Structures and Algorithms. Started learning <span className="detail">Web Development</span> by myself online.</p>
                    </div>
                </div>
            </div>

            <div className='hline'>
            </div>

            <div className='step'>
                <p className='year'>2022</p>
                <div className='description top'>
                    <div className='vline'></div>
                    <div className='right'>
                        <p className='step'>Step 03</p>
                        <p className='text'>Built 2 different websites for my first clients. Learned <span className="detail">advanced React</span> and <span className="detail">Front-End</span> technologies.</p>
                    </div>
                </div>
            </div>

            <div className='hline'>
            </div>

            <div className='step'>
                <p className='year'>2023</p>
                <div className='description bottom'>
                    <div className='vline'></div>
                    <div className='right'>
                        <p className='step'>Step 04</p>
                        <p className='text'>Got my <span className="detail">degree</span> and became a <span className="detail">software developer</span>. Also improved my Front-End skills and got new clients.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
