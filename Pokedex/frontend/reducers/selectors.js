import {values} from 'lodash';


export const selectAllPokemon = ({entities: {pokemons}}) =>{
  return values(pokemons);
};
