import React, { Component } from 'react';
import Result from './points.jsx';



class Clicker extends Component {
handleClick = () => {
  this.props.incrementCounter(this.props.incrementValue);
};
  render() {
    return (
      <div className="calculator">
        <button className="ballClick" onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      </div>
    );
  }
}

export default Clicker;
