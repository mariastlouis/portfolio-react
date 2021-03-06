import React from 'react';
import '../styles/about.scss'
import Scrollchor from 'react-scrollchor';

export default function Menu() {
  return (
    <div className = "about-section" id = "about">

      <div className = "headline-div">
        <h1 className = "about-hed"> A <span className = "heavy"> UNIQUE </span> COMBINATION </h1>
      </div>
      <div className = "about-inner-container">
        <div className = "about-card designer">
          <div className = "about-icon">
           <img className = "about-image-icon" src = "../../public/painbrush.png" />
          </div>
          <h3 className = "about-card-head"> Designer </h3>
          <p> Lover of fonts and color palettes </p>
        </div>
         <div className = "about-card data">
          <div className = "about-icon">
           <img className = "about-image-icon" src = "../../public/graph.png" />
          </div>
          <h3 className = "about-card-head">Data-Driven</h3>
          <p> API and database addict  </p>
        </div>
        <div className = "about-card engineer">
          <div className = "about-icon">
           <img className = "about-image-icon" src = "../../public/engineer.png" />
          </div>
          <h3 className = "about-card-head"> Front End Developer </h3>
          <p className = "about-card-text"> That wonderful place where left and right brains meet </p>
        </div>
      </div>
     
     
    </div>
   
  );
}

 //<div className = "about-inner-container">
//        <div className = "design about-img-container"> 
  //        <div className = "about-img-icon">
      //       <img className = "about-img" src = "../public/art-dork.png" />
      //     </div>
      //     <div className = "about-img-text">
      //       <h3> Designer </h3>
      //       <p> Lover of fonts and color palettes </p>
      //     </div>
      //   </div>
      //   <div className = "dork about-img-container"> 
      //     <div className = "about-img-icon">
      //       <img className = "about-img" src = "../public/dork-dork.png" />
      //     </div>
      //     <div className = "about-img-text">
      //       <h3> Dork </h3>
      //       <p> API and database addict </p>
      //     </div>
      //   </div>
      //   <div className = "dork about-img-container"> 
      //     <div className = "about-img-icon">
      //       <img className = "about-img" src = "../public/dork-developer.png" />
      //     </div>
      //     <div className = "about-img-text">
      //       <h3> Frontend Developer </h3>
      //       <p> That wonderful place where left and right brains meet </p>
      //     </div>
      //   </div>
      // </div>
