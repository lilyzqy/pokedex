import {fetchAllPokemon, fetchSinglePokemon} from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemons => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const receiveSinglePokemon = payload => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload
});


export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemons => dispatch(receiveAllPokemon(pokemons)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  fetchSinglePokemon(id)
    .then(payload => dispatch(receiveSinglePokemon(payload)))
);
