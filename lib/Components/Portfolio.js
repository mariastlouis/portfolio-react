import React from 'react';
import '../styles/grid.scss'
import Card from './Card.js'

export default class Portfolio extends React.Component {
 constructor () {
  super();
  // this.state = {portfolio: ''}
  this.handleClick = this.handleClick.bind(this)
 }

handleClick(category) {
    this.props.filterFunction(category);
}

render () {
  return (
      <div className = "portfolio-grid">
    <div className = "sort-buttons">
      <button onClick = {() => 
          this.handleClick('design') }> Design </button>
      <button onClick = {() => 
          this.handleClick ('development') }> Development </button>
        <button onClick = {() => 
        this.props.originalState () }> All </button>
    </div>
      <div className = "card-holder">
         {
          this.props.portfolio.map ((item, index) => {
            return <Card  key = {index}
              name = {item.name}
              image = {item.image}
              description = {item.description}
              />
            })
          }
      </div>
    </div>

  )
}
}