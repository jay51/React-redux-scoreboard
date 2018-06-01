const actionTypes = {
    ADD_PLAYER:"player/ADD_PLAYER",
    REMOVE_PLAYER:"player/REMOVE_PLAYER",
    UPDATE_PALYER_SCORE:"player/UPDATE_PALYER_SCORE"
}


export const addPlayer = name => {
    return{
        type: actionTypes.ADD_PLAYER,
        name
    }
}


export const removePlayer = indexe => {
    return {
        type: actionTypes.REMOVE_PLAYER,
        indexe
    }
}


export const updatePlayerScore = (index, score) => {
    return{
        type:actionTypes.UPDATE_PALYER_SCORE,
        index,
        score
    }
}