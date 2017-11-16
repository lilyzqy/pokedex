import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

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
        <ol>
          {pokemonItems}
        </ol>
      </section>
    );
  }
}

export default PokemonIndex;
