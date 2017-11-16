import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';


const mapSTPs = state =>({
  pokemons: selectAllPokemon(state)
});

const mapDTPs = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(mapSTPs,mapDTPs)(PokemonIndex);
