import {values} from 'lodash';


export const selectAllPokemon = ({entities: {pokemons}}) =>{
  return values(pokemons);
};

export const selectSinglePokemon = (pokemons,pokemonId) => {
  return pokemons[pokemonId];
};

export const selectPokemonItem = (items, itemId) => {
  return items[itemId];
};
