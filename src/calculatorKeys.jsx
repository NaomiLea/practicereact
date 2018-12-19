import React, { Component } from 'react';

class CalculatorKeys extends Component {
handleClick = () => {
  this.props.incrementCounter(this.props.incrementValue);
};
  render() {
    console.log(this.props)
    return (
      <div className="calculator">
        <button className="" onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      </div>
    );
  }
}

export default CalculatorKeys;
