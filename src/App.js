import React, { Component } from 'react';
import './App.css';
import Header from './header.jsx';
import Select from './selectgame.jsx';
import TicTacToe from './tictactoe.jsx';
import Clicker from './clicking.jsx';
import Result from './points.jsx';
import Calculator from './calculator.jsx';

class App extends Component {
  state = {counter: 0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }))
  }



  render() {


    return (
      <div className="App">
        <Header/>
        <Result counter={this.state.counter}/>
        <Calculator incrementCounter={this.incrementCounter}/>
      </div>
    );
  }
}

export default App;
