export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemons'
  });
};

export const fetchSinglePokemon = (id) =>{
  return $.ajax({
      method: 'GET',
      url: `api/pokemons/${id}`
  });
};


// export default fetchAllPokemon;
