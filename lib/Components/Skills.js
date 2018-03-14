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
        <div className = "intro skills skills-box">
          <h2 className = "skills-hed"> <img className = "woman-icon" src = "../../public/woman_user-32.png" />About me  </h2>
          <p className = "skills-text"> I'm a data-journalist turned web designer/developer and have been visualizing data and making websites for more than five years.</p> 
          <p className = "skills-text"> I have a master's degree in web design from the University of Florida and recently graduated from the front-end engineering program at Turing School of Software & Design in Denver, CO. </p>
        </div>
        <div className = "skills skills-box">
          <div className = "cog-icon">
            <h2 className = "skills-hed"> <Cogs /> Skills </h2>
          </div>
          <div className = "two-skills-lists">
          <div className = "left-skills-list">
            <ul className = "skills-list">
              <li>HTML5/CSS3/SCSS</li>
              <li>JavaScript/JQuery </li>
              <li>SQL </li>
               <li>React </li>
               <li> Redux</li>
               <li> Node </li>
               <li> Express/Knex</li>
                <li> Git/Github </li>
                <li> Fetch/asynchronous API calls </li>
               

            </ul>
          </div>

          <div className = "right-skills-list">
            <ul className = "skills-list">
              
              <li>PostgreSQL</li>
              <li>Test-driven development </li>
              <li>Adobe Photoshop </li>
              <li>Adobe Illustrator </li>
              <li>WordPress</li>
              <li>Data analysis</li>
              <li>Interactive Mapping</li>
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
   