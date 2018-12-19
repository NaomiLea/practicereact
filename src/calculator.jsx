import React, { Component } from 'react';
import CalculatorKeys from './calculatorKeys.jsx';


class Calculator extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="calculator">
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={10}/>
      </div>
    );
  }
}

export default Calculator;
