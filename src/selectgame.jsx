import React from 'react';


class Select extends React.Component {
  render() {
    return (
      <div>
        <select>
          <option>Game one</option>
          <option>Game two</option>
        </select>
        <button>Play</button>
      </div>
    );
  }
}

export default Select;
