import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = ["Smells like teen spirit", "Enter sandman"];

function playlist(store = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return [...store, action.payload];
  }
  return store;
}

let store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
// let trackInput = document.querySelectorAll(".trackInput")[0];
// let list = document.querySelectorAll(".list")[0];

// store.subscribe(() => {
//   console.log(store.getState());
//   list.innerHTML = "";
//   trackInput.value = "";
//   // console.log("subscribe", store.getState());
//   store.getState().forEach(track => {
//     let li = document.createElement("li");
//     li.innerText = track;
//     list.appendChild(li);
//   });
// });

// let addTrackClick = document.querySelectorAll(".addTrack")[0];
// addTrackClick.addEventListener("click", () => {
//   let trackName = trackInput.value;
//   store.dispatch({ type: "ADD_TRACK", payload: trackName });
// });
