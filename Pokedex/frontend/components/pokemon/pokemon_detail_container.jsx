import {connect} from 'react-redux';
import {selectSinglePokemon} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import {withRouter} from 'react-router';


const mapSTPs = (state,ownProps) =>{
  const pokemonId = ownProps.match.params.pokemonId;
  return {pokemon: selectSinglePokemon(state.entities.pokemons,pokemonId)};
};

const mapDTPs = (dispatch) => {
  return {requestSinglePokemon: (pId) => dispatch(requestSinglePokemon(pId))};
};


export default withRouter(connect(mapSTPs,mapDTPs)(PokemonDetail));
