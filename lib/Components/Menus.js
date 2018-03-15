import React from 'react';
import '../styles/menu.scss'
import Scrollchor from 'react-scrollchor';
import GitHub from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin-square'
import Download from 'react-icons/lib/fa/download'


export default function Menu() {
  return (
    <div className = "main-menu" id="menu">
        <div className = "main-img">
          <div className = "main-content">
            
            <div className = "title">
              <img className = "name-logo" src = "../../public/name_logo.png" alt = "Maria St. Louis-Sanchez"/>
             
              <div className = "button-bar">
              <button className = "nav-button"> Skills </button>
              <button className = "nav-button"> Portfolio </button>
              </div>
               <div className = "icon-bar">
                <a className = "social-link github-link" href = "https://github.com/mariastlouis"> <GitHub /> </a>
                <a className = "social-button" href = "../../public/mariaSanchezResume.pdf" download> <button className = "resume-link"> RESUME <Download /></button> </a>
                <a className = "social-link linkedin-link" href = "https://www.linkedin.com/in/mariastlouissanchez/"> <LinkedIn /> </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
                      //  <button className = "resume-button download">Resume <span className = "download-icon"> <Download /> </span></button>
     
  // <div className = "logo-div"> 
  //         <img className = "logo" src = "../public/logo-med.png" />
  //       </div>
  //       <div className = "nav-div">
  //         <ul className = "nav">
  //           <li>
  //             <Scrollchor to= '#menu' className="nav-link"> Home </Scrollchor>
  //          </li>
  //          <li>
  //           <Scrollchor to="#about" className="nav-link">About</Scrollchor>
  //          </li>
  //          <li>
  //             <Scrollchor to="#portfolio" className="nav-link">Portfolio</Scrollchor>
  //         </li>
  //          </ul>
  //       </div>