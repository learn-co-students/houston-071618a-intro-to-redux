// Thursday
//  - connect / mstp / mdtp

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers/teams_reducer";
import { Provider } from "react-redux";

// STORE manages state
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
