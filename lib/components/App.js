import React, {Component} from 'react';
import Menu from './Menu.js'
import About from './About.js'
import '../styles/App.scss'
import data from './data.js'
import Card from './Card.js'

export default class App extends Component {
  constructor() {
      super ();    
      this.state = {portfolio: data};
      }
      
    render () {
        return (
            <div> 
                <Menu />
                <About />
                {
                    this.state.portfolio.map ((item, index) => {
                    return <Card  key = {index}
                            name = {item.name}
                            image = {item.image}
                            description = {item.description}
                        />
                    })
                }
             
            </div>
        );
    }
    
    
}