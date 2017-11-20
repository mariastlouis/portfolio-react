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
      <div className = "card" onMouseEnter = {this.toggleDescription} onMouseLeave = {this.toggleDescription}>
        {
          !this.state.showDescription &&
            <div className = "card-front">
              <div className = "project-title">
                <h3>{this.props.name}</h3>
              </div>
              <div className = "project-image">
                <img className = "portfolio-image" src = {this.props.image} />
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