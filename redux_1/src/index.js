import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, value: state.value + 1 };
    case "DEC":
      return { ...state, value: state.value - 1 };
    case "RND":
      return { ...state, value: state.value * action.payload };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

// Update function to re-render the UI on state change
const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
};

// Subscribe to the store updates
store.subscribe(update);

// Action creators
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });

// Event listeners for button clicks
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

// React rendering
ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
