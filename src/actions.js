export const addPlayer = player => ({ type: "ADD_PLAYER", player: player });

export function selectPlayer(player){
  return {
    type: "SELECT_PLAYER",
    payload: player
  }
}
