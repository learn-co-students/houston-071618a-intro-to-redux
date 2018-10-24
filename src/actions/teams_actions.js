// ACTION CREATORS are functions that return actions (plain objects with a `type` key)
export const ADD_PLAYER = "ADD_PLAYER";
export const addPlayer = player => ({ type: ADD_PLAYER, player: player });
