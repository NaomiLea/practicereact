import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.avatar_url}/>
      <div>
        <div>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

export default Card;
