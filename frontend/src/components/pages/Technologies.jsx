import React from 'react'
import "./Technologies.css"

import databaseIcon from "../../assets/database.png";
import frontendIcon from "../../assets/frontend.png";
import backendIcon from "../../assets/backend.png";

export default function Technologies() {
  return (
    <div className='technologies-wrapper'>
        <p className='main-title'>Technologies</p>
        <div className='cards-container'>
            <div className='card'>
                <div className='header'>
                    <div className='img-container'>
                        <img src={databaseIcon} alt="card image" />
                    </div>
                </div>
                <div className='body'>
                    <p className='title'>Databases</p>
                    <div className='list'>
                        <div className='item'>
                            <div className='triangle'></div><p>MySQL / PostgreSQL</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>Mongoose</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>Firestore</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='header'>
                    <div className='img-container'>
                        <img src={frontendIcon} alt="card image" />
                    </div>
                </div>
                <div className='body'>
                    <p className='title'>Front-End</p>
                    <div className='list'>
                        <div className='item'>
                            <div className='triangle'></div><p>HTML / CSS</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>Bootstrap / ChakraUI</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>JS / React / NextJS</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>Wordpress / Elementor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='header'>
                    <div className='img-container'>
                        <img src={backendIcon} alt="card image" />
                    </div>
                </div>
                <div className='body'>
                    <p className='title'>Backend</p>
                    <div className='list'>
                        <div className='item'>
                            <div className='triangle'></div><p>NodeJS</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>PHP</p>
                        </div>
                        <div className='item'>
                            <div className='triangle'></div><p>ExpressJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
