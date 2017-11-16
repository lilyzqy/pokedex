import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const pokemon = this.props.pokemon;
    return(
        <li><Link to={`/pokemons/${pokemon.id}`}>{pokemon.name}</Link>
          <img className="pokeimg" src={pokemon.image_url}></img>
        </li>
    );
  }
}

export default PokemonIndexItem;
