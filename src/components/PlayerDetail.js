import React, { PropTypes } from 'react';
// i need to add actions and reducer for this component.
const PlayerDetail = ({ props }) => {
  if( true ){
    return (
      <div>
        <h3>{ }</h3>
        <ul>
          <li>
            <span>Score: </span> 
            { }
          </li>
          <li>
            <span>Created: </span> 
            { }
          </li>
          <li>
            <span>Updated: </span> 
            { }
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};


export default PlayerDetail;
