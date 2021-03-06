import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// const initialState = {
//   tracks: ["Smells like spirit", "Enter Sandman"],
//   playlists: ["My home playlist", "My work playlist"]
// };

// function playlist(state = initialState, action) {
//   if (action.type === "ADD_TRACK") {
//     return {
//       ...state,
//       tracks: [...state.tracks, action.payload]
//     };
//   } else if (action.type === "DELETE_TRACK") {
//     return state;
//   } else if (action.type === "ADD_PLAYLIST") {
//     return state;
//   } else if (action.type === "DELETE_PLAYLIST") {
//     return state;
//   }
//   return state;
// }

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
