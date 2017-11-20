import React from 'react';
import '../styles/grid.scss'
import Card from './Card.js'


export default function Grid(props) {

  const handleClick = (category) => {
    // props.originalState();
    props.filterFunction(category);
    // props.originalState();
  }
  
  return (
    <div className = "portfolio-grid">
    <div className = "headline-div">
      <h1> Portfolio </h1>
      </div>
    <div className = "sort-buttons-div">
      <button className = 'sort-button' onClick = {() => 
          handleClick('design') }> Design </button>
      <button className = 'sort-button' onClick = {() => 
          handleClick ('development') }> Development </button>
        <button className = 'sort-button'  onClick = {() => 
        props.originalState () }> All </button>
    </div>
      <div className = "card-holder">
         {
          props.portfolio.map ((item, index) => {
            return <Card  key = {index}
              name = {item.name}
              image = {item.image}
              description = {item.description}
              />
            })
          }
      </div>
    </div>
  );
}