// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore } from 'redux';

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
};

let store = createStore(playlist);
// console.log(store.getState());

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like teen spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Toxic' });