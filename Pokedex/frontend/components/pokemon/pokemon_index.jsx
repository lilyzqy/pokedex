import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemons = this.props.pokemons;
    const pokemonIdx = pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}<img className="pokeimg" src={pokemon.image_url}></img></li>);

    return(
      <ol>
        {pokemonIdx}
      </ol>
    );
  }
}

export default PokemonIndex;
