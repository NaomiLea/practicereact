import React, { Component } from 'react';
import Result from './points.jsx';



class Clicker extends Component {

  render() {
    return (
      <div className="clicker-wrapper">
        <button className="ballClick" onClick={() => this.props.incrementCounter()}>
          Click me
        </button>
      </div>
    );
  }
}

export default Clicker;
