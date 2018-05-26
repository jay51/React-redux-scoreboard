import React from "react";
// components
import Stopwatch from "../components/Stopwatch";
import Stats from "../components/Stats";
import Counter from "../components/Counter";
import Addplayerform from "../components/Addplayerform";
import Header from "../components/Header";
import Player from "../components/Player";


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      players: [
        {
          name: 'Jim Hoskins',
          score: 31,
        },
        {
          name: 'Andrew Chalkley',
          score: 20,
        },
        {
          name: 'Alena Holligan',
          score: 50,
        },
      ],

    }
  }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onAddPlayer = name => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  }

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render () {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <Addplayerform onAdd={this.onAddPlayer} />
      </div>
    );
  }


}

export default App;