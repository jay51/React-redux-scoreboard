
const actionTypes = {
    ADD_PLAYER:"player/ADD_PLAYER",
    REMOVE_PLAYER:"player/REMOVE_PLAYER",
    UPDATE_PALYER_SCORE:"player/UPDATE_PALYER_SCORE"
}

const initState = {
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

export default function(state=initState, action ) {
  
    switch(action.type){
        case actionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name:action.name,
                    score:0
                }
            ];
        
        case actionTypes.REMOVE_PLAYER:
            return [
                ...state.filter( index => index !== action.index)
                // state.players.splice(index, 1);  
            ];
        
        case actionTypes.UPDATE_PALYER_SCORE:
            return state.map( (player, index) => {
                return index === action.index ? 
                { ...state, score: player.score + action.score}
                :
                player
            });
        
        default:
        return state
            
    }
            
}

