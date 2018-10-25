import gamesData from "./gamesData";
// INITIAL STATE
const initialState = {
  teams: gamesData.teams,
  selectedPlayer: null,
  showForm: false
  // turingLightsOn: false
};

export default function reducer(state = initialState, action){
  console.log(action)
  switch (action.type) {
    case "ADD_PLAYER":
      const player = action.payload;
      const team = state.teams.find(team => team.id === player.team_id);
      const teamIndex = state.teams.indexOf(team);
      const playersCopy = [...team.players, player];
      const teamCopy = { ...team, players: playersCopy };
      const teamsCopy = [...state.teams];
      teamsCopy.splice(teamIndex, 1, teamCopy);
      return { ...state, teams: teamsCopy };
    case "SELECT_PLAYER":
        return {...state, selectedPlayer: action.payload}
      break;
    default:
      return state;
  }
};
