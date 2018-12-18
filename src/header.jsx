import React from 'react';
import Select from './selectgame.jsx'
class Header extends React.Component {

state = {name: null, playGame = false};

  changeName(){
    this.setState({name: prompt("What's your name?")});
};

playgame(){
  this.setState({playGame: false});
};

  render() {

    return <div>
        <div className={"App-header " + ({(this.state.playGame = false)} ? 'playing' : 'not'})}>
            <h1>Welcome {this.state.name}</h1>
            <button className="change" onClick={()=>this.changeName()} label="Change player">Change player</button>
            <h2>Choose a game</h2>
            <Select/>
        </div>
      </div>

  }
}

export default Header;
