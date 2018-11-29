import React, { Component } from 'react';

class Clicker extends Component {
  state = {counter: 0};
  handleClick = () => {
    this.setState((prevState) =>({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return (
      <div className="clicker-wrapper">
        <button className="ballClick" onClick={this.handleClick}>
          {this.state.counter}
        </button>
      </div>
    );
  }
}

export default Clicker;
