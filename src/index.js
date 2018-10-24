// Thursday
//  - show different files
//  - take the state out of app
//  - build out the SELECT_PLAYER action creator & reducer case
//  - connect / mstp / mdtp
//  - (Tim) create form

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
      const player = action.player;
      const teamsCopy = [...state.teams];
      const playerTeam = teamsCopy.find(team => team.id === player.teamId);
      const playerTeamIndex = teamsCopy.indexOf(playerTeam);
      const teamPlayers = [...playerTeam.players, player];
      const playerTeamCopy = { ...playerTeam, players: teamPlayers };
      teamsCopy.splice(playerTeamIndex, 1, playerTeamCopy);
      return { ...state, teams: teamsCopy };
    default:
      return state;
  }
};

// STORE manages state
const store = createStore(reducer);

// DISPATCH calls reducer with current state and passed action
const playerData = { id: 1, teamId: 2, name: "Marylene" };
store.dispatch(addPlayer(playerData));
// store.dispatch({ type: 'MY_ACTION' })
// store.dispatch(myActionCreator())
//
// store.dispatch({ type: 'LEAVE_ROOM' })
// store.dispatch({ type: 'DOOR_OPEN' })

debugger;

ReactDOM.render(<App />, document.getElementById("root"));
