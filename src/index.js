// Thursday
//  - show different files
//  - take the state out of app
//  - build out the SELECT_PLAYER action creator & reducer case
//  - connect / mstp / mdtp
//  - Provider

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers/teams_reducer";
import { addPlayer } from "./actions/teams_actions";

// STORE manages state
const store = createStore(reducer);

// DISPATCH calls reducer with current state and passed action
const playerData = {
  id: 200,
  name: "humzah",
  number: 8.5,
  shoe: 7,
  points: 600,
  rebounds: 500,
  assists: 400,
  steals: 300,
  blocks: 200,
  slamDunks: 100,
  team_id: 2
};
store.dispatch(addPlayer(playerData));
// store.dispatch({ type: 'MY_ACTION' })
// store.dispatch(myActionCreator())
//
// store.dispatch({ type: 'LEAVE_ROOM' })
// store.dispatch({ type: 'DOOR_OPEN' })

debugger;

ReactDOM.render(<App />, document.getElementById("root"));
