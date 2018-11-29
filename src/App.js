import React, { Component } from 'react';
import './App.css';
import Header from './header.jsx';
import Select from './selectgame.jsx';
import TicTacToe from './tictactoe.jsx';
import Clicker from './clicking.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

      </div>
    );
  }
}

export default App;
