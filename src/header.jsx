import React from 'react';
import Select from './selectgame.jsx'
import Clicker from './clicking.jsx';
class Header extends React.Component {

state = {name: null};

  changeName(){

    this.setState({name: prompt("What's your name?")});
};

  render() {

    return <div>
        <div className="App-header">
            <h1>Welcome {this.state.name}</h1>
            <button className="change" onClick={()=>this.changeName()} label="Change player">Change player</button>
            <h2>Choose a game</h2>
            <Select/>
            <Clicker/>
        </div>
      </div>

  }
}

export default Header;
