import React from 'react';
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
          <li>{pokemon.defense}</li>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;


// <ol>
//   {pokemonItems}
// </ol>
