import  React  from 'react';
import Stopwatch from "./Stopwatch";
import Stats from "./Stats";

export default function Header(props) {
    return (
      <div className="header">
        <Stats players={props.players} />
        <h1>Scoreboard</h1>
        <Stopwatch />
      </div>
    );
  }