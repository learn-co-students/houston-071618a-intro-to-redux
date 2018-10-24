import gamesData from "../gamesData";
import { ADD_PLAYER, SELECT_PLAYER } from "../actions/teams_actions";

// INITIAL STATE
const initialState = {
  teams: gamesData.teams,
  selectedPlayer: null
};

// REDUCER responsible for managing state changes
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      const player = action.player;
      const team = state.teams.find(team => team.id === player.team_id);
      const teamIndex = state.teams.indexOf(team);
      const playersCopy = [...team.players, player];
      const teamCopy = { ...team, players: playersCopy };
      const teamsCopy = [...state.teams];
      teamsCopy.splice(teamIndex, 1, teamCopy);
      return { ...state, teams: teamsCopy };
    case SELECT_PLAYER:
      return { ...state, selectedPlayer: action.player };
    default:
      return state;
  }
};
