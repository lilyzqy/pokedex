import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
});
