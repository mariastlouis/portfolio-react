import React from 'react';
import '../styles/skills.scss'
import Cogs from 'react-icons/lib/fa/cogs'
import GitHub from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin-square'
import Envelope from 'react-icons/lib/fa/envelope'

export default function Skills () {
  return (
    <div className = "skills">
      <div className = "skills-top">
        <div className = "intro skills-box">
          <h1 className = "accent-hed"> Welcome!  </h1>
          <p> I'm a data-journalist turned web designer/devloper and have been visualizing data and making websites and apps for more than five years.</p> 
          <br />
          <p> I have a master's degree in web design from the University of Florida and am studying front-end engineering at The Turing School of Software & Design in Denver, CO. </p>
        </div>
        <div className = "skills skills-box">
          <div className = "cog-icon">
            <h2 className = "skills-hed"> <Cogs /> Skills </h2>
          </div>
          <div className = "two-skills-lists">
          <div className = "left-skills-list">
            <ul className = "skills-list">
              <li>HTML5/CSS3</li>
              <li>JavaScript/JQuery </li>
              <li>SQL </li>
              <li>Object-oriented programming </li>
               <li>React.js </li>
               <li>Test-driven development </li>

            </ul>
          </div>

          <div className = "right-skills-list">
            <ul className = "skills-list">
              
              <li>Adobe Photoshop </li>
              <li>Adobe Illustrator </li>
              <li>Wordpress</li>
              <li>Data analysis</li>
              <li>Data analysis</li>
              <li>Content development</li>

            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className = "skills-bottom">
        <a className = "social-link github-link" href = "https://github.com/mariastlouis"> <GitHub /> </a>
       <a className = "social-link linkedin-link" href = "https://www.linkedin.com/in/mariastlouissanchez/"> <LinkedIn /> </a>

      </div> 
    </div>
  );
}
   