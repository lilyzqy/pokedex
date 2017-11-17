import {connect} from 'react-redux';
import {selectPokemonItem} from '../../reducers/selectors';
import ItemDetail from './item_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import {withRouter} from 'react-router';


const mapSTPs = (state,ownProps) =>{
  const itemId = ownProps.match.params.itemId;
  return {pokemon: selectPokemonItem(state.entities.items,itemId)};
};

const mapDTPs = (dispatch) => {
  return {requestSinglePokemon: (pId) => dispatch(requestSinglePokemon(pId))};
};


export default withRouter(connect(mapSTPs,mapDTPs)(ItemDetail));
