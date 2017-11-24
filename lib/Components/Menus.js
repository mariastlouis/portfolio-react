import React from 'react';
import '../styles/menu.scss'
import Scrollchor from 'react-scrollchor';

export default function Menu() {
  return (
    <div className = "main-menu">
        <div className = "logo-div"> 
          <img className = "logo" src = "../public/logo-med.png" />
        </div>
        <div className = "nav-div">
          <ul className = "nav">
            <li>
              <a href = '#section0'> Home </a>
           </li>
           <li>
           <Scrollchor to="#about" className="nav-link">About</Scrollchor>
           </li>
           <li>
              <Scrollchor to="#portfolio" className="nav-link">Portfolio</Scrollchor>
          </li>
           </ul>
        </div>
    </div>
  );
}
        
     
