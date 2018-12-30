import React, { Component } from 'react';
import CalculatorKeys from './calculatorKeys.jsx';


class Calculator extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="calculator">
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={1}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={2}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={3}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={4}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={5}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={6}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={7}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={8}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={9}/>
        <CalculatorKeys incrementCounter={this.props.incrementCounter} incrementValue={0}/>
        
      </div>
    );
  }
}

export default Calculator;
