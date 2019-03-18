// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from "redux";

function playlist(store = [], action) {
  if (action.type === "ADD_TRACK") {
    return [...store, action.payload];
  }
  return store;
}

let trackInput = document.querySelectorAll(".trackInput")[0];
let list = document.querySelectorAll(".list")[0];

let store = createStore(playlist);
store.subscribe(() => {
  console.log(store.getState());
  list.innerHTML = "";
  trackInput.value = "";
  // console.log("subscribe", store.getState());
  store.getState().forEach(track => {
    let li = document.createElement("li");
    li.innerText = track;
    list.appendChild(li);
  });
});

let addTrackClick = document.querySelectorAll(".addTrack")[0];
addTrackClick.addEventListener("click", () => {
  let trackName = trackInput.value;
  store.dispatch({ type: "ADD_TRACK", payload: trackName });
});
