import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import gamesData from "./gamesData";
import reducer from './reducer'
import {Provider} from 'react-redux'

// ACTION CREATOR
// const myActionCreator = () => ({ type: "MY_ACTION" });
// const inhabitRoomCreator = () => ({ type: "INHABIT_ROOM" });
// const leaveRoomCreator = () => ({ type: "LEAVE_ROOM" });
// const doorOpenCreator = () => ({ type: "DOOR_OPEN" });

// REDUCER responsible for managing state changes

// STORE manages state
const store = createStore(reducer);

// DISPATCH calls reducer with current state and passed action

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById("root"));
