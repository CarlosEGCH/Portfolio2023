import React from 'react';
import "./Header.css";
import logo from "../../assets/Logo.png";


export default function Header() {
  return (
    <div className="header-wrapper">

      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="links-container">
        <div>
          <a href="#skills" className="hover-underline-animation">Skills</a>
        </div>
        <div>
          <a href="#technologies" className="hover-underline-animation">Technologies</a>
        </div>
        <div>
          <a href="#projects" className="hover-underline-animation">Projects</a>
        </div>
        <div>
          <a href="#education" className="hover-underline-animation">Education</a>
        </div>
      </div>

      <div className="download-cv">
        <a href="../../assets/cvcarlosgomes.pdf" download>Download CV</a>
      </div>
    </div>
  )
}
