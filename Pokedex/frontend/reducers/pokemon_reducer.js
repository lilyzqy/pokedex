import {RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      const pokemons = action.pokemons;
      return merge({},state,pokemons);
    case RECEIVE_SINGLE_POKEMON:
      const pokemon = action.payload.pokemon;
      return merge({},state,{[pokemon.id]: pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
