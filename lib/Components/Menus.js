import React from 'react';
import '../styles/menu.scss'

export default function Menu() {
  return (
    <div className = "main-menu">
        <div className = "logo-div"> 
          <img className = "logo" src = "../public/logo-med.png" />
        </div>
        <div className = "nav-div">
          <ul className = "nav">
            <li>
              <a href = "#"> Home </a>
            </li>
            <li>
              <a href = "#"> Portfolio</a>
            </li>
            <li>
              <a href = "#"> Contact </a>
            </li>
          </ul>
        </div>
    </div>
  );
}
        
     
