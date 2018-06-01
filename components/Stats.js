import React from 'react'



export default function Stats(props) {
    const playerCount = props.players.length;
    const totalPoints = props.players.reduce(function(total, player) {
      return total + player.score;
    }, 0);
  
    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{playerCount}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
}
  