import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import gamesData from "./gamesData";

// INITIAL STATE
const initialState = {
  teams: gamesData.teams,
  selectedPlayer: null
  // myActionKey: false,
  // turingLightsOn: false
};

// ACTION CREATOR
// const myActionCreator = () => ({ type: "MY_ACTION" });
// const inhabitRoomCreator = () => ({ type: "INHABIT_ROOM" });
// const leaveRoomCreator = () => ({ type: "LEAVE_ROOM" });
// const doorOpenCreator = () => ({ type: "DOOR_OPEN" });
const addPlayer = player => ({ type: "ADD_PLAYER", player: player });

// REDUCER responsible for managing state changes
const reducer = (state = initialState, action) => {
  // console.log("state", state);
  // console.log("action", action);

  // if (action.type === "MY_ACTION") {
  //   // MUTATION IS BAD! state.myActionKey = true;
  //   return { ...state, myActionKey: true };
  // }
  //
  // if (action.type === "INHABIT_ROOM") {
  //   return { ...state, turingLightsOn: true };
  // }
  //
  // if (action.type === "LEAVE_ROOM") {
  //   return { ...state, turingLightsOn: false };
  // }
  //
  // if (action.type === "DOOR_OPEN") {
  //   return { ...state, turingLightsOn: !state.turingLightsOn };
  // }

  switch (action.type) {
    case "ADD_PLAYER":
      // FROM APP.JS
      // const team = this.state.teams.find(team => team.id == player.team_id);
      // const teamIndex = this.state.teams.indexOf(team);
      // const playersCopy = [...team.players, player];
      // const teamCopy = { ...team, players: playersCopy };
      // const teamsCopy = [...this.state.teams];
      // teamsCopy.splice(teamIndex, 1, teamCopy);
      // this.setState({ teams: teamsCopy });

      const player = action.player;
      const team = state.teams.find(team => team.id === player.team_id);
      const teamIndex = state.teams.indexOf(team);
      const playersCopy = [...team.players, player];
      const teamCopy = { ...team, players: playersCopy };
      const teamsCopy = [...state.teams];
      teamsCopy.splice(teamIndex, 1, teamCopy);
      return { ...state, teams: teamsCopy };
    default:
      return state;
  }
};

// STORE manages state
const store = createStore(reducer);

// DISPATCH calls reducer with current state and passed action
const playerData = { id: 1, team_id: 2, name: "Marylene" };
store.dispatch(addPlayer(playerData));
// store.dispatch({ type: 'MY_ACTION' })
// store.dispatch(myActionCreator())
//
// store.dispatch({ type: 'LEAVE_ROOM' })
// store.dispatch({ type: 'DOOR_OPEN' })

ReactDOM.render(<App />, document.getElementById("root"));
