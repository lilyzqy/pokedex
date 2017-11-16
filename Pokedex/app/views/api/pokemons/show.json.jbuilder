json.pokemon @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.items do
  json.array! @pokemon.items do |item|
    # json.id item.id
    # json.name item.name
    # json.pokemon_id item.pokemon_id
    # json.price item.price
    json.extract! item, :id,:name, :pokemon_id, :price, :happiness, :image_url
  end
end
