import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import {Route} from 'react-router-dom';
// import Pokemon from './pokemon_index_item';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }


  componentWillReceiveProps(newProps){
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId){
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    const pokemon = this.props.pokemon;
    // const pokemonItems = pokemon.map(pokemon => (
    //   <PokemonIndexItem key={pokemon.id} pokemon= {pokemon}/>
    // ));
    if (!pokemon){
      return null;
    }
    return(
      <section className="pokedex">
        <img src={pokemon.image_url}></img>
        <h1>{pokemon.name}</h1>
        <ul>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense:{pokemon.defense}</li>
        </ul>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </section>
    );
  }
}

export default PokemonDetail;


// <ol>
//   {pokemonItems}
// </ol>
