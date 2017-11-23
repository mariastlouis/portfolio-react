import React from 'react';
import '../styles/card.scss'

export default class Card extends React.Component {
  constructor () {
    super ();
    this.state = {
      showDescription: false
    };
    this.toggleDescription = this.toggleDescription.bind(this);
     this.toggleFront = this.toggleFront.bind(this);
  }

  toggleDescription() {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  toggleFront () {
     this.setState({
      showDescription: !this.state.showDescription
    })
  }


  render () {
    return (
      <div className = "card" onClick = {this.toggleDescription}>
        {
          !this.state.showDescription &&
            <div className = "card-front">
              <div className = "project-image">
                <img className = "portfolio-image" src = {this.props.image} />
              </div>
              <div className = "project-title">
                <p>{this.props.name}</p>
              </div>
              <div className = "card-links">
                <div className = "github-link"> 
                  {this.props.github ? <a href = {this.props.github}> Github </a> : ``}
                </div>
                <div className = "online-link">
                  {this.props.web ? <a href = {this.props.web}> Live </a> : ``}
                </div>
              </div>
           
            </div>
        }
        {
          this.state.showDescription &&
          <div className = "description">
            <div className = "description-text">
              {this.props.description}
            </div>
          </div>
        }

      </div>
    )
  }
}
                  
              
              
