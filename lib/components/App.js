import React, {Component} from 'react';
import Menu from './Menu.js'
import About from './About.js'

export default class App extends Component {
  constructor() {
      super ();    
      }
    render () {
        return (
            <div> 
                <Menu />
                <About />
            </div>
        );
    }
    
    
}