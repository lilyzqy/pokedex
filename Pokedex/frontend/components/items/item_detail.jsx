import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
  }
  //
  // componentDidMount(){
  //   this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  // }
  //
  //
  // componentWillReceiveProps(newProps){
  //   if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId){
  //     this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  //   }
  // }

  render(){

    return(

      <h1>Hi</h1>
    );
  }
}

export default ItemDetail;
