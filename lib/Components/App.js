import React, {Component} from 'react';
import Menu from './Menus.js'
import About from './About.js'
import '../styles/App.scss'
import data from './data.js'
import Grid from './Grid.js'
import Scrollchor from 'react-scrollchor';
import Skills from './Skills.js'
// import Portfolio from './Portfolio.js'

export default class App extends Component {
    constructor() {
      super ();    
      this.state = {portfolio: data};
      this.filterPortfolio = this.filterPortfolio.bind(this);
      this.setOriginalState = this.setOriginalState.bind(this);
    }

    componentDidMount() {
        this.setOriginalState();
    }

     setOriginalState() {
        this.setState({portfolio: data})
    }


    filterPortfolio (filter) {
        const originalData = {portfolio: data}

        const filteredData = originalData.portfolio.filter ((item) => {
        return item.category.includes( filter );
        })

        this.setState ({
        portfolio: filteredData
        })
 
        
    }


    render () {
       
        return (
            <div> 
                <Menu />
                <Skills />
                <About />
                <Grid portfolio = {this.state.portfolio} 
                      filterFunction = {this.filterPortfolio}
                      originalState = {this.setOriginalState} />
                <div className = "scroll-top">
                    <Scrollchor to= '#menu' className="top-button"> Top </Scrollchor>
                </div>
            </div>
        );
        
    }
    
    
}
