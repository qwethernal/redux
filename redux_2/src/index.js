import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

// Create the Redux store
const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

// Update function to re-render the UI on state change
const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

// Subscribe to the store updates
subscribe(update);

const {inc, dec, rnd, plus5, minus3} = bindActionCreators( actions, dispatch);
// Event listeners for button clicks
document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('plus5').addEventListener('click', plus5);

document.getElementById('minus3').addEventListener('click', minus3);


document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

// React rendering
ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
