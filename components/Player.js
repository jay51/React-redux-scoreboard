
import React from 'react';
import Counter from "./Counter";


export default function Player(props) {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={props.onRemove}>✖</a>
          {props.name}
        </div>
        <div className="player-score">
          <Counter onChange={props.onScoreChange} score={props.score} />
        </div>
      </div>
    );
  }
  