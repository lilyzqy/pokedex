import React from 'react';
import {Route} from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemons = this.props.pokemons;
    const pokemonItems = pokemons.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon= {pokemon}/>
    ));

    return(
      <section className="pokedex">
        <Route path="/pokemons/:pokemonId" component={PokemonDetailContainer} />
        <ol>
          {pokemonItems}
        </ol>
      </section>
    );
  }
}

export default PokemonIndex;
