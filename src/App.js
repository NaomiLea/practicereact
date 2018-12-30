import React, { Component } from 'react';
import './App.css';
import Header from './header.jsx';
import Select from './selectgame.jsx';
import TicTacToe from './tictactoe.jsx';
import Clicker from './clicking.jsx';
import Result from './points.jsx';
import Calculator from './calculator.jsx';
import CardList from './cardlist.jsx';

let data = [
  {name: "Naomi Kudren",
  company: "Hometalk",
  avatar_url: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/48419263_10161134300395585_2205051955116507136_n.jpg?_nc_cat=103&_nc_ht=scontent.fsdv2-1.fna&oh=9206ff8479aded116b9401ca52d292d3&oe=5CCE5314'
},
{name: "Naomi Kudren",
company: "Hometalk",
avatar_url: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/48419263_10161134300395585_2205051955116507136_n.jpg?_nc_cat=103&_nc_ht=scontent.fsdv2-1.fna&oh=9206ff8479aded116b9401ca52d292d3&oe=5CCE5314'
},

];



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
        <CardList cards={data}/>


      </div>
    );
  }
}

export default App;
