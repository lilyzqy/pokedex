import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash/merge';

const pokemonReducer = (state = {}, action)=>{
  switch(action.type){
    // Object.freeze(state);
    case RECEIVE_ALL_POKEMON:
      const pokemons = action.pokemons;
      return merge({},state,{pokemons});
    default:
      return state;
  }
};

export default pokemonReducer;
